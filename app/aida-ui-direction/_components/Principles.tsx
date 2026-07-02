import { IconHeart, IconBag, IconChart, IconSparkle } from "./Icons";

const PRINCIPLES = [
  {
    num: "01",
    icon: <IconHeart size={22} />,
    bg: "var(--grad-pink)",
    t: "Customer app: beautiful & rewarding",
    d: "Simple, warm, and reward-focused. Every screen makes points, stamps, and offers feel valuable and effortless.",
  },
  {
    num: "02",
    icon: <IconBag size={22} />,
    bg: "var(--grad-coffee)",
    t: "Staff POS: fast & mistake-resistant",
    d: "Touch-friendly targets, clear flows, and confirmation before checkout keep baristas quick and confident.",
  },
  {
    num: "03",
    icon: <IconChart size={22} />,
    bg: "var(--grad-gold)",
    t: "Admin dashboard: clear & owner-ready",
    d: "Professional, legible reporting that gives the owner instant confidence in sales, members, and rewards.",
  },
  {
    num: "04",
    icon: <IconSparkle size={22} />,
    bg: "linear-gradient(135deg,#8a5a3a,#5f3e29)",
    t: "Commercially competitive",
    d: "A real, market-ready café product that stands beside the best Malaysian café apps — original and premium.",
  },
];

export function Principles() {
  return (
    <section className="section section--tint" id="principles">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            <span className="dot" />
            04 · Design Principles
          </span>
          <h2 className="section-title">The rules that keep Aida premium</h2>
          <p className="section-sub">
            One consistent visual system across three interfaces — each optimised for the people
            who use it, and all held to a commercial standard.
          </p>
        </div>

        <div className="principles">
          {PRINCIPLES.map((p) => (
            <article className="principle" key={p.num}>
              <div className="principle__num">{p.num}</div>
              <div className="principle__ic" style={{ background: p.bg }}>
                {p.icon}
              </div>
              <div className="principle__t">{p.t}</div>
              <p className="principle__d">{p.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
