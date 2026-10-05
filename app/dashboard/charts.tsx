import React from "react";

/* Tiny dependency-free SVG charts for the dashboard previews. Colours come from CSS (see dashboard.css). */

export function AreaChart({
  values,
  labels,
  height = 220,
}: {
  values: number[];
  labels: string[];
  height?: number;
}) {
  const W = 640;
  const H = height;
  const padL = 8, padR = 8, padT = 14, padB = 26;
  const max = Math.max(...values) * 1.15;
  const x = (i: number) => padL + (i * (W - padL - padR)) / (values.length - 1);
  const y = (v: number) => padT + (1 - v / max) * (H - padT - padB);

  const pts = values.map((v, i) => [x(i), y(v)] as const);
  // smooth line (simple catmull-rom → bezier)
  const d = pts.reduce((acc, [px, py], i, a) => {
    if (i === 0) return `M${px},${py}`;
    const [p0x, p0y] = a[i - 2] ?? a[i - 1];
    const [p1x, p1y] = a[i - 1];
    const [p3x, p3y] = a[i + 1] ?? [px, py];
    const c1x = p1x + (px - p0x) / 6, c1y = p1y + (py - p0y) / 6;
    const c2x = px - (p3x - p1x) / 6, c2y = py - (p3y - p1y) / 6;
    return `${acc} C${c1x},${c1y} ${c2x},${c2y} ${px},${py}`;
  }, "");
  const area = `${d} L${x(values.length - 1)},${H - padB} L${x(0)},${H - padB} Z`;
  const grid = [0.25, 0.5, 0.75, 1].map((g) => padT + (1 - g) * (H - padT - padB));
  const last = pts[pts.length - 1];
  const every = Math.ceil(labels.length / 6);
  const showLabel = (i: number) => i === labels.length - 1 || (i % every === 0 && labels.length - 1 - i >= every);

  return (
    <svg className="db-chart" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Chart of sample values over time">
      {grid.map((gy) => (<line key={gy} className="grid" x1={padL} x2={W - padR} y1={gy} y2={gy} />))}
      <path className="area" d={area} />
      <path className="line" d={d} />
      <circle className="pt" cx={last[0]} cy={last[1]} r="5" />
      {labels.map((l, i) => showLabel(i) && (
        <text key={l + i} x={x(i)} y={H - 6} textAnchor={i === 0 ? "start" : i === labels.length - 1 ? "end" : "middle"}>{l}</text>
      ))}
    </svg>
  );
}

export function BarChart({
  values,
  labels,
  countingLast = true,
  height = 200,
}: {
  values: number[];
  labels: string[];
  countingLast?: boolean;
  height?: number;
}) {
  const W = 640;
  const H = height;
  const padT = 14, padB = 26;
  const max = Math.max(...values) * 1.15;
  const slot = W / values.length;
  const bw = Math.min(46, slot * 0.58);

  return (
    <svg className="db-chart" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Chart of sample weekly earnings">
      <defs>
        <pattern id="dbHatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="8" height="8" fill="transparent" />
          <rect width="3" height="8" fill="currentColor" opacity="0.28" />
        </pattern>
      </defs>
      {[0.5, 1].map((g) => {
        const gy = padT + (1 - g) * (H - padT - padB);
        return <line key={g} className="grid" x1={0} x2={W} y1={gy} y2={gy} />;
      })}
      {values.map((v, i) => {
        const h = (v / max) * (H - padT - padB);
        const bx = i * slot + (slot - bw) / 2;
        const by = H - padB - h;
        const isLast = i === values.length - 1;
        return (
          <g key={i}>
            <rect
              className={`bar ${isLast && countingLast ? "bar--count" : i < values.length - 1 ? "" : ""}`}
              x={bx}
              y={by}
              width={bw}
              height={h}
              rx="6"
              style={isLast && countingLast ? { color: "var(--pm-c-text)" } : undefined}
            />
            <text x={bx + bw / 2} y={H - 6} textAnchor="middle">{labels[i]}</text>
          </g>
        );
      })}
    </svg>
  );
}
