import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="wordmark" href="#top">
          joseph reyes<span className="wordmark-dot">.</span>
        </a>
        <p>
          © {new Date().getFullYear()} {siteConfig.fullName}
        </p>
        <a href="#top" className="text-link">
          Back to top <ArrowUpRight size={16} />
        </a>
      </div>
    </footer>
  );
}
