/* ============================================================
   Keeping Landlords Satisfied — Image + text alternating rows
   ============================================================ */
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const rows = [
  {
    image: "/images/property-1.jpg",
    title: "Transparent Communication",
    desc: "Real-time updates, monthly reports, and instant access to your property dashboard. You'll always know exactly how your investment is performing.",
    reverse: false,
  },
  {
    image: "/images/property-2.jpg",
    title: "Hassle-Free Ownership",
    desc: "From tenant screening to emergency repairs, we handle every detail so you can enjoy the returns without the day-to-day burden of property management.",
    reverse: true,
  },
];

const LandlordSatisfaction = () => (
  <section className="py-24 md:py-32 bg-card">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
          Owner Experience
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
          Keeping Landlords Satisfied
        </h2>
        <div className="gold-divider" />
      </motion.div>

      <div className="space-y-20">
        {rows.map((r, i) => (
          <div
            key={r.title}
            className={`grid lg:grid-cols-2 gap-12 items-center ${r.reverse ? "lg:direction-rtl" : ""}`}
          >
            <motion.div
              initial={{ opacity: 0, x: r.reverse ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={r.reverse ? "lg:order-2" : ""}
            >
              <img
                src={r.image}
                alt={r.title}
                className="rounded-lg shadow-[var(--shadow-luxury)] w-full object-cover aspect-[4/3]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: r.reverse ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className={r.reverse ? "lg:order-1" : ""}
            >
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                {r.title}
              </h3>
              <p className="font-body text-muted-foreground text-base leading-relaxed mb-6">
                {r.desc}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-body text-sm text-gold font-semibold uppercase tracking-wider hover:gap-3 transition-all duration-300"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LandlordSatisfaction;
