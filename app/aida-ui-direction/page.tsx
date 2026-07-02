import type { Metadata } from "next";
import { Moodboard } from "./_components/Moodboard";
import { Competitors } from "./_components/Competitors";
import { MobilePreview } from "./_components/MobilePreview";
import { PosPreview } from "./_components/PosPreview";
import { AdminPreview } from "./_components/AdminPreview";
import { Principles } from "./_components/Principles";
import { IconArrow, IconCoffee, IconSparkle } from "./_components/Icons";
import { asset } from "./_components/asset";

export const metadata: Metadata = {
  title: "Aida System — UI Direction Preview",
  description:
    "Premium café-tech UI direction for Aida Café @ City U: customer app, staff POS, and admin dashboard.",
};

export default function AidaUiDirectionPage() {
  return (
    <div className="page">
      {/* Top bar */}
      <header className="topbar">
        <div className="container topbar__inner">
          <div className="brandmark">
            <div className="brandmark__logo">A</div>
            <div>
              <div className="brandmark__name">Aida System</div>
              <div className="brandmark__sub">Café @ City U</div>
            </div>
          </div>
          <nav className="topnav">
            <a href="#moodboard">Moodboard</a>
            <a href="#benchmark">Benchmark</a>
            <a href="#interfaces">Interfaces</a>
            <a href="#principles">Principles</a>
          </nav>
          <a className="btn btn--primary btn--sm" href="#interfaces">
            View Interfaces <IconArrow size={15} />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <span className="eyebrow">
              <span className="dot" />
              UI / UX Direction Preview
            </span>
            <h1 className="hero__title">
              A <em>premium café-tech</em> experience for Aida Café
            </h1>
            <p className="hero__lead">
              A connected ecosystem — customer app, staff POS, and admin dashboard — designed
              with the warmth of Aida Café and the polish of a market-ready commercial product.
            </p>
            <div className="hero__cta">
              <a className="btn btn--primary" href="#interfaces">
                <IconCoffee size={17} /> Explore the Interfaces
              </a>
              <a className="btn btn--outline" href="#moodboard">
                <IconSparkle size={17} /> See the Design System
              </a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat">
                <div className="n">3</div>
                <div className="l">Connected interfaces</div>
              </div>
              <div className="hero__stat">
                <div className="n">8</div>
                <div className="l">Brand palette colours</div>
              </div>
              <div className="hero__stat">
                <div className="n">1</div>
                <div className="l">Consistent design system</div>
              </div>
            </div>
          </div>

          <div className="brandref">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="brandref__img"
              src={asset("/brand/aida-banner.png")}
              alt="Aida Café @ City U brand banner used as visual reference"
            />
            <div className="brandref__bar">
              <span className="brandref__label">Aida Café Brand Reference</span>
              <span className="chip chip--gold">
                <IconSparkle size={13} /> Brand Inspiration
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 01 Moodboard */}
      <Moodboard />

      {/* 02 Competitors */}
      <Competitors />

      {/* 03 Interfaces */}
      <section className="section" id="interfaces">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">
              <span className="dot" />
              03 · Three Main Interfaces
            </span>
            <h2 className="section-title">One system, three tailored experiences</h2>
            <p className="section-sub">
              Customer, staff, and owner each get an interface built for how they work — unified
              by a single warm, premium Aida visual language.
            </p>
          </div>

          <MobilePreview />
          <PosPreview />
          <AdminPreview />
        </div>
      </section>

      {/* 04 Principles */}
      <Principles />

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta">
            <h2>Ready to build the full Aida System</h2>
            <p>
              This preview sets the visual direction for a real commercial café product. Once
              approved, we build the full customer app, staff POS, and admin dashboard on top of
              this design system.
            </p>
            <div className="cta__row">
              <a className="btn btn--gold" href="#moodboard">
                <IconSparkle size={17} /> Approve Direction
              </a>
              <a className="btn btn--outline" href="#interfaces">
                Review Interfaces
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          Aida System · UI Direction Preview · Aida Café @ City U — mock data for design review
          only.
        </div>
      </footer>
    </div>
  );
}
