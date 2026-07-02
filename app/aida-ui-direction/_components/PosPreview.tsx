import {
  IconScan,
  IconGraduation,
  IconCheck,
  IconBag,
} from "./Icons";

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

const FEATURES = [
  "Scan member QR to attach points instantly",
  "Big touch targets — fast, mistake-resistant taps",
  "One tap to apply verified student discount",
  "Clear cart totals before every checkout",
];

export function PosPreview() {
  return (
    <div className="preview-block preview-block--rev" id="pos">
      <div className="stage">
        <div className="tablet">
          <div className="tablet__screen">
            {/* main */}
            <div className="pos-main">
              <div className="pos-topbar">
                <div className="pos-scan">
                  <div className="pos-scan__ic">
                    <IconScan size={18} />
                  </div>
                  <div>
                    <div className="t">Scan Member QR</div>
                    <div className="s">Tap to earn &amp; redeem Aida Points</div>
                  </div>
                </div>
              </div>

              <div className="pos-cats">
                {CATS.map((c, i) => (
                  <span key={c} className={`pos-cat${i === 0 ? " pos-cat--on" : ""}`}>
                    {c}
                  </span>
                ))}
              </div>

              <div className="pos-grid">
                {PRODUCTS.map((p) => (
                  <div className="pos-item" key={p.name}>
                    <div className="pos-item__img">{p.emoji}</div>
                    <div className="pos-item__name">{p.name}</div>
                    <div className="pos-item__price">RM {p.price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* cart */}
            <div className="pos-cart">
              <div className="pos-member">
                <div className="pos-member__av">A</div>
                <div>
                  <div className="n">Aida Rahman</div>
                  <div className="m">Gold · Student Verified</div>
                </div>
                <div className="pts">
                  <div className="v">1,240</div>
                  <div className="u">POINTS</div>
                </div>
              </div>

              <div className="pos-lines">
                {LINES.map((l) => (
                  <div className="pos-line" key={l.name}>
                    <span className="pos-line__q">{l.q}</span>
                    <span className="pos-line__n">{l.name}</span>
                    <span className="pos-line__p">RM {l.price}</span>
                  </div>
                ))}
              </div>

              <div className="pos-totals">
                <div className="pos-trow">
                  <span>Subtotal</span>
                  <span>RM 42.80</span>
                </div>
                <div className="pos-trow pos-trow--discount">
                  <span>Student Offer −20%</span>
                  <span>− RM 8.56</span>
                </div>
                <div className="pos-trow">
                  <span>Points earned</span>
                  <span>+34 pts</span>
                </div>
                <div className="pos-trow pos-trow--grand">
                  <span>Total</span>
                  <span>RM 34.24</span>
                </div>
              </div>

              <div className="pos-actions">
                <button className="btn btn--pink btn--block btn--sm">
                  <IconGraduation size={15} /> Apply Student Offer
                </button>
                <button className="btn btn--primary btn--block">
                  <IconCheck size={16} /> Checkout · RM 34.24
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="preview-copy">
        <span className="tag">
          <IconBag size={16} /> B · Staff POS Tablet
        </span>
        <h3>Fast, touch-friendly, mistake-resistant</h3>
        <p>
          The POS keeps baristas moving. Scan a member, tap products from a clear grid, apply
          offers in one touch, and confirm a checkout that always shows the final total.
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
    </div>
  );
}
