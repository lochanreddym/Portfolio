/**
 * Decorative analytics motion graphic for the hero.
 * Pure SVG + CSS animations — no JS animation libraries (Netlify / CWV friendly).
 */
export function HeroMotionGraphic() {
  return (
    <svg
      className="hero-visual-plane motion-mesh parallax-slow h-full w-full"
      viewBox="0 0 640 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#54457f" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#54457f" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#54457f" />
          <stop offset="100%" stopColor="#2c6a65" />
        </linearGradient>
        <linearGradient id="barGrad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#54457f" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#54457f" stopOpacity="0.55" />
        </linearGradient>
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Soft atmosphere orbs */}
      <circle cx="520" cy="90" r="110" fill="#54457f" fillOpacity="0.07" className="motion-float" />
      <circle cx="90" cy="400" r="90" fill="#2c6a65" fillOpacity="0.08" />

      {/* Grid */}
      <g stroke="#54457f" strokeOpacity="0.08" strokeWidth="1">
        {[80, 140, 200, 260, 320, 380, 440].map((y) => (
          <line key={`h-${y}`} x1="40" y1={y} x2="600" y2={y} />
        ))}
        {[80, 160, 240, 320, 400, 480, 560].map((x) => (
          <line key={`v-${x}`} x1={x} y1="60" x2={x} y2="460" />
        ))}
      </g>

      {/* Rising bars */}
      <g>
        {[
          { x: 72, h: 70 },
          { x: 118, h: 110 },
          { x: 164, h: 88 },
          { x: 210, h: 150 },
          { x: 256, h: 120 },
          { x: 302, h: 175 },
        ].map((bar) => (
          <rect
            key={bar.x}
            className="chart-bar"
            x={bar.x}
            y={420 - bar.h}
            width="28"
            height={bar.h}
            rx="6"
            fill="url(#barGrad)"
          />
        ))}
      </g>

      {/* Area chart */}
      <path
        d="M360 340 C400 300, 430 360, 470 280 C510 200, 540 230, 580 170 L580 420 L360 420 Z"
        fill="url(#areaFill)"
      />
      <path
        className="draw-path"
        d="M360 340 C400 300, 430 360, 470 280 C510 200, 540 230, 580 170"
        stroke="url(#lineStroke)"
        strokeWidth="3"
        strokeLinecap="round"
        pathLength="1"
        filter="url(#softGlow)"
      />

      {/* Flowing connector paths */}
      <path
        className="flow-path"
        d="M90 180 C180 140, 240 220, 330 190 C400 165, 450 120, 520 100"
        stroke="#2c6a65"
        strokeOpacity="0.45"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        className="flow-path"
        d="M70 260 C150 290, 220 240, 300 270 C380 300, 450 250, 560 290"
        stroke="#54457f"
        strokeOpacity="0.4"
        strokeWidth="1.5"
        fill="none"
        style={{ animationDelay: "0.8s" }}
      />

      {/* Pulse nodes */}
      <g fill="#54457f">
        <circle className="pulse-node" cx="90" cy="180" r="5" />
        <circle className="pulse-node" cx="330" cy="190" r="4" fill="#2c6a65" />
        <circle className="pulse-node" cx="520" cy="100" r="5" />
        <circle className="pulse-node" cx="470" cy="280" r="4.5" fill="#2c6a65" />
      </g>

      {/* KPI markers */}
      <g fontFamily="var(--font-body), sans-serif" fontSize="11" fill="#5a6472">
        <text x="72" y="448">
          Q1
        </text>
        <text x="164" y="448">
          Q2
        </text>
        <text x="256" y="448">
          Q3
        </text>
        <text x="470" y="160" fill="#54457f" fontWeight="600">
          Insight
        </text>
      </g>
    </svg>
  );
}
