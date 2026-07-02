// Deterministic decorative QR pattern (visual only — not a scannable code).
// Uses a fixed seed so the render is stable between server and client.

function seeded(seed: number) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

const CELLS = 21;

function buildMatrix(seed: number) {
  const rnd = seeded(seed);
  const m: boolean[][] = [];
  for (let r = 0; r < CELLS; r++) {
    const row: boolean[] = [];
    for (let c = 0; c < CELLS; c++) row.push(rnd() > 0.5);
    m.push(row);
  }
  return m;
}

function isFinder(r: number, c: number) {
  const inBox = (br: number, bc: number) =>
    r >= br && r < br + 7 && c >= bc && c < bc + 7;
  return inBox(0, 0) || inBox(0, CELLS - 7) || inBox(CELLS - 7, 0);
}

function Finder({ x, y, dark }: { x: number; y: number; dark: string }) {
  return (
    <>
      <rect x={x} y={y} width={7} height={7} rx={1.6} fill={dark} />
      <rect x={x + 1} y={y + 1} width={5} height={5} rx={1} fill="#fff" />
      <rect x={x + 2} y={y + 2} width={3} height={3} rx={0.6} fill={dark} />
    </>
  );
}

export function QrPattern({
  seed = 7,
  dark = "#1c1108",
}: {
  seed?: number;
  dark?: string;
}) {
  const m = buildMatrix(seed);
  const rects: React.ReactNode[] = [];
  for (let r = 0; r < CELLS; r++) {
    for (let c = 0; c < CELLS; c++) {
      if (isFinder(r, c)) continue;
      if (m[r][c]) {
        rects.push(
          <rect
            key={`${r}-${c}`}
            x={c}
            y={r}
            width={1}
            height={1}
            rx={0.28}
            fill={dark}
          />,
        );
      }
    }
  }
  return (
    <svg
      className="qr-svg"
      viewBox={`0 0 ${CELLS} ${CELLS}`}
      shapeRendering="crispEdges"
      role="img"
      aria-label="Membership QR code"
    >
      {rects}
      <Finder x={0} y={0} dark={dark} />
      <Finder x={CELLS - 7} y={0} dark={dark} />
      <Finder x={0} y={CELLS - 7} dark={dark} />
    </svg>
  );
}
