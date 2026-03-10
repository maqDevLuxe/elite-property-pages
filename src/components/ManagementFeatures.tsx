/* ============================================================
   Management Features — Dark background with animated icons
   ============================================================ */
import { motion } from "framer-motion";
import {
  Building2,
  Wrench,
  BarChart3,
  Users,
  FileText,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Property Inspections",
    desc: "Quarterly inspections with detailed photographic reports and maintenance recommendations.",
  },
  {
    icon: Wrench,
    title: "Maintenance Management",
    desc: "24/7 emergency response with vetted contractors and transparent cost tracking.",
  },
  {
    icon: BarChart3,
    title: "Financial Reporting",
    desc: "Real-time dashboards, monthly statements, and year-end tax-ready documentation.",
  },
  {
    icon: Users,
    title: "Tenant Screening",
    desc: "Comprehensive background, credit, and employment verification for every applicant.",
  },
  {
    icon: FileText,
    title: "Lease Administration",
    desc: "Custom lease drafting, renewals, and compliance monitoring across jurisdictions.",
  },
  {
    icon: ShieldCheck,
    title: "Legal Compliance",
    desc: "Stay ahead of regulations with proactive compliance audits and policy updates.",
  },
];

const ManagementFeatures = () => (
  <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
    {/* Decorative accent */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
          Full-Service Management
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
          Comprehensive Property Oversight
        </h2>
        <div className="gold-divider" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group p-8 rounded-lg border border-primary-foreground/10 hover:border-gold/40 transition-all duration-500 hover:bg-primary-foreground/5"
          >
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center mb-6"
            >
              <f.icon className="w-6 h-6 text-gold" />
            </motion.div>
            <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">
              {f.title}
            </h3>
            <p className="font-body text-primary-foreground/60 text-sm leading-relaxed">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ManagementFeatures;
