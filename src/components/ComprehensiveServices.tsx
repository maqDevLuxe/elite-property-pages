/* ============================================================
   Comprehensive Services — Floating service cards
   ============================================================ */
import { motion } from "framer-motion";
import {
  Key,
  Paintbrush,
  Calculator,
  Scale,
  ClipboardList,
  Headphones,
  Camera,
  Megaphone,
} from "lucide-react";

const services = [
  { icon: Key, title: "Tenant Placement", desc: "Expert marketing and screening to place quality tenants quickly." },
  { icon: Paintbrush, title: "Property Renovation", desc: "Design-led renovations that maximize property appeal and value." },
  { icon: Calculator, title: "Rent Collection", desc: "Automated systems with 99.2% on-time collection rates." },
  { icon: Scale, title: "Legal Services", desc: "In-house legal counsel for evictions, disputes, and compliance." },
  { icon: ClipboardList, title: "Move-In / Move-Out", desc: "Detailed inspections with HD documentation at every transition." },
  { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock emergency support for owners and tenants." },
  { icon: Camera, title: "Property Marketing", desc: "Professional photography, virtual tours, and premium listings." },
  { icon: Megaphone, title: "Market Analysis", desc: "Data-driven rent analysis and competitive positioning reports." },
];

const ComprehensiveServices = () => (
  <section id="services" className="py-24 md:py-32 bg-secondary">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
          What We Offer
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
          Comprehensive Services
        </h2>
        <div className="gold-divider" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className={`${i % 3 === 0 ? "float-card" : i % 3 === 1 ? "float-card-delayed" : "float-card-slow"} group bg-card rounded-lg p-7 shadow-[var(--shadow-luxury)] hover:shadow-[var(--shadow-gold)] transition-shadow duration-500 text-center`}
          >
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary flex items-center justify-center group-hover:bg-gold transition-colors duration-500">
              <s.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              {s.title}
            </h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ComprehensiveServices;
