import { QrPattern } from "./Qr";
import {
  IconHome,
  IconGift,
  IconQr,
  IconMenu,
  IconUser,
  IconCoffee,
  IconGraduation,
  IconCheck,
  IconScan,
  IconBag,
  IconChart,
  IconUsers,
  IconTrophy,
  IconTag,
  IconGear,
} from "./icons";

/* ------------------------------------------------------------------ */
/* A. Customer Mobile App                                             */
/* ------------------------------------------------------------------ */
const MOBILE_FEATURES = [
  "Warm greeting + points balance front and centre",
  "Digital stamp progress toward the next free drink",
  "One-tap My QR for scan, pay, and earn",
  "Student-only offers surfaced automatically",
];

function MobilePreview() {
  return (
    <div className="adp-preview">
      <div className="adp-pv-copy">
        <span className="adp-pv-tag">
          <IconCoffee size={16} /> A · Customer Mobile App
        </span>
        <h3>Beautiful, simple, reward-focused</h3>
        <p>
          The customer app makes membership feel rewarding at a glance — points, stamps, and the
          QR pass are never more than one tap away, wrapped in Aida&apos;s warm café mood.
        </p>
        <ul className="adp-feat">
          {MOBILE_FEATURES.map((f) => (
            <li key={f}>
              <span className="adp-tick">
                <IconCheck size={13} />
              </span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="adp-stage">
        <div className="adp-phone">
          <div className="adp-phone__notch" />
          <div className="adp-phone__screen">
            <div className="adp-app">
              <div className="adp-app__head">
                <div>
                  <div className="adp-app__hi">Good morning</div>
                  <div className="adp-app__name">Aida Member</div>
                </div>
                <div className="adp-avatar">A</div>
              </div>

              <div className="adp-pts">
                <div className="adp-pts__row">
                  <div>
                    <div className="adp-pts__cap">AIDA POINTS BALANCE</div>
                    <div className="adp-pts__big">1,240</div>
                    <div className="adp-pts__cap">≈ 3 free drinks available</div>
                  </div>
                  <div className="adp-miniqr">
                    <QrPattern seed={12} />
                  </div>
                </div>
              </div>

              <div className="adp-card">
                <div className="adp-appcard__head">
                  <span className="adp-appcard__title">Stamp Rewards</span>
                  <span className="adp-appcard__meta">7 / 10 STAMPS</span>
                </div>
                <div className="adp-stamps-mini">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className={`adp-stamp-mini${i < 7 ? " adp-stamp-mini--on" : ""}`}
                      aria-hidden
                    >
                      {i < 7 ? <IconCoffee size={12} /> : i + 1}
                    </div>
                  ))}
                </div>
              </div>

              <div className="adp-offer">
                <div className="adp-offer__ic">
                  <IconGraduation size={20} />
                </div>
                <div>
                  <div className="adp-offer__t">Student Offer · 20% Off</div>
                  <div className="adp-offer__s">Show student QR at City U campus</div>
                </div>
              </div>

              <div className="adp-card">
                <div className="adp-appcard__head">
                  <span className="adp-appcard__title">Featured Today</span>
                  <span className="adp-appcard__meta">BARISTA PICK</span>
                </div>
                <div className="adp-drink">
                  <div className="adp-drink__img">☕</div>
                  <div style={{ flex: 1 }}>
                    <div className="adp-drink__n">Salted Caramel Latte</div>
                    <div className="adp-drink__d">Silky espresso · caramel · sea salt</div>
                    <div className="adp-drink__p">RM 12.90</div>
                  </div>
                  <button className="adp-btn adp-btn-gold adp-btn-sm">
                    <IconGift size={13} /> +25
                  </button>
                </div>
              </div>
            </div>

            <div className="adp-tabbar">
              <div className="adp-tab adp-tab--on">
                <IconHome size={20} />
                <span>Home</span>
              </div>
              <div className="adp-tab">
                <IconGift size={20} />
                <span>Rewards</span>
              </div>
              <div className="adp-tab adp-tab--qr">
                <span className="adp-tab__ic">
                  <IconQr size={22} />
                </span>
                <span>QR</span>
              </div>
              <div className="adp-tab">
                <IconMenu size={20} />
                <span>Menu</span>
              </div>
              <div className="adp-tab">
                <IconUser size={20} />
                <span>Profile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* B. Staff POS Tablet                                                */
/* ------------------------------------------------------------------ */
const CATS = ["Coffee", "Tea", "Cold Brew", "Pastry", "Snacks"];
const PRODUCTS = [
  { emoji: "☕", name: "Cappuccino", price: "10.90" },
  { emoji: "🥛", name: "Latte", price: "11.90" },
  { emoji: "🧋", name: "Caramel Macchiato", price: "13.50" },
  { emoji: "❄️", name: "Iced Americano", price: "9.90" },
  { emoji: "🍵", name: "Matcha Latte", price: "12.90" },
  { emoji: "🥐", name: "Butter Croissant", price: "7.50" },
];
const LINES = [
  { q: 2, name: "Cappuccino", price: "21.80" },
  { q: 1, name: "Caramel Macchiato", price: "13.50" },
  { q: 1, name: "Butter Croissant", price: "7.50" },
];
const POS_FEATURES = [
  "Scan member QR to attach points instantly",
  "Big touch targets — fast, mistake-resistant taps",
  "One tap to apply verified student discount",
  "Clear cart totals before every checkout",
];

function PosPreview() {
  return (
    <div className="adp-preview adp-preview--rev">
      <div className="adp-stage">
        <div className="adp-tablet">
          <div className="adp-tablet__screen">
            <div className="adp-pos">
              <div className="adp-pos__staff">
                <div>
                  <div className="adp-pos__staffname">Aida Café · Counter 1</div>
                  <div className="adp-pos__shift">Staff: Imran · Morning shift</div>
                </div>
                <span className="adp-chip adp-chip-mint">Online</span>
              </div>

              <div className="adp-scan">
                <div className="adp-scan__ic">
                  <IconScan size={18} />
                </div>
                <div>
                  <div className="adp-scan__t">Scan Member QR</div>
                  <div className="adp-scan__s">Tap to earn &amp; redeem Aida Points</div>
                </div>
              </div>

              <div className="adp-cats">
                {CATS.map((c, i) => (
                  <span key={c} className={`adp-cat${i === 0 ? " adp-cat--on" : ""}`}>
                    {c}
                  </span>
                ))}
              </div>

              <div className="adp-pos-grid">
                {PRODUCTS.map((p) => (
                  <div className="adp-pi" key={p.name}>
                    <div className="adp-pi__img">{p.emoji}</div>
                    <div className="adp-pi__n">{p.name}</div>
                    <div className="adp-pi__p">RM {p.price}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="adp-cart">
              <div className="adp-member">
                <div className="adp-member__av">A</div>
                <div>
                  <div className="adp-member__n">Aida Rahman</div>
                  <div className="adp-member__m">Gold · Student Verified</div>
                </div>
                <div className="adp-member__pts">
                  <div className="adp-v">1,240</div>
                  <div className="adp-u">POINTS</div>
                </div>
              </div>

              <div className="adp-lines">
                {LINES.map((l) => (
                  <div className="adp-line" key={l.name}>
                    <span className="adp-line__q">{l.q}</span>
                    <span className="adp-line__n">{l.name}</span>
                    <span className="adp-line__p">RM {l.price}</span>
                  </div>
                ))}
              </div>

              <div className="adp-totals">
                <div className="adp-trow">
                  <span>Subtotal</span>
                  <span>RM 42.80</span>
                </div>
                <div className="adp-trow adp-trow--disc">
                  <span>Student Offer −20%</span>
                  <span>− RM 8.56</span>
                </div>
                <div className="adp-trow">
                  <span>Points earned</span>
                  <span>+34 pts</span>
                </div>
                <div className="adp-trow adp-trow--grand">
                  <span>Total</span>
                  <span>RM 34.24</span>
                </div>
              </div>

              <div className="adp-cart__actions">
                <button className="adp-btn adp-btn-pink adp-btn-block adp-btn-sm">
                  <IconGraduation size={15} /> Apply Student Offer
                </button>
                <button className="adp-btn adp-btn-primary adp-btn-block">
                  <IconCheck size={16} /> Checkout · RM 34.24
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="adp-pv-copy">
        <span className="adp-pv-tag">
          <IconBag size={16} /> B · Staff POS Tablet
        </span>
        <h3>Fast, touch-friendly, mistake-resistant</h3>
        <p>
          The POS keeps baristas moving. Scan a member, tap products from a clear grid, apply
          offers in one touch, and confirm a checkout that always shows the final total.
        </p>
        <ul className="adp-feat">
          {POS_FEATURES.map((f) => (
            <li key={f}>
              <span className="adp-tick">
                <IconCheck size={13} />
              </span>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* C. Admin Dashboard                                                */
/* ------------------------------------------------------------------ */
const NAV = [
  { icon: <IconHome size={17} />, label: "Overview", on: true },
  { icon: <IconChart size={17} />, label: "Reports" },
  { icon: <IconBag size={17} />, label: "Transactions" },
  { icon: <IconMenu size={17} />, label: "Menu" },
  { icon: <IconTag size={17} />, label: "Promotions" },
  { icon: <IconUsers size={17} />, label: "Members" },
  { icon: <IconGear size={17} />, label: "Settings" },
];
const KPIS = [
  { icon: <IconBag size={16} />, v: "RM 4,820", l: "Today Sales", d: "+12.4%", up: true, bg: "var(--adp-gold-tint)", fg: "#8a6a24" },
  { icon: <IconChart size={16} />, v: "312", l: "Transactions", d: "+8.1%", up: true, bg: "var(--adp-coffee-soft)", fg: "#5f3e29" },
  { icon: <IconUsers size={16} />, v: "1,948", l: "Active Members", d: "+3.6%", up: true, bg: "var(--adp-mint-soft)", fg: "#4a7a59" },
  { icon: <IconGraduation size={16} />, v: "742", l: "Student Members", d: "+5.2%", up: true, bg: "var(--adp-pink-tint)", fg: "#b45a5a" },
  { icon: <IconTrophy size={16} />, v: "86", l: "Rewards Redeemed", d: "−1.3%", up: false, bg: "var(--adp-gold-tint)", fg: "#8a6a24" },
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
  { e: "🎓", n: "Student 20% Off", s: "Mon–Fri · City U", bg: "var(--adp-pink-tint)" },
  { e: "🎂", n: "Birthday Free Drink", s: "Auto reward", bg: "var(--adp-gold-tint)" },
  { e: "⭐", n: "Double Points Weekend", s: "Sat–Sun", bg: "var(--adp-coffee-soft)" },
];
const ADMIN_FEATURES = [
  "At-a-glance KPIs for sales, members, and rewards",
  "Sales trends and top products in one view",
  "Live transaction feed with reward tracking",
  "Manage menu, offers, and promotions centrally",
];

function AdminPreview() {
  return (
    <div className="adp-preview">
      <div className="adp-pv-copy">
        <span className="adp-pv-tag">
          <IconChart size={16} /> C · Admin Dashboard
        </span>
        <h3>Professional, clear, owner-ready</h3>
        <p>
          The dashboard gives the café owner a confident command centre — clean KPIs, sales
          trends, top products, live transactions, and active promotions, all in the Aida visual
          system.
        </p>
        <ul className="adp-feat">
          {ADMIN_FEATURES.map((f) => (
            <li key={f}>
              <span className="adp-tick">
                <IconCheck size={13} />
              </span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="adp-stage">
        <div className="adp-desktop">
          <div className="adp-desktop__bar">
            <span />
            <span />
            <span />
          </div>
          <div className="adp-dash">
            <aside className="adp-side">
              <div className="adp-side__brand">
                <div className="adp-side__logo">A</div>
                <div>
                  <div className="adp-side__n">Aida</div>
                  <div className="adp-side__s">Admin</div>
                </div>
              </div>
              {NAV.map((n) => (
                <div key={n.label} className={`adp-navi${n.on ? " adp-navi--on" : ""}`}>
                  <span className="adp-navi__ic">{n.icon}</span>
                  {n.label}
                </div>
              ))}
            </aside>

            <main className="adp-main">
              <div className="adp-main__head">
                <div>
                  <h4>Overview</h4>
                  <p>Aida Café @ City U · Today, 2 Jul</p>
                </div>
                <button className="adp-btn adp-btn-outline adp-btn-sm">
                  <IconChart size={14} /> Export Report
                </button>
              </div>

              <div className="adp-kpis">
                {KPIS.map((k) => (
                  <div className="adp-kpi" key={k.l}>
                    <div className="adp-kpi__ic" style={{ background: k.bg, color: k.fg }}>
                      {k.icon}
                    </div>
                    <div className="adp-kpi__v">{k.v}</div>
                    <div className="adp-kpi__l">{k.l}</div>
                    <div className={`adp-kpi__d ${k.up ? "adp-up" : "adp-down"}`}>
                      {k.d} vs last week
                    </div>
                  </div>
                ))}
              </div>

              <div className="adp-cols">
                <div className="adp-panel adp-chartwrap">
                  <div className="adp-panel__head">
                    <span className="adp-panel__title">Sales · Last 7 Days</span>
                    <span className="adp-panel__link">RM 28,940 total</span>
                  </div>
                  <div className="adp-chart">
                    {CHART.map((b, i) => (
                      <div
                        key={b.d}
                        className={`adp-bar${i === 5 ? "" : i % 2 === 0 ? " adp-bar--muted" : ""}`}
                        style={{ height: `${b.h}%` }}
                      >
                        <span className="adp-bar__l">{b.d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="adp-panel">
                  <div className="adp-panel__head">
                    <span className="adp-panel__title">Top Products</span>
                    <span className="adp-panel__link">This week</span>
                  </div>
                  <div className="adp-list">
                    {TOP.map((t) => (
                      <div className="adp-li" key={t.n}>
                        <div className="adp-li__ic">{t.e}</div>
                        <div>
                          <div className="adp-li__n">{t.n}</div>
                          <div className="adp-li__s">{t.s}</div>
                        </div>
                        <div className="adp-li__v">{t.v}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="adp-panel">
                  <div className="adp-panel__head">
                    <span className="adp-panel__title">Recent Transactions</span>
                    <span className="adp-panel__link">View all</span>
                  </div>
                  <div>
                    {TX.map((t) => (
                      <div className="adp-tx" key={t.id}>
                        <span className="adp-tx__id">{t.id}</span>
                        <span className="adp-tx__n">{t.n}</span>
                        <span className="adp-tx__amt">{t.amt}</span>
                        <span className={`adp-status adp-status--${t.st}`}>
                          {t.st === "reward" ? "Reward" : "Paid"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="adp-panel">
                  <div className="adp-panel__head">
                    <span className="adp-panel__title">Active Promotions</span>
                    <span className="adp-panel__link">
                      <IconGift size={12} /> 3 live
                    </span>
                  </div>
                  <div className="adp-list">
                    {PROMOS.map((p) => (
                      <div className="adp-promo" key={p.n}>
                        <div className="adp-promo__b" style={{ background: p.bg }}>
                          {p.e}
                        </div>
                        <div>
                          <div className="adp-li__n">{p.n}</div>
                          <div className="adp-li__s">{p.s}</div>
                        </div>
                        <span
                          className="adp-status adp-status--paid"
                          style={{ marginLeft: "auto" }}
                        >
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

export function Interfaces() {
  return (
    <section className="adp-section" id="interfaces">
      <div className="adp-container">
        <div className="adp-head">
          <span className="adp-eyebrow">
            <span className="adp-dot" />
            04 · Three Main Interfaces
          </span>
          <h2 className="adp-h2">One system, three tailored experiences</h2>
          <p className="adp-sub">
            Customer, staff, and owner each get an interface built for how they work — unified by
            a single warm, premium Aida visual language.
          </p>
        </div>

        <MobilePreview />
        <PosPreview />
        <AdminPreview />
      </div>
    </section>
  );
}
