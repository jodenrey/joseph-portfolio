import Image from "next/image";
import profileImage from "../../../public/images/profile.png";
import { ArrowUpRight, Coffee, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <div className="portrait-block">
          <div className="portrait-frame">
            <Image
              src={profileImage}
              alt="Joseph Dennis Reyes"
              fill
              sizes="(max-width: 700px) 85vw, 380px"
              className="portrait"
            />
            <span className="portrait-label mono">
              THE HUMAN BEHIND THE CODE
            </span>
          </div>
          <div className="portrait-note">
            <MapPin size={15} /> Philippines <span>GMT+8</span>
          </div>
        </div>
        <div className="about-copy">
          <p className="section-kicker">03 / A LITTLE ABOUT ME</p>
          <h2 className="section-title">
            Curious by nature.
            <br />
            <span className="muted-heading">Builder by choice.</span>
          </h2>
          {siteConfig.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            Away from the keyboard, I’m usually watching a film, playing a game,
            exploring somewhere new, or finding a good cup of coffee.
          </p>
          <div className="about-footnote">
            <span>
              <Coffee size={17} /> Fueled by curiosity (and coffee).
            </span>
            <a href="#contact" className="text-link">
              Say hello <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
