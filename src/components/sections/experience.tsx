import { ArrowDownToLine, Plus } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionHeader } from "@/components/ui/section-header";

export function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container experience-grid">
        <div className="experience-intro">
          <SectionHeader
            eyebrow="02 / THE JOURNEY"
            title="Built on experience."
            description="Real products. Real teams. A little more perspective with every build."
          />
          <a
            className="text-link"
            href={siteConfig.resumeUrl}
            download={siteConfig.resumeDownloadFileName}
          >
            The full story, in a PDF <ArrowDownToLine size={16} />
          </a>
        </div>
        <div className="experience-list">
          {siteConfig.experience.map((item, i) => (
            <details
              className="experience-item"
              key={item.company}
              open={i === 0}
            >
              <summary>
                <span className="experience-number mono">0{i + 1}</span>
                <span className="experience-summary">
                  <span className="experience-period mono">
                    {item.period}
                    {i === 0 && <span className="current-label">CURRENT</span>}
                  </span>
                  <span className="experience-company">{item.company}</span>
                  <span className="experience-role">{item.role}</span>
                </span>
                <Plus className="experience-expand" size={20} />
              </summary>
              <div className="experience-details">
                <p className="experience-location">{item.location}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
