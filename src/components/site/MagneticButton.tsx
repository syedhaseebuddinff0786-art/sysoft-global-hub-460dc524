import { useRef, type ReactNode } from "react";

export function MagneticButton({
  children,
  className = "",
  href,
  strength = 0.35,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate3d(0,0,0)";
  };
  return (
    <a
      ref={ref}
      href={href}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`inline-flex items-center gap-2 transition-transform duration-300 ease-out will-change-transform ${className}`}
    >
      {children}
    </a>
  );
}

export function TiltCard({
  children,
  className = "",
  intensity = 8,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-py * intensity}deg) rotateY(${px * intensity}deg) translateZ(0)`;
    el.style.setProperty("--mx", `${(px + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(py + 0.5) * 100}%`);
  };
  const onLeave = () => {
    if (ref.current)
      ref.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };
  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ transformStyle: "preserve-3d" }}
      className={`relative transition-transform duration-200 ease-out will-change-transform ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 hover:opacity-100 transition-opacity"
        style={{
          background:
            "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), oklch(0.75 0.18 240 / 0.18), transparent 60%)",
        }}
      />
      {children}
    </div>
  );
}