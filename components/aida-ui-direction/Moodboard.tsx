import { QrPattern } from "./Qr";
import { asset } from "./asset";
import {
  IconCoffee,
  IconGift,
  IconHeart,
  IconStar,
  IconTag,
  IconGraduation,
  IconSparkle,
} from "./icons";

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
    <section className="adp-section" id="moodboard">
      <div className="adp-container">
        <div className="adp-head">
          <span className="adp-eyebrow">
            <span className="adp-dot" />
            01 · Brand Moodboard
          </span>
          <h2 className="adp-h2">A warm, premium café design language</h2>
          <p className="adp-sub">
            Every colour, curve, and shadow is drawn from the Aida Café identity — cream warmth,
            espresso depth, soft floral pink, and reward gold — rebuilt as a clean, modern
            product system.
          </p>
        </div>

        {/* Palette */}
        <div className="adp-tile" style={{ marginBottom: 20 }}>
          <div className="adp-tile__label">Colour Palette</div>
          <div className="adp-palette">
            {PALETTE.map((c) => (
              <div className="adp-swatch" key={c.hex}>
                <div
                  className="adp-swatch__c"
                  style={{
                    background: c.hex,
                    borderBottom:
                      c.hex === "#FFFFFF" ? "1px solid var(--adp-border)" : "none",
                  }}
                />
                <div className="adp-swatch__m">
                  <div className="adp-swatch__n">{c.name}</div>
                  <div className="adp-swatch__h">{c.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="adp-mood">
          {/* Typography */}
          <div className="adp-tile adp-c5">
            <div className="adp-tile__label">Typography</div>
            <div className="adp-type">
              <div className="adp-type__row">
                <div className="adp-type__meta">Brand Script · Dancing Script</div>
                <div className="adp-ts-script">Aida Café @ City U</div>
              </div>
              <div className="adp-type__row">
                <div className="adp-type__meta">Display · Playfair Display</div>
                <div className="adp-ts-display">Rewards that feel warm</div>
              </div>
              <div className="adp-type__row">
                <div className="adp-type__meta">Body · Plus Jakarta Sans</div>
                <div className="adp-ts-body">
                  Clear, friendly copy for menus, orders, and member benefits — legible from
                  phone to POS to dashboard.
                </div>
              </div>
              <div className="adp-type__row">
                <div className="adp-type__meta">Label · Uppercase</div>
                <div className="adp-ts-label">Aida Points · Student Offer</div>
              </div>
            </div>
          </div>

          {/* Buttons + chips */}
          <div className="adp-tile adp-c7">
            <div className="adp-tile__label">Buttons &amp; Interaction</div>
            <div className="adp-showcase">
              <button className="adp-btn adp-btn-primary">
                <IconCoffee size={17} /> Order Now
              </button>
              <button className="adp-btn adp-btn-gold">
                <IconStar size={17} /> Redeem Points
              </button>
              <button className="adp-btn adp-btn-pink">
                <IconHeart size={17} /> Student Offer
              </button>
              <button className="adp-btn adp-btn-outline">View Menu</button>
            </div>
            <div className="adp-tile__label" style={{ margin: "24px 0 12px" }}>
              Chips &amp; Tags
            </div>
            <div className="adp-showcase">
              <span className="adp-chip adp-chip-gold">
                <IconStar size={13} /> +25 Points
              </span>
              <span className="adp-chip adp-chip-pink">
                <IconGraduation size={13} /> Student Only
              </span>
              <span className="adp-chip adp-chip-mint">
                <IconTag size={13} /> Promo
              </span>
              <span className="adp-chip">
                <IconSparkle size={13} /> New
              </span>
            </div>
            <div className="adp-tile__label" style={{ margin: "24px 0 12px" }}>
              Card Style
            </div>
            <div
              className="adp-card"
              style={{ display: "flex", alignItems: "center", gap: 12 }}
            >
              <div className="adp-drink__img">☕</div>
              <div style={{ flex: 1 }}>
                <div className="adp-drink__n">Clean rounded cards</div>
                <div className="adp-drink__d">Soft shadows · generous spacing · warm borders</div>
              </div>
              <button className="adp-btn adp-btn-gold adp-btn-sm">
                <IconGift size={13} /> +25
              </button>
            </div>
          </div>

          {/* Reward badges */}
          <div className="adp-tile adp-c5">
            <div className="adp-tile__label">Reward &amp; Stamp Identity</div>
            <div className="adp-badges">
              <div className="adp-coin">
                <div>
                  <div className="adp-coin__n">1,240</div>
                  <div className="adp-coin__l">Points</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <span className="adp-tier adp-tier-gold">
                  <IconStar size={15} /> Gold Member
                </span>
                <span className="adp-tier adp-tier-esp">
                  <IconCoffee size={15} /> Espresso Tier
                </span>
              </div>
            </div>
            <div style={{ marginTop: 20 }}>
              <div className="adp-appcard__head">
                <span className="adp-appcard__title">Digital Stamp Card</span>
                <span className="adp-appcard__meta">7 / 10</span>
              </div>
              <div className="adp-stamps">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className={`adp-stamp${i < 7 ? " adp-stamp--on" : ""}`} aria-hidden>
                    {i < 7 ? <IconCoffee size={16} /> : i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* QR membership card */}
          <div className="adp-tile adp-c7">
            <div className="adp-tile__label">QR Membership Card</div>
            <div className="adp-qrcard">
              <div className="adp-qrcard__top">
                <span className="adp-qrcard__brand">Aida Café</span>
                <span className="adp-qrcard__tier">Gold Member</span>
              </div>
              <div className="adp-qrcard__body">
                <div className="adp-qrbox">
                  <QrPattern seed={42} />
                </div>
                <div>
                  <div className="adp-qrcard__name">Aida Rahman</div>
                  <div className="adp-qrcard__id">MEMBER · AIDA-2049-7731</div>
                  <div className="adp-qrcard__pts">
                    <span className="adp-v">1,240</span>
                    <span className="adp-u">Aida Points</span>
                  </div>
                  <div style={{ marginTop: 10 }}>
                    <span className="adp-chip adp-chip-gold">
                      <IconGraduation size={13} /> Verified Student
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mini brand reference */}
        <div className="adp-tile adp-c12" style={{ marginTop: 20 }}>
          <div className="adp-tile__label">Brand Reference — Aida Café Banner</div>
          <div className="adp-brandref">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="adp-brandref__img"
              src={asset("/brand/aida-banner.png")}
              alt="Aida Café @ City U brand banner — cream background, floral pink accents, gold rings, latte art, and coffee-brown wave"
            />
            <div className="adp-brandref__bar">
              <span className="adp-brandref__label">Aida Café Brand Reference</span>
              <div className="adp-brandref__sw">
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
