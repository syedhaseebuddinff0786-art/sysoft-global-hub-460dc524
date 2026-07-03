import { useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

const loaderLogoUrl = "/sysoft-loader.png";
const INITIAL_LOADER_MS = 5000;
const ROUTE_LOADER_MS = 4000;
const EXIT_FADE_MS = 850;

/**
 * Full-screen overlay shown between route changes.
 * Renders an animated logo reveal + gradient sweep.
 */
export function RouteTransitionLoader() {
  const isNavigating = useRouterState({
    select: (s) => s.isLoading || s.isTransitioning,
  });
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  // Keep the overlay mounted long enough for a premium reveal on initial load
  // and on fast route changes, then fade it out cleanly.
  const [mounted, setMounted] = useState(true);
  const [active, setActive] = useState(true);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const unmountTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const lastFocused = useRef<Element | null>(null);
  const lastPathname = useRef(pathname);
  const previousNavigating = useRef(isNavigating);
  const sequence = useRef(0);

  const clearTimers = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    if (unmountTimer.current) clearTimeout(unmountTimer.current);
    hideTimer.current = null;
    unmountTimer.current = null;
  };

  const showLoaderFor = (duration: number) => {
    const currentSequence = sequence.current + 1;
    sequence.current = currentSequence;
    clearTimers();
    setMounted(true);
    setActive(true);

    hideTimer.current = setTimeout(() => {
      if (sequence.current !== currentSequence) return;
      setActive(false);
      unmountTimer.current = setTimeout(() => {
        if (sequence.current !== currentSequence) return;
        setMounted(false);
      }, EXIT_FADE_MS);
    }, duration);
  };

  // Preload the loader logo once on mount to avoid layout shift / flash on first navigation.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const img = new Image();
    img.src = loaderLogoUrl;
    showLoaderFor(INITIAL_LOADER_MS);

    return () => clearTimers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // The root shell includes a tiny server-rendered startup loader so the logo
  // reveal is visible before React hydrates. Fade it after hydration while this
  // client loader continues managing initial and route transitions.
  useEffect(() => {
    if (typeof document === "undefined") return;
    const startupLoader = document.getElementById("sysoft-startup-loader");
    if (!startupLoader) return;

    const hideStartup = window.setTimeout(() => {
      startupLoader.dataset.hidden = "true";
    }, 4200);
    const removeStartup = window.setTimeout(() => {
      startupLoader.remove();
    }, 5050);

    return () => {
      window.clearTimeout(hideStartup);
      window.clearTimeout(removeStartup);
    };
  }, []);

  useEffect(() => {
    const pathnameChanged = lastPathname.current !== pathname;
    if (pathnameChanged) {
      lastPathname.current = pathname;
    }

    const navigationStarted = isNavigating && !previousNavigating.current;
    previousNavigating.current = isNavigating;

    if (pathnameChanged || navigationStarted) {
      showLoaderFor(ROUTE_LOADER_MS);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNavigating, pathname]);

  // Lock body scroll and move focus into the overlay while it is visible.
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (!mounted) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lastFocused.current = document.activeElement;
    overlayRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      if (lastFocused.current instanceof HTMLElement) {
        lastFocused.current.focus({ preventScroll: true });
      }
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      ref={overlayRef}
      role="alertdialog"
      aria-modal="true"
      aria-live="assertive"
      aria-busy={active}
      aria-label="Loading next page"
      tabIndex={-1}
      className={`fixed inset-0 z-[2147483000] flex items-center justify-center outline-none transition-opacity duration-700 will-change-[opacity] ${
        active ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/92 backdrop-blur-lg" />
      <div className="absolute inset-0 grid-bg opacity-45 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      {/* Logo reveal */}
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative size-24 transform-gpu will-change-transform">
          {/* Rotating gradient ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-cta opacity-70 blur-xl animate-pulse" />
          <div className="absolute inset-[-6px] rounded-full border border-brand/30 loader-ring" />
          <div className="absolute inset-[-14px] rounded-full border border-brand/10 loader-ring-slow" />

          {/* Logo */}
          <div className="relative size-24 rounded-full bg-card/90 border border-border backdrop-blur flex items-center justify-center overflow-hidden shadow-[0_0_56px_-8px_oklch(0.7_0.2_260/80%)] loader-logo-pop transform-gpu will-change-transform">
            <span className="font-mono-tech text-2xl font-bold tracking-tighter text-foreground" aria-hidden="true">
              S$S
            </span>
            <img
              src={loaderLogoUrl}
              alt="SySoft Systems"
              className="absolute size-14 object-contain"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            {/* Shimmer sweep */}
            <div className="absolute inset-0 loader-shimmer" />
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-48 h-[2px] rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-1/3 bg-gradient-cta loader-progress" />
        </div>

        <div className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Loading Module
        </div>
      </div>
    </div>
  );
}