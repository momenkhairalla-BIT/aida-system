import {
  IconHeart,
  IconBag,
  IconChart,
  IconSparkle,
  IconLayers,
  IconRocket,
} from "./icons";

const PRINCIPLES = [
  {
    num: "01",
    icon: <IconHeart size={22} />,
    bg: "var(--adp-g-pink)",
    t: "Customer app: beautiful & rewarding",
    d: "Simple, warm, and reward-focused. Every screen makes points, stamps, and offers feel valuable and effortless.",
  },
  {
    num: "02",
    icon: <IconBag size={22} />,
    bg: "var(--adp-g-coffee)",
    t: "Staff POS: fast & mistake-resistant",
    d: "Touch-friendly targets, clear flows, and confirmation before checkout keep baristas quick and confident.",
  },
  {
    num: "03",
    icon: <IconChart size={22} />,
    bg: "var(--adp-g-gold)",
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
  {
    num: "05",
    icon: <IconLayers size={22} />,
    bg: "linear-gradient(135deg,#c99a45,#a97e2f)",
    t: "Consistent across interfaces",
    d: "One shared design system — colours, type, and components stay consistent across customer, staff, and admin.",
  },
  {
    num: "06",
    icon: <IconRocket size={22} />,
    bg: "linear-gradient(135deg,#7fae8f,#4a7a59)",
    t: "Scalable for the future",
    d: "Built to grow with future improvements without disrupting the current Aida Café scope.",
  },
];

export function Principles() {
  return (
    <section className="adp-section adp-section--tint" id="principles">
      <div className="adp-container">
        <div className="adp-head">
          <span className="adp-eyebrow">
            <span className="adp-dot" />
            05 · Design Principles
          </span>
          <h2 className="adp-h2">The rules that keep Aida premium</h2>
          <p className="adp-sub">
            One consistent visual system across three interfaces — each optimised for the people
            who use it, and all held to a commercial standard.
          </p>
        </div>

        <div className="adp-principles">
          {PRINCIPLES.map((p) => (
            <article className="adp-principle" key={p.num}>
              <div className="adp-principle__num">{p.num}</div>
              <div className="adp-principle__ic" style={{ background: p.bg }}>
                {p.icon}
              </div>
              <div className="adp-principle__t">{p.t}</div>
              <p className="adp-principle__d">{p.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
