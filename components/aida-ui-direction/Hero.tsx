import { asset } from "./asset";
import { IconArrow, IconCoffee, IconSparkle } from "./icons";

export function Hero() {
  return (
    <section className="adp-hero" id="top">
      <div className="adp-container adp-hero__grid">
        <div>
          <span className="adp-eyebrow">
            <span className="adp-dot" />
            UI / UX Direction Preview
          </span>
          <h1 className="adp-hero__title">
            <em>Aida System</em> UI Direction
          </h1>
          <p className="adp-hero__lead">
            Premium café loyalty, POS, and management ecosystem for Aida Café.
          </p>
          <p className="adp-hero__desc">
            Aida Café is the first implementation of a scalable café-tech solution — a single,
            warm, market-ready design system connecting the customer app, staff POS, and admin
            dashboard.
          </p>
          <div className="adp-hero__cta">
            <a className="adp-btn adp-btn-primary" href="#interfaces">
              <IconCoffee size={17} /> Explore the Interfaces
            </a>
            <a className="adp-btn adp-btn-outline" href="#moodboard">
              <IconSparkle size={17} /> See the Design System
            </a>
          </div>
          <div className="adp-hero__stats">
            <div className="adp-stat">
              <div className="adp-stat__n">3</div>
              <div className="adp-stat__l">Connected interfaces</div>
            </div>
            <div className="adp-stat">
              <div className="adp-stat__n">8</div>
              <div className="adp-stat__l">Brand palette colours</div>
            </div>
            <div className="adp-stat">
              <div className="adp-stat__n">1</div>
              <div className="adp-stat__l">Consistent system</div>
            </div>
          </div>
        </div>

        <div className="adp-brandref">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="adp-brandref__img"
            src={asset("/brand/aida-banner.png")}
            alt="Aida Café @ City U brand banner used as the visual reference"
          />
          <div className="adp-brandref__bar">
            <span className="adp-brandref__label">Aida Café Brand Reference</span>
            <span className="adp-chip adp-chip-gold">
              <IconSparkle size={13} /> Brand Inspiration
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
