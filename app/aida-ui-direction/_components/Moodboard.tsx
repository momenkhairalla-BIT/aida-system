import { QrPattern } from "./Qr";
import { asset } from "./asset";
import {
  IconCoffee,
  IconGift,
  IconHeart,
  IconQr,
  IconStar,
  IconTag,
  IconGraduation,
  IconSparkle,
} from "./Icons";

const PALETTE = [
  { name: "Cream", hex: "#F5EFE8" },
  { name: "Latte Beige", hex: "#ECDDCF" },
  { name: "Coffee Brown", hex: "#5F3E29" },
  { name: "Deep Espresso", hex: "#1C1108" },
  { name: "Caramel", hex: "#CDAD8E" },
  { name: "Floral Pink", hex: "#D98A8A" },
  { name: "Reward Gold", hex: "#C99A45" },
  { name: "Card White", hex: "#FFFFFF" },
];

export function Moodboard() {
  return (
    <section className="section" id="moodboard">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            <span className="dot" />
            01 · Brand Moodboard
          </span>
          <h2 className="section-title">A warm, premium café design language</h2>
          <p className="section-sub">
            Every colour, curve, and shadow is drawn from the Aida Café identity — cream
            warmth, espresso depth, soft floral pink, and reward gold — rebuilt as a clean,
            modern product system.
          </p>
        </div>

        {/* Palette */}
        <div className="tile" style={{ marginBottom: 20 }}>
          <div className="tile__label">Colour Palette</div>
          <div className="palette">
            {PALETTE.map((c) => (
              <div className="swatch" key={c.hex}>
                <div
                  className="swatch__color"
                  style={{
                    background: c.hex,
                    borderBottom: c.hex === "#FFFFFF" ? "1px solid var(--border)" : "none",
                  }}
                />
                <div className="swatch__meta">
                  <div className="swatch__name">{c.name}</div>
                  <div className="swatch__hex">{c.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mood-grid">
          {/* Typography */}
          <div className="tile col-5">
            <div className="tile__label">Typography</div>
            <div className="type-row">
              <div className="type-sample">
                <div className="meta">Brand Script · Dancing Script</div>
                <div className="ts-script">Aida Café @ City U</div>
              </div>
              <div className="type-sample">
                <div className="meta">Display · Playfair Display</div>
                <div className="ts-display">Rewards that feel warm</div>
              </div>
              <div className="type-sample">
                <div className="meta">Body · Plus Jakarta Sans</div>
                <div className="ts-body">
                  Clear, friendly copy for menus, orders, and member benefits — highly legible
                  from phone to POS to dashboard.
                </div>
              </div>
              <div className="type-sample">
                <div className="meta">Label · Uppercase</div>
                <div className="ts-label">Aida Points · Student Offer</div>
              </div>
            </div>
          </div>

          {/* Buttons + chips */}
          <div className="tile col-7">
            <div className="tile__label">Buttons &amp; Interaction</div>
            <div className="btn-showcase">
              <button className="btn btn--primary">
                <IconCoffee size={17} /> Order Now
              </button>
              <button className="btn btn--gold">
                <IconStar size={17} /> Redeem Points
              </button>
              <button className="btn btn--pink">
                <IconHeart size={17} /> Student Offer
              </button>
              <button className="btn btn--outline">View Menu</button>
              <button className="btn btn--ghost">Skip</button>
            </div>
            <div className="btn-showcase" style={{ marginTop: 16 }}>
              <button className="btn btn--primary btn--sm">Checkout</button>
              <button className="btn btn--gold btn--sm">
                <IconGift size={14} /> Reward
              </button>
              <button className="btn btn--outline btn--sm">Add</button>
            </div>
            <div className="tile__label" style={{ margin: "24px 0 12px" }}>
              Chips &amp; Tags
            </div>
            <div className="btn-showcase">
              <span className="chip chip--gold">
                <IconStar size={13} /> +25 Points
              </span>
              <span className="chip chip--pink">
                <IconGraduation size={13} /> Student Only
              </span>
              <span className="chip chip--mint">
                <IconTag size={13} /> Promo
              </span>
              <span className="chip">
                <IconSparkle size={13} /> New
              </span>
            </div>
          </div>

          {/* Reward badges */}
          <div className="tile col-5">
            <div className="tile__label">Reward &amp; Stamp Identity</div>
            <div className="reward-badges">
              <div className="badge-coin">
                <div>
                  <div className="num">1,240</div>
                  <div className="lbl">Points</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <span className="badge-tier tier-gold">
                  <IconStar size={15} /> Gold Member
                </span>
                <span className="badge-tier tier-espresso">
                  <IconCoffee size={15} /> Espresso Tier
                </span>
              </div>
            </div>
            <div style={{ marginTop: 20 }}>
              <div className="appcard__head">
                <span className="appcard__title">Digital Stamp Card</span>
                <span className="appcard__meta">7 / 10</span>
              </div>
              <div className="stamps">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className={`stamp${i < 7 ? " stamp--filled" : ""}`}
                    aria-hidden
                  >
                    {i < 7 ? <IconCoffee size={16} /> : i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* QR membership card */}
          <div className="tile col-7">
            <div className="tile__label">QR Membership Card</div>
            <div className="qrcard">
              <div className="qrcard__top">
                <span className="qrcard__brand">Aida Café</span>
                <span className="qrcard__tier">Gold Member</span>
              </div>
              <div className="qrcard__body">
                <div className="qrbox">
                  <QrPattern seed={42} />
                </div>
                <div>
                  <div className="qrcard__name">Aida Rahman</div>
                  <div className="qrcard__id">MEMBER · AIDA-2049-7731</div>
                  <div className="qrcard__pts">
                    <span className="v">1,240</span>
                    <span className="u">Aida Points</span>
                  </div>
                  <div style={{ marginTop: 10 }}>
                    <span className="chip chip--gold">
                      <IconGraduation size={13} /> Verified Student
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand reference */}
        <div className="tile col-12" style={{ marginTop: 20 }}>
          <div className="tile__label">Brand Reference — Aida Café Banner</div>
          <div className="brandref">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="brandref__img"
              src={asset("/brand/aida-banner.png")}
              alt="Aida Café @ City U brand banner — cream background, floral pink accents, gold rings, latte art, and coffee-brown wave"
            />
            <div className="brandref__bar">
              <span className="brandref__label">Aida Café Brand Reference</span>
              <div className="brandref__swatches">
                {PALETTE.map((c) => (
                  <span key={c.hex} style={{ background: c.hex }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
