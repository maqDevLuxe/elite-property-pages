/* ============================================================
   Footer — Detailed multi-column footer
   ============================================================ */
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = {
  Services: ["Property Management", "Tenant Placement", "Maintenance", "Financial Reporting", "Legal Services"],
  Company: ["About Us", "Our Team", "Careers", "Press", "Contact"],
  Resources: ["Blog", "Market Reports", "Owner Portal", "Tenant Portal", "FAQ"],
};

const Footer = () => (
  <footer className="bg-primary pt-20 pb-8">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl font-display font-bold text-primary-foreground">
              PRESTIGE
            </span>
            <span className="text-gradient-gold text-xs font-body tracking-[0.3em] uppercase">
              Estates
            </span>
          </div>
          <p className="text-primary-foreground/50 font-body text-sm leading-relaxed mb-6 max-w-sm">
            Setting the gold standard in luxury property management since 2011.
            We transform properties into thriving investments.
          </p>
          <div className="space-y-3">
            {[
              { icon: MapPin, text: "One World Trade Center, New York, NY" },
              { icon: Phone, text: "+1 (888) 555-0199" },
              { icon: Mail, text: "hello@prestigeestates.com" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <Icon className="w-4 h-4 text-gold" />
                <span className="font-body text-primary-foreground/60 text-sm">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="font-display text-base font-semibold text-primary-foreground mb-5">
              {heading}
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-body text-primary-foreground/50 text-sm hover:text-gold transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    {link}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-primary-foreground/40 font-body text-sm">
          © {new Date().getFullYear()} Prestige Estates. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((t) => (
            <a
              key={t}
              href="#"
              className="font-body text-primary-foreground/40 text-sm hover:text-gold transition-colors duration-300"
            >
              {t}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
