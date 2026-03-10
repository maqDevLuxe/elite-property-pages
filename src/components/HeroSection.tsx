/* ============================================================
   Hero Section — Parallax background with overlay + CTA
   ============================================================ */
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center parallax-bg overflow-hidden"
      style={{ backgroundImage: "url('/images/hero-mansion.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-gold font-body text-sm tracking-[0.4em] uppercase mb-6">
            Premium Property Management
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
        >
          Elevating the Art of{" "}
          <span className="text-gradient-gold">Property Management</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-primary-foreground/70 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We curate bespoke management solutions for distinguished property
          owners who demand nothing less than excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="bg-gold text-accent-foreground px-10 py-4 rounded font-body font-semibold text-sm tracking-wider uppercase hover:bg-gold-light transition-colors duration-300"
          >
            Schedule a Consultation
          </a>
          <a
            href="#about"
            className="border border-primary-foreground/30 text-primary-foreground px-10 py-4 rounded font-body font-semibold text-sm tracking-wider uppercase hover:border-gold hover:text-gold transition-colors duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6 text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
