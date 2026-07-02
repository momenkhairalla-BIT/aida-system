import {
  IconHome,
  IconChart,
  IconBag,
  IconUsers,
  IconTag,
  IconMenu,
  IconSettings,
  IconGraduation,
  IconTrophy,
  IconCheck,
  IconGift,
} from "./Icons";

const NAV = [
  { icon: <IconHome size={17} />, label: "Overview", on: true },
  { icon: <IconChart size={17} />, label: "Reports" },
  { icon: <IconBag size={17} />, label: "Transactions" },
  { icon: <IconMenu size={17} />, label: "Menu" },
  { icon: <IconTag size={17} />, label: "Promotions" },
  { icon: <IconUsers size={17} />, label: "Members" },
  { icon: <IconSettings size={17} />, label: "Settings" },
];

const KPIS = [
  {
    icon: <IconBag size={16} />,
    v: "RM 4,820",
    l: "Today Sales",
    d: "+12.4%",
    up: true,
    bg: "var(--gold-tint)",
    fg: "#8a6a24",
  },
  {
    icon: <IconChart size={16} />,
    v: "312",
    l: "Transactions",
    d: "+8.1%",
    up: true,
    bg: "var(--coffee-soft)",
    fg: "#5f3e29",
  },
  {
    icon: <IconUsers size={16} />,
    v: "1,948",
    l: "Active Members",
    d: "+3.6%",
    up: true,
    bg: "var(--mint-soft)",
    fg: "#4a7a59",
  },
  {
    icon: <IconGraduation size={16} />,
    v: "742",
    l: "Student Members",
    d: "+5.2%",
    up: true,
    bg: "var(--pink-tint)",
    fg: "#b45a5a",
  },
  {
    icon: <IconTrophy size={16} />,
    v: "86",
    l: "Rewards Redeemed",
    d: "−1.3%",
    up: false,
    bg: "var(--gold-tint)",
    fg: "#8a6a24",
  },
];

const CHART = [
  { d: "Mon", h: 46 },
  { d: "Tue", h: 62 },
  { d: "Wed", h: 54 },
  { d: "Thu", h: 78 },
  { d: "Fri", h: 92 },
  { d: "Sat", h: 100 },
  { d: "Sun", h: 70 },
];

const TOP = [
  { e: "☕", n: "Cappuccino", s: "218 sold", v: "RM 2,376" },
  { e: "🧋", n: "Caramel Macchiato", s: "164 sold", v: "RM 2,214" },
  { e: "🍵", n: "Matcha Latte", s: "131 sold", v: "RM 1,689" },
  { e: "🥐", n: "Butter Croissant", s: "98 sold", v: "RM 735" },
];

const TX = [
  { id: "#A-2049", n: "Aida Rahman", amt: "RM 34.24", st: "paid" },
  { id: "#A-2048", n: "Imran Yusof", amt: "RM 18.90", st: "paid" },
  { id: "#A-2047", n: "Wei Ling", amt: "Free Drink", st: "reward" },
  { id: "#A-2046", n: "Nurul Aina", amt: "RM 27.40", st: "paid" },
];

const PROMOS = [
  { e: "🎓", n: "Student 20% Off", s: "Mon–Fri · City U", bg: "var(--pink-tint)" },
  { e: "🎂", n: "Birthday Free Drink", s: "Auto reward", bg: "var(--gold-tint)" },
  { e: "⭐", n: "Double Points Weekend", s: "Sat–Sun", bg: "var(--coffee-soft)" },
];

const FEATURES = [
  "At-a-glance KPIs for sales, members, and rewards",
  "Sales trends and top products in one view",
  "Live transaction feed with reward tracking",
  "Manage menu, offers, and promotions centrally",
];

