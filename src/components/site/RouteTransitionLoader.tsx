import { useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import loaderLogo from "@/assets/sysoft-loader.png.asset.json";

/**
 * Full-screen overlay shown between route changes.
 * Renders an animated logo reveal + gradient sweep.
 */
export function RouteTransitionLoader() {
  const isNavigating = useRouterState({
    select: (s) => s.isLoading || s.isTransitioning,
  });

  // Keep the overlay mounted briefly after navigation completes so the
  // exit animation can play.
  const [visible, setVisible] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const lastFocused = useRef<Element | null>(null);

  // Preload the loader logo once on mount to avoid layout shift / flash on first navigation.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const img = new Image();
    img.src = loaderLogo.url;
  }, []);

  useEffect(() => {
    if (isNavigating) {
      if (hideTimer.current) clearTimeout(hideTimer.current);
      setVisible(true);
    } else if (visible) {
      hideTimer.current = setTimeout(() => setVisible(false), 450);
    }
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [isNavigating, visible]);

  // Lock body scroll and move focus into the overlay while it is visible.
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (!visible) return;
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
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      role="alertdialog"
      aria-modal="true"
      aria-live="assertive"
      aria-busy={isNavigating}
      aria-label="Loading next page"
      tabIndex={-1}
      className={`fixed inset-0 z-[100] flex items-center justify-center outline-none transition-opacity duration-300 will-change-[opacity] ${
        isNavigating ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      {/* Logo reveal */}
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative size-20">
          {/* Rotating gradient ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-cta opacity-70 blur-xl animate-pulse" />
          <div className="absolute inset-[-6px] rounded-full border border-brand/30 loader-ring" />
          <div className="absolute inset-[-14px] rounded-full border border-brand/10 loader-ring-slow" />

          {/* Logo */}
          <div className="relative size-20 rounded-full bg-card/80 border border-border backdrop-blur flex items-center justify-center overflow-hidden shadow-[0_0_40px_-8px_oklch(0.7_0.2_260/70%)] loader-logo-pop">
            <img
              src={loaderLogo.url}
              alt="SySoft Systems"
              className="size-11 object-contain"
            />
            {/* Shimmer sweep */}
            <div className="absolute inset-0 loader-shimmer" />
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-40 h-[2px] rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-1/3 bg-gradient-cta loader-progress" />
        </div>

        <div className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Loading Module
        </div>
      </div>
    </div>
  );
}