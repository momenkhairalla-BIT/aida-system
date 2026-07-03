import {
  IconLayers,
  IconGift,
  IconChart,
  IconGraduation,
  IconQr,
  IconCoffee,
} from "./icons";

const PILLARS = [
  {
    ic: <IconCoffee size={20} />,
    bg: "var(--adp-g-coffee)",
    t: "Connected Customer App",
    d: "Membership, Aida Points, stamps, and student offers in one warm, reward-first app.",
    tags: ["Loyalty", "Menu", "Scheduled orders"],
  },
  {
    ic: <IconQr size={20} />,
    bg: "var(--adp-g-gold)",
    t: "Staff POS Built-In",
    d: "Scan members, ring up sales, apply offers, and redeem rewards — all at the counter.",
    tags: ["POS sales", "Redemption", "Scan member"],
  },
  {
    ic: <IconChart size={20} />,
    bg: "linear-gradient(135deg,#8a5a3a,#5f3e29)",
    t: "Owner Admin Dashboard",
    d: "Live sales, members, menu, promotions, and reports for confident business decisions.",
    tags: ["Reports", "Menu mgmt", "Promotions"],
  },
];

export function Positioning() {
  return (
    <section className="adp-section" id="positioning">
      <div className="adp-container">
        <div className="adp-head">
          <span className="adp-eyebrow">
            <span className="adp-dot" />
            03 · Aida Competitive Positioning
          </span>
          <h2 className="adp-h2">Not just an ordering app — a café ecosystem</h2>
          <p className="adp-sub">
            Most café apps stop at customer ordering. Aida connects the customer, the counter, and
            the owner into one system — which is exactly why it can compete and win.
          </p>
        </div>

        <div className="adp-pos-lead">
          <div className="adp-pos-card">
            <div className="adp-pos-card__title">Where typical café apps stop</div>
            <p className="adp-pos-card__text">
              A single customer-facing ordering app, with loyalty bolted on and little visibility
              for staff at the counter or owners in the back office. The experience is fragmented
              across separate tools.
            </p>
          </div>
          <div className="adp-pos-card adp-pos-card--dark">
            <div className="adp-pos-card__title">Where Aida goes further</div>
            <p className="adp-pos-card__text">
              One connected ecosystem — Customer App, Staff POS, and Admin Dashboard — sharing the
              same members, points, offers, and data in real time. Loyalty, student offers, and
              reporting are native, not add-ons.
            </p>
          </div>
        </div>

        <div className="adp-pillars">
          {PILLARS.map((p) => (
            <div className="adp-pillar" key={p.t}>
              <div className="adp-pillar__ic" style={{ background: p.bg }}>
                {p.ic}
              </div>
              <div className="adp-pillar__t">{p.t}</div>
              <p className="adp-pillar__d">{p.d}</p>
              <div className="adp-pillar__tags">
                {p.tags.map((t) => (
                  <span className="adp-chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
