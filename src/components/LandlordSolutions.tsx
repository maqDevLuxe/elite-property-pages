/* ============================================================
   Landlord Solutions — Split layout with image + features
   ============================================================ */
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const solutions = [
  "Maximize rental yield with dynamic pricing strategies",
  "Reduce vacancy rates with targeted tenant acquisition",
  "Protect your investment with proactive maintenance",
  "Streamline operations with our owner portal",
  "Access detailed analytics and performance reports",
  "Dedicated account manager for personalized service",
];

const LandlordSolutions = () => (
  <section className="py-24 md:py-32 bg-secondary">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src="/images/landlord-1.jpg"
            alt="Luxury property interior"
            className="rounded-lg shadow-[var(--shadow-luxury)] w-full object-cover aspect-[4/3]"
          />
          <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-lg overflow-hidden shadow-[var(--shadow-gold)] hidden md:block">
            <img
              src="/images/landlord-2.jpg"
              alt="Modern property exterior"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
            For Property Owners
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            Tailored Solutions for
            <br />
            <span className="text-gradient-gold">Discerning Landlords</span>
          </h2>
          <p className="font-body text-muted-foreground text-base leading-relaxed mb-8">
            We understand the unique challenges of managing premium properties.
            Our bespoke approach ensures maximum returns while preserving the
            integrity of your assets.
          </p>

          <ul className="space-y-4">
            {solutions.map((s, i) => (
              <motion.li
                key={s}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="font-body text-foreground text-sm">
                  {s}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default LandlordSolutions;
