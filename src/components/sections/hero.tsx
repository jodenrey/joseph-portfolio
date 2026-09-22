import {
  ArrowDown,
  ArrowDownToLine,
  ArrowUpRight,
  Github,
  Linkedin,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { HeroSculpture } from "@/components/three/hero-sculpture";

export function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="container">
        <div className="hero-topline mono">
          <span>
            <span className="status-dot" />
            SOFTWARE ENGINEER
          </span>
          <span>BASED IN THE PHILIPPINES · GMT+8</span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-intro">
              Hey, I’m Joseph Dennis Reyes <span aria-hidden="true">↗</span>
            </p>
            <h1>
              Thoughtfully
              <br />
              built.
              <br />
              <span>Fully stacked.</span>
            </h1>
            <p className="hero-description">
              I turn complex ideas into intuitive digital experiences. From the
              first interaction to the API behind it.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                Explore my work <ArrowUpRight size={19} />
              </a>
              <a
                href={siteConfig.resumeUrl}
                download={siteConfig.resumeDownloadFileName}
                className="button button-outline"
              >
                Download resume <ArrowDownToLine size={17} />
              </a>
            </div>
            <div className="hero-current">
              <span className="status-dot" />
              <span>
                Currently building at <a href="#experience">Atlas Geotech</a>
              </span>
            </div>
          </div>
          <div className="hero-art">
            <span className="art-coordinate mono" aria-hidden="true">
              FIG. 01 — THE BUILDING BLOCKS
            </span>
            <div className="sculpture-stage">
              <HeroSculpture />
            </div>
            <div className="art-caption mono">
              <span>IDEA → INTERFACE → INFRASTRUCTURE</span>
              <span aria-hidden="true">[ JDR ]</span>
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <a href="#projects" className="scroll-link mono">
            <ArrowDown size={15} /> SCROLL TO EXPLORE
          </a>
          <span className="hero-specialties">
            Web applications <i /> Mobile experiences <i /> Reliable systems
          </span>
          <div className="hero-socials">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Joseph on GitHub"
            >
              <Github size={19} />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Joseph on LinkedIn"
            >
              <Linkedin size={19} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
