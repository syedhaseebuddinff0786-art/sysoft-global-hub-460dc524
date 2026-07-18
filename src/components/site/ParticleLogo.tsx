import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  tx: number;
  ty: number;
  vx: number;
  vy: number;
  size: number;
  hue: number;
  alpha: number;
};

/**
 * Canvas-based particle field that assembles into the "S·S·S" wordmark.
 * Titanium / blue-glass palette to match the hero's material language.
 */
export function ParticleLogo({
  text = "S·S·S",
  className,
  height = 220,
}: {
  text?: string;
  className?: string;
  height?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const parent = canvas.parentElement!;
    const width = parent.clientWidth;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    // Rasterize the wordmark to sample target positions.
    const off = document.createElement("canvas");
    off.width = width;
    off.height = height;
    const octx = off.getContext("2d")!;
    octx.fillStyle = "#fff";
    octx.textAlign = "center";
    octx.textBaseline = "middle";
    const fontSize = Math.min(height * 0.78, width * 0.32);
    octx.font = `800 ${fontSize}px "Inter", system-ui, sans-serif`;
    octx.fillText(text, width / 2, height / 2);
    const img = octx.getImageData(0, 0, width, height).data;

    const targets: { x: number; y: number }[] = [];
    const step = Math.max(3, Math.floor(fontSize / 40));
    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const idx = (y * width + x) * 4 + 3;
        if (img[idx] > 128) targets.push({ x, y });
      }
    }

    const particles: Particle[] = targets.map((t) => ({
      x: width / 2 + (Math.random() - 0.5) * width * 1.6,
      y: height / 2 + (Math.random() - 0.5) * height * 2.4,
      tx: t.x,
      ty: t.y,
      vx: 0,
      vy: 0,
      size: 0.9 + Math.random() * 1.4,
      hue: 210 + Math.random() * 40,
      alpha: 0,
    }));

    let raf = 0;
    let start = performance.now();
    const draw = (now: number) => {
      const t = (now - start) / 1000;
      ctx.clearRect(0, 0, width, height);

      // Subtle radial glow behind text
      const grad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        10,
        width / 2,
        height / 2,
        width / 2,
      );
      grad.addColorStop(0, "rgba(120,160,255,0.18)");
      grad.addColorStop(1, "rgba(120,160,255,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = "lighter";
      for (const p of particles) {
        const dx = p.tx - p.x;
        const dy = p.ty - p.y;
        // Spring toward target
        p.vx = (p.vx + dx * 0.012) * 0.86;
        p.vy = (p.vy + dy * 0.012) * 0.86;
        // Idle shimmer once assembled
        const settled = Math.abs(dx) < 0.6 && Math.abs(dy) < 0.6;
        if (settled) {
          p.vx += Math.sin(t * 2 + p.tx * 0.05) * 0.04;
          p.vy += Math.cos(t * 2 + p.ty * 0.05) * 0.04;
        }
        p.x += p.vx;
        p.y += p.vy;
        p.alpha = Math.min(1, p.alpha + 0.02);

        const r = p.size + (settled ? Math.sin(t * 3 + p.tx) * 0.3 : 0);
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 4);
        g.addColorStop(0, `hsla(${p.hue},90%,85%,${0.9 * p.alpha})`);
        g.addColorStop(0.4, `hsla(${p.hue},95%,65%,${0.35 * p.alpha})`);
        g.addColorStop(1, "hsla(220,90%,60%,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `hsla(${p.hue},100%,95%,${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(raf);
  }, [text, height]);

  return (
    <div className={className} style={{ width: "100%", height }}>
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}