export function AdminPreview() {
  return (
    <div className="preview-block" id="admin">
      <div className="preview-copy">
        <span className="tag">
          <IconChart size={16} /> C · Admin Dashboard
        </span>
        <h3>Professional, clear, owner-ready</h3>
        <p>
          The dashboard gives the café owner a confident command centre — clean KPIs, sales
          trends, top products, live transactions, and active promotions, all in the Aida
          visual system.
        </p>
        <ul className="feature-list">
          {FEATURES.map((f) => (
            <li key={f}>
              <span className="tick">
                <IconCheck size={13} />
              </span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="stage">
        <div className="desktop">
          <div className="desktop__bar">
            <span />
            <span />
            <span />
          </div>
          <div className="dash">
            {/* sidebar */}
            <aside className="dash-side">
              <div className="dash-brand">
                <div className="dash-brand__logo">A</div>
                <div>
                  <div className="dash-brand__n">Aida</div>
                  <div className="dash-brand__s">Admin</div>
                </div>
              </div>
              {NAV.map((n) => (
                <div key={n.label} className={`dash-nav${n.on ? " dash-nav--on" : ""}`}>
                  <span className="dash-nav__ic">{n.icon}</span>
                  {n.label}
                </div>
              ))}
            </aside>

            {/* main */}
            <main className="dash-main">
              <div className="dash-head">
                <div>
                  <h4>Overview</h4>
                  <p>Aida Café @ City U · Today, 2 Jul</p>
                </div>
                <button className="btn btn--outline btn--sm">
                  <IconChart size={14} /> Export Report
                </button>
              </div>

              {/* KPIs */}
              <div className="kpi-row">
                {KPIS.map((k) => (
                  <div className="kpi" key={k.l}>
                    <div className="kpi__ic" style={{ background: k.bg, color: k.fg }}>
                      {k.icon}
                    </div>
                    <div className="kpi__v">{k.v}</div>
                    <div className="kpi__l">{k.l}</div>
                    <div className={`kpi__d ${k.up ? "up" : "down"}`}>
                      {k.d} vs last week
                    </div>
                  </div>
                ))}
              </div>

              {/* columns */}
              <div className="dash-cols">
                <div className="panel chart-wrap">
                  <div className="panel__head">
                    <span className="panel__title">Sales · Last 7 Days</span>
                    <span className="panel__link">RM 28,940 total</span>
                  </div>
                  <div className="chart">
                    {CHART.map((b, i) => (
                      <div
                        key={b.d}
                        className={`bar${i === 5 ? "" : i % 2 === 0 ? " bar--muted" : ""}`}
                        style={{ height: `${b.h}%` }}
                      >
                        <span className="bar__lbl">{b.d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="panel">
                  <div className="panel__head">
                    <span className="panel__title">Top Products</span>
                    <span className="panel__link">This week</span>
                  </div>
                  <div className="mini-list">
                    {TOP.map((t) => (
                      <div className="mini-item" key={t.n}>
                        <div className="mini-item__ic">{t.e}</div>
                        <div>
                          <div className="mini-item__n">{t.n}</div>
                          <div className="mini-item__s">{t.s}</div>
                        </div>
                        <div className="mini-item__v">{t.v}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="panel">
                  <div className="panel__head">
                    <span className="panel__title">Recent Transactions</span>
                    <span className="panel__link">View all</span>
                  </div>
                  <div>
                    {TX.map((t) => (
                      <div className="tx-row" key={t.id}>
                        <span className="tx-row__id">{t.id}</span>
                        <span className="tx-row__n">{t.n}</span>
                        <span className="tx-row__amt">{t.amt}</span>
                        <span className={`status status--${t.st}`}>
                          {t.st === "reward" ? "Reward" : "Paid"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="panel">
                  <div className="panel__head">
                    <span className="panel__title">Active Promotions</span>
                    <span className="panel__link">
                      <IconGift size={12} /> 3 live
                    </span>
                  </div>
                  <div className="mini-list">
                    {PROMOS.map((p) => (
                      <div className="promo" key={p.n}>
                        <div className="promo__badge" style={{ background: p.bg }}>
                          {p.e}
                        </div>
                        <div>
                          <div className="mini-item__n">{p.n}</div>
                          <div className="mini-item__s">{p.s}</div>
                        </div>
                        <span className="status status--paid" style={{ marginLeft: "auto" }}>
                          Live
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
