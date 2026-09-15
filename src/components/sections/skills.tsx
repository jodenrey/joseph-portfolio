import { Braces, Layers3, Server } from "lucide-react";
import { siteConfig } from "@/config/site";
const icons = [Braces, Server, Layers3];
export function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-heading">
          <p className="section-kicker">THE TOOLKIT</p>
          <h2>Good ideas deserve the right tools.</h2>
        </div>
        <div className="skills-grid">
          {siteConfig.skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <article className="skill-group" key={group.category}>
                <div className="skill-group-title">
                  <Icon size={23} />
                  <h3>{group.category}</h3>
                  <span className="mono">0{i + 1}</span>
                </div>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
