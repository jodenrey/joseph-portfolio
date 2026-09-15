import { ArrowUpRight, Layers, MapPin, Search, Sparkles } from "lucide-react";

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
  if (id === "vassist-ai")
    return (
      <div className="project-art art-vassist" aria-hidden="true">
        <span className="art-big-type">
          A little more
          <br />
          <em>superpower.</em>
        </span>
        <div className="vassist-window">
          <div className="vassist-sidebar">
            <strong>
              v<span>✳</span>
            </strong>
            <span className="side-active">
              <Sparkles size={10} /> AI chat
            </span>
            <span>▦ &nbsp; Workspace</span>
            <span>◉ &nbsp; CRM</span>
            <span>▤ &nbsp; Invoices</span>
            <span>⚙ &nbsp; Settings</span>
          </div>
          <div className="vassist-main">
            <div className="vassist-top">
              Your AI workspace <span>✳</span>
            </div>
            <div className="vassist-greeting">
              <span>✳</span>
              <strong>What’s next?</strong>
              <p>A little help for your big ideas.</p>
            </div>
            <div className="vassist-prompts">
              <span>Explore an idea ↗</span>
              <span>Start a draft ↗</span>
            </div>
            <div className="vassist-input">
              Ask anything… <span>↑</span>
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
  return (
    <div className="project-art art-design" aria-hidden="true">
      <div className="design-art-heading">
        <span className="mono">DESIGNGENIUS</span>
        <strong>
          Room to
          <br />
          <em>reimagine.</em>
        </strong>
      </div>
      <svg viewBox="0 0 540 320" className="room-art">
        <defs>
          <linearGradient id="wall" x2="1" y2="1">
            <stop stopColor="#dcccb6" />
            <stop offset="1" stopColor="#ad977e" />
          </linearGradient>
          <linearGradient id="sofa" x2="0" y2="1">
            <stop stopColor="#e5b987" />
            <stop offset="1" stopColor="#b77c49" />
          </linearGradient>
        </defs>
        <path d="M250 0h290v245L350 290l-100-45Z" fill="url(#wall)" />
        <path d="m250 245 100 45 190-45v75H190Z" fill="#917b64" />
        <path d="M357 37h110v123H357Z" fill="#ece3d5" />
        <path d="M408 40c-66 49 62 65 27 117h30V40Z" fill="#a08062" />
        <ellipse cx="359" cy="267" rx="100" ry="22" fill="#d2c1a9" />
        <path d="m286 181 128-10 33 19-128 11Z" fill="#f0cc9c" />
        <path d="m319 201 128-11v41l-128 12Z" fill="url(#sofa)" />
        <path d="m286 181 33 20v42l-33-25Z" fill="#bd8655" />
        <rect
          x="290"
          y="145"
          width="135"
          height="50"
          rx="12"
          fill="url(#sofa)"
          transform="rotate(-4 290 145)"
        />
        <path
          d="m286 197 18 7v28l-18-7ZM431 189l18 6v29l-18-4Z"
          fill="#ddb384"
        />
        <ellipse cx="386" cy="263" rx="39" ry="11" fill="#4d5140" />
        <path
          d="M382 266v25M358 265l-8 17M410 265l8 17"
          stroke="#4d5140"
          strokeWidth="4"
        />
        <path d="M503 225v-94" stroke="#555c40" strokeWidth="3" />
        <path
          d="M503 174c-42-4-33-40-7-12 5-49 35-36 10-8 40-10 34 21-1 13"
          fill="#65704e"
        />
        <path d="M487 213h32l-6 31h-20Z" fill="#ddd0b9" />
      </svg>
      <span className="art-note mono">PROJECT ILLUSTRATION</span>
    </div>
  );
}
