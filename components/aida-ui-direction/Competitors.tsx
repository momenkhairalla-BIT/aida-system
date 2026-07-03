import { IconArrow } from "./icons";

type Comp = {
  init: string;
  name: string;
  tag: string;
  learn: string;
  take: string;
  accent: string;
  initBg: string;
};

const COMPETITORS: Comp[] = [
  {
    init: "Z",
    name: "ZUS Coffee",
    tag: "App-first loyalty",
    learn:
      "Rewards and points are the hero of the home screen, with frictionless app ordering and constant reward visibility.",
    take: "Make Aida Points impossible to miss on the home screen.",
    accent: "#3b5bdb",
    initBg: "linear-gradient(135deg,#4c6ef5,#3b5bdb)",
  },
  {
    init: "C",
    name: "Coffee Bean · MyCBTL",
    tag: "Order-ahead & member perks",
    learn:
      "Strong order-ahead flow with clear member benefits and tiered rewards that make membership feel valuable.",
    take: "Give scheduled order-ahead a premium, effortless flow.",
    accent: "#8a6a24",
    initBg: "linear-gradient(135deg,#c99a45,#8a6a24)",
  },
  {
    init: "S",
    name: "Starbucks",
    tag: "Polished rewards & mobile order",
    learn:
      "Best-in-class polish: refined star rewards, mobile order & pay, and a highly consistent visual system.",
    take: "Hold every screen to a flagship level of polish.",
    accent: "#0b6b3a",
    initBg: "linear-gradient(135deg,#2f9e69,#0b6b3a)",
  },
  {
    init: "T",
    name: "Tealive",
    tag: "Promos & birthday rewards",
    learn:
      "Playful, frequent promotions — monthly deals, birthday rewards, and campaigns that drive repeat visits.",
    take: "Build a lively promo & birthday reward engine.",
    accent: "#b0308a",
    initBg: "linear-gradient(135deg,#e05fbf,#b0308a)",
  },
  {
    init: "G",
    name: "Gigi Coffee",
    tag: "Wallet · scan · pay · pickup",
    learn:
      "Smooth stored-value wallet with scan-to-pay and quick pickup — payments feel instant and modern.",
    take: "Wallet + QR scan-to-pay as a first-class flow.",
    accent: "#c0392b",
    initBg: "linear-gradient(135deg,#e05a49,#c0392b)",
  },
  {
    init: "B",
    name: "Bask Bear Coffee",
    tag: "Strong brand personality",
    learn:
      "A distinctive, memorable brand character that carries warmth and identity across the whole experience.",
    take: "Let Aida's warm café personality lead the UI.",
    accent: "#5f3e29",
    initBg: "linear-gradient(135deg,#8a5a3a,#5f3e29)",
  },
  {
    init: "K",
    name: "Kenangan Coffee",
    tag: "Pickup · vouchers · campaigns",
    learn:
      "Efficient pickup, generous voucher stacking, and loyalty campaigns that keep customers returning.",
    take: "Voucher & campaign tooling built into admin.",
    accent: "#d97706",
    initBg: "linear-gradient(135deg,#f59e0b,#d97706)",
  },
  {
    init: "GF",
    name: "GrabFood / Foodpanda",
    tag: "Secondary ordering UX",
    learn:
      "Reference only for ordering patterns: clear menus, modifiers, cart clarity, and order tracking.",
    take: "Borrow menu & cart clarity — keep loyalty ours.",
    accent: "#e11d48",
    initBg: "linear-gradient(135deg,#fb7185,#e11d48)",
  },
];

export function Competitors() {
  return (
    <section className="adp-section adp-section--tint" id="benchmark">
      <div className="adp-container">
        <div className="adp-head">
          <span className="adp-eyebrow">
            <span className="adp-dot" />
            02 · Competitor Benchmarking
          </span>
          <h2 className="adp-h2">Benchmarked against the best café apps</h2>
          <p className="adp-sub">
            We study what leading Malaysian and regional café loyalty apps do well — then design
            something original for Aida. No logos, no copying: only the lessons worth keeping.
          </p>
        </div>

        <div className="adp-comp-grid">
          {COMPETITORS.map((c) => (
            <article className="adp-comp" key={c.name}>
              <span className="adp-comp__accent" style={{ background: c.accent }} />
              <div className="adp-comp__init" style={{ background: c.initBg }}>
                {c.init}
              </div>
              <div className="adp-comp__name">{c.name}</div>
              <div className="adp-comp__tag">{c.tag}</div>
              <p className="adp-comp__learn">{c.learn}</p>
              <div className="adp-comp__take">
                <IconArrow size={16} />
                <span>{c.take}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
