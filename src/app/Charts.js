// Inline SVG finance charts — no libraries. Colors pull from CSS vars where possible.

// Revenue vs Expense — grouped bars, 6 months
export function RevenueChart() {
  const data = [
    ["Jan", 210, 160], ["Feb", 240, 172], ["Mar", 235, 178],
    ["Apr", 280, 196], ["May", 300, 205], ["Jun", 330, 212],
  ];
  const w = 320, h = 150, max = 360;
  const groupW = w / data.length;
  const barW = 13;

  return (
    <svg viewBox={`0 0 ${w} ${h + 22}`} className="bar-chart" preserveAspectRatio="xMidYMid meet">
      {[0.25, 0.5, 0.75, 1].map((g) => (
        <line key={g} x1="0" x2={w} y1={h - g * h} y2={h - g * h}
          stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
      ))}
      {data.map(([m, rev, exp], i) => {
        const gx = i * groupW + groupW / 2;
        const rh = (rev / max) * h;
        const eh = (exp / max) * h;
        return (
          <g key={m}>
            <rect x={gx - barW - 2} y={h - rh} width={barW} height={rh} rx="3" fill="var(--gold-soft)" />
            <rect x={gx + 2} y={h - eh} width={barW} height={eh} rx="3" fill="var(--chart-blue)" />
            <text x={gx} y={h + 16} textAnchor="middle" fontSize="11" fill="var(--ink-soft)">{m}</text>
          </g>
        );
      })}
    </svg>
  );
}

// Expense breakdown — donut
export const expenseSegments = [
  ["Payroll", 42, "var(--gold-soft)"],
  ["Operations", 22, "var(--chart-blue)"],
  ["Rent", 18, "var(--chart-green)"],
  ["Tax & VAT", 10, "#c9a2d8"],
  ["Other", 8, "#9fb0d0"],
];

export function ExpenseDonut() {
  const r = 52, cx = 70, cy = 70;
  const circ = 2 * Math.PI * r;
  let offset = 0;
  return (
    <svg viewBox="0 0 140 140" className="donut">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="16" />
      {expenseSegments.map(([name, pct, col]) => {
        const len = (pct / 100) * circ;
        const el = (
          <circle key={name} cx={cx} cy={cy} r={r} fill="none" stroke={col} strokeWidth="16"
            strokeDasharray={`${len} ${circ - len}`} strokeDashoffset={-offset}
            transform={`rotate(-90 ${cx} ${cy})`} />
        );
        offset += len;
        return el;
      })}
      <text x={cx} y={cy - 2} textAnchor="middle" fontSize="12" fill="var(--ink-soft)">Monthly</text>
      <text x={cx} y={cy + 18} textAnchor="middle" fontSize="20" fontWeight="600" fill="var(--ink)">AED 128k</text>
    </svg>
  );
}

// Tiny trend line for a KPI tile
export function Sparkline({ data = [8, 10, 9, 12, 11, 14, 16], color = "var(--gold-soft)" }) {
  const w = 120, h = 34;
  const max = Math.max(...data), min = Math.min(...data);
  const step = w / (data.length - 1);
  const pts = data.map((v, i) => [i * step, h - ((v - min) / (max - min || 1)) * (h - 6) - 3]);
  const line = pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
  const area = `${line} L ${w} ${h} L 0 ${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="spark" preserveAspectRatio="none">
      <path d={area} fill={color} opacity="0.12" />
      <path d={line} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
