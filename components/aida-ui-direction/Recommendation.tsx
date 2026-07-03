import { IconCoffee, IconBag, IconChart, IconArrow, IconSparkle } from "./icons";

const APPROVE = [
  { icon: <IconCoffee size={15} />, label: "Customer App" },
  { icon: <IconBag size={15} />, label: "Staff POS" },
  { icon: <IconChart size={15} />, label: "Admin Dashboard" },
];

const NEXT_STEPS = [
  { t: "Full screen-by-screen UI design", d: "Design every screen for all three interfaces." },
  { t: "Clickable prototype", d: "An interactive prototype for realistic walkthroughs." },
  { t: "User testing with staff & owner", d: "Validate flows with the people who use them daily." },
  { t: "Development planning", d: "Scope, architecture, and build roadmap for delivery." },
];

export function Recommendation() {
  return (
    <section className="adp-section" id="recommendation">
      <div className="adp-container">
        <div className="adp-rec">
          <div className="adp-rec__inner">
            <div>
              <span
                className="adp-eyebrow"
                style={{ background: "rgba(255,255,255,0.1)", color: "#f7efe6", borderColor: "rgba(201,154,69,0.4)" }}
              >
                <span className="adp-dot" />
                07 · Final Recommendation
              </span>
              <h2 style={{ marginTop: 18 }}>Approve the visual direction, then design in full</h2>
              <p>
                Aida Café should first approve this visual direction for the Customer App, Staff
                POS, and Admin Dashboard. Once approved, the next phase moves into complete,
                screen-by-screen product design.
              </p>
              <div style={{ display: "flex", gap: 10, marginTop: 20, flexWrap: "wrap" }}>
                {APPROVE.map((a) => (
                  <span
                    key={a.label}
                    className="adp-chip"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      color: "#f7efe6",
                      borderColor: "rgba(201,154,69,0.35)",
                    }}
                  >
                    {a.icon} {a.label}
                  </span>
                ))}
              </div>
              <div className="adp-rec__cta">
                <a className="adp-btn adp-btn-gold" href="#top">
                  <IconSparkle size={17} /> Approve Direction
                </a>
                <a
                  className="adp-btn adp-btn-outline"
                  href="#interfaces"
                  style={{ background: "transparent", color: "#f7efe6", borderColor: "rgba(247,239,230,0.4)" }}
                >
                  Review Interfaces <IconArrow size={16} />
                </a>
              </div>
            </div>

            <div className="adp-steps">
              <div className="adp-steps__h">Next Phase After Approval</div>
              {NEXT_STEPS.map((s, i) => (
                <div className="adp-step" key={s.t}>
                  <div className="adp-step__n">{i + 1}</div>
                  <div>
                    <div className="adp-step__t">{s.t}</div>
                    <div className="adp-step__d">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
