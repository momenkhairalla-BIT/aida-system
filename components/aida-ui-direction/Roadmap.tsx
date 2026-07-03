import {
  IconStore,
  IconGear,
  IconGlobe,
  IconClock,
} from "./icons";

const GROUPS = [
  {
    ic: <IconStore size={22} />,
    bg: "var(--adp-g-coffee)",
    t: "Café Onboarding & Branding",
    s: "Set up any café as its own branded product",
    items: [
      "Café business assessment before system setup",
      "Brand-based app customization",
      "White-label café app setup",
      "Logo, colours, and theme customization",
    ],
  },
  {
    ic: <IconGear size={22} />,
    bg: "var(--adp-g-gold)",
    t: "Loyalty & Operations Builder",
    s: "Configurable tools for each café's rules",
    items: [
      "Loyalty rules builder",
      "Digital stamp configuration",
      "Voucher and campaign builder",
      "POS setup for small cafés",
      "Owner dashboard template",
    ],
  },
  {
    ic: <IconGlobe size={22} />,
    bg: "linear-gradient(135deg,#8a5a3a,#5f3e29)",
    t: "Scale, Payments & Intelligence",
    s: "Grow from one café to many",
    items: [
      "Multi-branch support",
      "Inventory management",
      "Payment gateway integration",
      "E-wallet / DuitNow / FPX integration",
      "Accounting system integration",
      "App publication on Google Play & App Store",
      "AI-based sales insights & customer segmentation",
      "Franchise-ready café operating system",
    ],
  },
];

export function Roadmap() {
  return (
    <section className="adp-section" id="roadmap">
      <div className="adp-container">
        <div className="adp-head">
          <span className="adp-eyebrow">
            <span className="adp-dot" />
            06 · Future Improvement
          </span>
          <span className="adp-road-note" style={{ display: "flex" }}>
            <IconClock size={14} /> Roadmap only — not part of the current Aida Café phase
          </span>
          <h2 className="adp-h2">Future Improvement: Café Startup Digitalization Service</h2>
          <p className="adp-sub">
            After Aida Café succeeds as the first implementation, the same system could be
            expanded into a reusable service for new cafés, small F&amp;B startups, university
            cafés, kiosks, and boutique coffee brands. These are future opportunities — we are not
            building them now.
          </p>
        </div>

        <div className="adp-road-grid">
          {GROUPS.map((g) => (
            <div className="adp-road-col" key={g.t}>
              <div className="adp-road-col__ic" style={{ background: g.bg }}>
                {g.ic}
              </div>
              <div className="adp-road-col__t">{g.t}</div>
              <div className="adp-road-col__s">{g.s}</div>
              <ul className="adp-road-list">
                {g.items.map((it) => (
                  <li key={it}>
                    <span className="adp-plus">+</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
