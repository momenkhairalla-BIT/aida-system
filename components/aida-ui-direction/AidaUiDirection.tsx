import "../../app/aida-ui-direction/aida-ui-direction.css";

import { Hero } from "./Hero";
import { Moodboard } from "./Moodboard";
import { Competitors } from "./Competitors";
import { Positioning } from "./Positioning";
import { Interfaces } from "./Interfaces";
import { Principles } from "./Principles";
import { Roadmap } from "./Roadmap";
import { Recommendation } from "./Recommendation";
import { IconArrow } from "./icons";

export function AidaUiDirection() {
  return (
    <div className="aida-dp">
      <header className="adp-topbar">
        <div className="adp-container adp-topbar__inner">
          <div className="adp-brand">
            <div className="adp-brand__logo">A</div>
            <div>
              <div className="adp-brand__name">Aida System</div>
              <div className="adp-brand__sub">Café @ City U</div>
            </div>
          </div>
          <nav className="adp-topnav">
            <a href="#moodboard">Moodboard</a>
            <a href="#benchmark">Benchmark</a>
            <a href="#positioning">Positioning</a>
            <a href="#interfaces">Interfaces</a>
            <a href="#roadmap">Roadmap</a>
          </nav>
          <a className="adp-btn adp-btn-primary adp-btn-sm" href="#interfaces">
            View Interfaces <IconArrow size={15} />
          </a>
        </div>
      </header>

      <Hero />
      <Moodboard />
      <Competitors />
      <Positioning />
      <Interfaces />
      <Principles />
      <Roadmap />
      <Recommendation />

      <footer className="adp-footer">
        <div className="adp-container">
          Aida System · UI Direction Preview · Aida Café @ City U — mock data for design review
          only.
        </div>
      </footer>
    </div>
  );
}
