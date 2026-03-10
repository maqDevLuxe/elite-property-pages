/* ============================================================
   Tenant Retention Strategies — Icon list with stats
   ============================================================ */
import { motion } from "framer-motion";
import { Heart, MessageSquare, Home, Award, Handshake, Sparkles } from "lucide-react";

const strategies = [
  {
    icon: Heart,
    title: "Personalized Tenant Care",
    desc: "Dedicated relationship managers ensure every tenant feels valued and heard.",
  },
  {
    icon: MessageSquare,
    title: "Responsive Communication",
    desc: "Average response time under 2 hours for all tenant inquiries and requests.",
  },
  {
    icon: Home,
    title: "Premium Living Standards",
    desc: "Regular upgrades and improvements that keep properties desirable and modern.",
  },
  {
    icon: Award,
    title: "Loyalty Programs",
    desc: "Renewal incentives and long-term tenant benefits that reduce turnover costs.",
  },
  {
    icon: Handshake,
    title: "Fair & Transparent Policies",
    desc: "Clear lease terms and equitable practices that build lasting trust.",
  },
  {
    icon: Sparkles,
    title: "Community Building",
    desc: "Curated events and amenities that foster a sense of belonging and community.",
  },
];

const TenantRetention = () => (
  <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
            Tenant Experience
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6 leading-tight">
            Retention Through
            <br />
            <span className="text-gradient-gold">Exceptional Service</span>
          </h2>
          <p className="text-primary-foreground/70 font-body text-base leading-relaxed mb-8">
            Our 96% tenant retention rate speaks volumes. We create living
            experiences that tenants don't want to leave, protecting your
            revenue stream and reducing costly turnover.
          </p>

          <div className="flex gap-8">
            {[
              { val: "96%", label: "Retention Rate" },
              { val: "<2hr", label: "Response Time" },
              { val: "4.9★", label: "Tenant Rating" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-2xl font-bold text-gold">
                  {s.val}
                </p>
                <p className="font-body text-primary-foreground/50 text-xs uppercase tracking-wider mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {strategies.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-5 rounded-lg border border-primary-foreground/10 hover:border-gold/30 transition-colors duration-300"
            >
              <s.icon className="w-5 h-5 text-gold mb-3" />
              <h3 className="font-display text-sm font-semibold text-primary-foreground mb-1">
                {s.title}
              </h3>
              <p className="font-body text-primary-foreground/50 text-xs leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TenantRetention;
