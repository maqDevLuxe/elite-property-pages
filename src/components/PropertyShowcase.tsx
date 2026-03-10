/* ============================================================
   Property Showcase — Full-width parallax image break
   ============================================================ */
import { motion } from "framer-motion";

const PropertyShowcase = () => (
  <section className="relative h-[60vh] md:h-[70vh] parallax-bg overflow-hidden" style={{ backgroundImage: "url('/images/property-showcase.jpg')" }}>
    <div className="absolute inset-0 bg-primary/60" />
    <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
          Our Portfolio
        </p>
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 max-w-3xl leading-tight">
          Managing the World's Most
          <br />
          <span className="text-gradient-gold">Exceptional Properties</span>
        </h2>
        <p className="font-body text-primary-foreground/70 text-lg max-w-xl mx-auto">
          From Manhattan penthouses to Malibu beachfront estates, we set the
          standard in luxury property management.
        </p>
      </motion.div>
    </div>
  </section>
);

export default PropertyShowcase;
