import { useState } from "react";

const NODES = [
  "WebDev", "SySoft", "AIAB", "Auto RPA", "ERP-CRM", "EdTech", "FinTech", "DBMS",
  "CSS", "SAD", "ITIS", "DMT", "WAPO", "DS", "RAO", "Cloud",
];

export function EcosystemNetwork() {
  const [active, setActive] = useState<number | null>(null);
  const size = 520;
  const cx = size / 2;
  const cy = size / 2;
  const R = 210;
  return (
    <section className="relative border-y border-border bg-surface-dark overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
        <div>
          <div className="font-mono-tech text-xs text-brand uppercase tracking-widest mb-3">
            [ SGT Core Ecosystem ]
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight mb-6 text-gradient">
            One network. Sixteen specialized divisions.
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg">
            SGT Core operates as a unified digital organism — every division synced
            through a shared engineering fabric, data plane, and identity layer.
          </p>
          <div className="flex flex-wrap gap-2">
            {NODES.map((n, i) => (
              <button
                key={n}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className={`font-mono-tech text-[11px] px-3 py-1.5 rounded-full border transition-all ${
                  active === i
                    ? "border-brand text-brand bg-brand/10"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        <div className="relative aspect-square w-full max-w-[560px] mx-auto">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.7_0.2_260/25%),transparent_65%)]" />
          <svg viewBox={`0 0 ${size} ${size}`} className="relative w-full h-full">
            <defs>
              <radialGradient id="core-grad" cx="50%" cy="50%">
                <stop offset="0%" stopColor="oklch(0.85 0.15 240)" />
                <stop offset="100%" stopColor="oklch(0.35 0.12 260)" />
              </radialGradient>
              <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="oklch(0.75 0.15 220 / 0)" />
                <stop offset="50%" stopColor="oklch(0.75 0.15 220 / 0.8)" />
                <stop offset="100%" stopColor="oklch(0.75 0.15 220 / 0)" />
              </linearGradient>
            </defs>
            {/* Rings */}
            {[0.55, 0.75, 0.95].map((k, i) => (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r={R * k}
                fill="none"
                stroke="oklch(1 0 0 / 0.06)"
                strokeDasharray={i === 1 ? "4 6" : undefined}
              />
            ))}
            {/* Connections */}
            {NODES.map((_, i) => {
              const a = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
              const x = cx + Math.cos(a) * R;
              const y = cy + Math.sin(a) * R;
              const isActive = active === i;
              return (
                <line
                  key={`l${i}`}
                  x1={cx}
                  y1={cy}
                  x2={x}
                  y2={y}
                  stroke={isActive ? "oklch(0.8 0.18 240)" : "oklch(1 0 0 / 0.12)"}
                  strokeWidth={isActive ? 1.4 : 0.7}
                  style={{ transition: "all 0.4s" }}
                />
              );
            })}
            {/* Core */}
            <circle cx={cx} cy={cy} r={44} fill="url(#core-grad)" />
            <circle cx={cx} cy={cy} r={44} fill="none" stroke="oklch(1 0 0 / 0.25)" />
            <circle cx={cx} cy={cy} r={64} fill="none" stroke="oklch(0.75 0.15 220 / 0.35)">
              <animate attributeName="r" values="52;90;52" dur="3.6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0;0.6" dur="3.6s" repeatCount="indefinite" />
            </circle>
            <text
              x={cx}
              y={cy + 4}
              textAnchor="middle"
              className="font-mono-tech"
              fill="white"
              fontSize="13"
              fontWeight="700"
            >
              SGT
            </text>
            {/* Nodes */}
            {NODES.map((label, i) => {
              const a = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
              const x = cx + Math.cos(a) * R;
              const y = cy + Math.sin(a) * R;
              const isActive = active === i;
              return (
                <g
                  key={label}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  style={{ cursor: "pointer", transition: "transform 0.4s" }}
                >
                  <circle
                    cx={x}
                    cy={y}
                    r={isActive ? 18 : 14}
                    fill="oklch(0.18 0.04 265)"
                    stroke={isActive ? "oklch(0.8 0.18 240)" : "oklch(1 0 0 / 0.2)"}
                    strokeWidth={isActive ? 1.5 : 1}
                    style={{ transition: "all 0.3s" }}
                  />
                  <text
                    x={x}
                    y={y + 3}
                    textAnchor="middle"
                    className="font-mono-tech"
                    fill={isActive ? "oklch(0.9 0.05 240)" : "oklch(0.75 0.03 250)"}
                    fontSize="8"
                    fontWeight="600"
                  >
                    {label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}