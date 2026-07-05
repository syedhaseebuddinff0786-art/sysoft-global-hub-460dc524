import { useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ParticleLogo } from "./ParticleLogo";

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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.16_0.05_265)_0%,oklch(0.08_0.03_265)_70%,#000_100%)]" />
      <div className="absolute inset-0 backdrop-blur-xl" />
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      {/* Aurora blobs */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-[420px] w-[420px] rounded-full bg-[#3b82f6]/25 blur-[120px] animate-pulse" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[420px] w-[420px] rounded-full bg-[#7c5cff]/25 blur-[120px] animate-pulse" />

      {/* Particle assembly wordmark */}
      <div className="relative flex flex-col items-center gap-8 px-6">
        <div className="relative w-full max-w-[560px]">
          {/* Glass plate */}
          <div className="absolute inset-0 -m-6 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-[0_30px_120px_-30px_rgba(80,120,255,0.6)]" />
          {/* Titanium sheen top edge */}
          <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
          <div className="relative">
            <ParticleLogo text="S·S·S" height={220} />
          </div>
          {/* Reflection */}
          <div className="relative -mt-4 h-16 overflow-hidden opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]">
            <div className="scale-y-[-1] origin-top">
              <ParticleLogo text="S·S·S" height={80} />
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative w-64 h-[2px] rounded-full bg-white/10 overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-[#9cc4ff] to-transparent loader-progress" />
        </div>

        <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/50">
          Assembling · SySoft Systems
        </div>

        {/* Hidden fallback preserving prior asset ref */}
        <img src={loaderLogoUrl} alt="" className="hidden" aria-hidden="true" onError={(e) => { e.currentTarget.style.display = "none"; }} />
      </div>
    </div>
  );
}