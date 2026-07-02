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
} from "./Icons";

const FEATURES = [
  "Warm greeting + points balance front and centre",
  "Digital stamp progress toward the next free drink",
  "One-tap My QR for scan, pay, and earn",
  "Student-only offers surfaced automatically",
];

export function MobilePreview() {
  return (
    <div className="preview-block" id="mobile">
      <div className="preview-copy">
        <span className="tag">
          <IconCoffee size={16} /> A · Customer Mobile App
        </span>
        <h3>Beautiful, simple, reward-focused</h3>
        <p>
          The customer app makes membership feel rewarding at a glance — points, stamps, and
          the QR pass are never more than one tap away, wrapped in Aida&apos;s warm café mood.
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
        <div className="phone">
          <div className="phone__notch" />
          <div className="phone__screen">
            <div className="app-scroll">
              {/* header */}
              <div className="app-header">
                <div>
                  <div className="app-hi">Good morning</div>
                  <div className="app-name">Aida Member</div>
                </div>
                <div className="app-avatar">A</div>
              </div>

              {/* points hero */}
              <div className="pts-card">
                <div className="row">
                  <div>
                    <div className="cap">AIDA POINTS BALANCE</div>
                    <div className="big">1,240</div>
                    <div className="cap">≈ 3 free drinks available</div>
                  </div>
                  <div className="mini-qr">
                    <QrPattern seed={12} />
                  </div>
                </div>
              </div>

              {/* stamps */}
              <div className="appcard">
                <div className="appcard__head">
                  <span className="appcard__title">Stamp Rewards</span>
                  <span className="appcard__meta">7 / 10 STAMPS</span>
                </div>
                <div className="stamps-mini">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className={`stamp-mini${i < 7 ? " stamp-mini--on" : ""}`}
                      aria-hidden
                    >
                      {i < 7 ? <IconCoffee size={12} /> : i + 1}
                    </div>
                  ))}
                </div>
              </div>

              {/* student offer */}
              <div className="offer-strip">
                <div className="offer-strip__icon">
                  <IconGraduation size={20} />
                </div>
                <div>
                  <div className="t">Student Offer · 20% Off</div>
                  <div className="s">Show student QR at City U campus</div>
                </div>
              </div>

              {/* featured drink */}
              <div className="appcard">
                <div className="appcard__head">
                  <span className="appcard__title">Featured Today</span>
                  <span className="appcard__meta">BARISTA PICK</span>
                </div>
                <div className="drink">
                  <div className="drink__img">☕</div>
                  <div style={{ flex: 1 }}>
                    <div className="drink__name">Salted Caramel Latte</div>
                    <div className="drink__desc">Silky espresso · caramel · sea salt</div>
                    <div className="drink__price">RM 12.90</div>
                  </div>
                  <button className="btn btn--gold btn--sm">
                    <IconGift size={13} /> +25
                  </button>
                </div>
              </div>
            </div>

            {/* bottom nav */}
            <div className="tabbar">
              <div className="tab tab--active">
                <IconHome size={20} />
                <span>Home</span>
              </div>
              <div className="tab">
                <IconGift size={20} />
                <span>Rewards</span>
              </div>
              <div className="tab tab--qr">
                <span className="tab__ic">
                  <IconQr size={22} />
                </span>
                <span>QR</span>
              </div>
              <div className="tab">
                <IconMenu size={20} />
                <span>Menu</span>
              </div>
              <div className="tab">
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
