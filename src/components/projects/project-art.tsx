import Image from "next/image";
import { ArrowUpRight, Layers, MapPin, Search } from "lucide-react";

function ParcelMap() {
  return (
    <svg
      className="parcel-map"
      viewBox="0 0 520 320"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M-20 200C90 170 85 280 215 225S410 180 540 270"
        stroke="#92b9bf"
        strokeWidth="24"
      />
      <path
        d="M-20 200C90 170 85 280 215 225S410 180 540 270"
        stroke="#bdd5d5"
        strokeWidth="16"
      />
      <g stroke="#fffdf5" strokeWidth="12">
        <path d="M-40 80 580 160M80-50 190 370M340-40 260 370M440-40 425 370M-20 300 560 55" />
      </g>
      <g stroke="#bac1aa" strokeWidth="1.3">
        <path d="m143 89 94 13-15 64-59-23ZM257 105l50 8-12 40-50 24ZM333 117l80 12-3 38-89 30ZM171 177l49 18-21 77-26-33ZM308 228l100-41 4 84-103-5ZM19 91l77 12 14 51-65-11Z" />
      </g>
      <path
        d="m245 116 56 8-10 31-53 23Z"
        fill="#e96939"
        fillOpacity=".24"
        stroke="#d75a27"
        strokeWidth="2"
      />
      <path
        d="m238 108 73 11-12 43-72 29Z"
        stroke="#d75a27"
        strokeDasharray="4 4"
      />
      <circle cx="270" cy="143" r="6" fill="#d75a27" />
      <circle cx="270" cy="143" r="12" stroke="#d75a27" strokeOpacity=".4" />
    </svg>
  );
}

export function ProjectArt({ id }: { id: string }) {
  if (id === "vassist-ai" || id === "design-genius") {
    const title = id === "vassist-ai" ? "VAssist AI" : "DesignGenius";
    return (
      <div className={`project-art art-screenshot art-screenshot-${id}`}>
        <div className="screenshot-label mono" aria-hidden="true">
          <span>{id === "vassist-ai" ? "VASSIST / AI" : "DESIGNGENIUS"}</span>
          <span>
            {id === "vassist-ai" ? "AI WORKSPACE" : "ROOMS REIMAGINED"} ↗
          </span>
        </div>
        <div className="project-screenshot-window">
          <Image
            src={`/images/${id}-homepage.jpg`}
            alt={`${title} live homepage`}
            fill
            sizes="(max-width: 600px) 85vw, (max-width: 1200px) 40vw, 530px"
            className="project-screenshot"
          />
        </div>
        <span className="art-note mono" aria-hidden="true">
          LIVE SITE PREVIEW
        </span>
      </div>
    );
  }
  if (id === "atlas-nhd")
    return (
      <div className="project-art art-atlas" aria-hidden="true">
        <div className="map-label mono">
          <span>ATLAS / NHD</span>
          <span>PROPERTY INTELLIGENCE ↗</span>
        </div>
        <div className="atlas-window">
          <div className="window-top">
            <strong>
              <Layers size={14} /> atlas
            </strong>
            <span>Property search</span>
            <i />
          </div>
          <div className="map-wrap">
            <ParcelMap />
            <div className="map-search">
              <Search size={12} /> Find a property
            </div>
            <div className="map-report">
              <span className="map-icon">
                <MapPin size={17} />
              </span>
              <div>
                <strong>Property insights</strong>
                <span>Natural hazard report</span>
              </div>
              <ArrowUpRight size={15} />
            </div>
          </div>
        </div>
        <span className="art-note mono">INTERFACE STUDY</span>
      </div>
    );
  if (id === "atlas-portal")
    return (
      <div className="project-art art-mobile" aria-hidden="true">
        <div className="mobile-art-copy">
          <span className="mono">ATLAS PORTAL</span>
          <strong>
            Property.
            <br />
            In your
            <br />
            <em>pocket.</em>
          </strong>
          <span className="mobile-platforms">iOS + Android</span>
        </div>
        <div className="phone">
          <div className="phone-island" />
          <div className="phone-header">
            <strong>atlas</strong>
            <span>Portal</span>
          </div>
          <div className="phone-map">
            <ParcelMap />
          </div>
          <div className="phone-sheet">
            <span className="mono">YOUR NEXT REPORT</span>
            <strong>Start with a place.</strong>
            <div>
              <Search size={10} /> Search an address
            </div>
            <span className="phone-button">
              Find property <ArrowUpRight size={12} />
            </span>
          </div>
          <div className="phone-bar" />
        </div>
        <span className="art-note mono">INTERFACE STUDY</span>
      </div>
    );
  return null;
}
