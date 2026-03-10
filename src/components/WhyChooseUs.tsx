/* ============================================================
   Why Choose Us — Animated icon cards with floating effect
   ============================================================ */
import { motion } from "framer-motion";
import { Shield, TrendingUp, Clock, Gem } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Asset Protection",
    description:
      "Comprehensive risk management and insurance coordination to safeguard your valuable investments.",
    float: "float-card",
  },
  {
    icon: TrendingUp,
    title: "Revenue Optimization",
    description:
      "Data-driven strategies that maximize rental income and long-term property value appreciation.",
    float: "float-card-delayed",
  },
  {
    icon: Clock,
    title: "24/7 Concierge",
    description:
      "Round-the-clock dedicated support for both property owners and discerning tenants.",
    float: "float-card-slow",
  },
  {
    icon: Gem,
    title: "Bespoke Service",
    description:
      "Tailored management plans designed around each property's unique character and owner goals.",
    float: "float-card",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
            Our Distinction
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Prestige
          </h2>
          <div className="gold-divider" />
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className={`${feature.float} bg-card rounded-lg p-8 text-center shadow-[var(--shadow-luxury)] hover:shadow-[var(--shadow-gold)] transition-shadow duration-500 group`}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center group-hover:bg-gold transition-colors duration-500">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
