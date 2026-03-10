/* ============================================================
   Partner Agencies — Trusted logos marquee
   ============================================================ */
import { motion } from "framer-motion";

const partners = [
  "Sotheby's International",
  "Christie's Real Estate",
  "Engel & Völkers",
  "Coldwell Banker",
  "Keller Williams",
  "Douglas Elliman",
  "Compass Realty",
  "Berkshire Hathaway",
];

const PartnerAgencies = () => (
  <section className="py-16 bg-secondary border-y border-border">
    <div className="container mx-auto px-6">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-muted-foreground font-body text-sm tracking-[0.3em] uppercase mb-10"
      >
        Trusted by Leading Agencies
      </motion.p>

      {/* Logo marquee */}
      <div className="overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-secondary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-secondary to-transparent z-10" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-16 whitespace-nowrap"
        >
          {[...partners, ...partners].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex-shrink-0 px-8 py-4 border border-border rounded-lg bg-card"
            >
              <span className="font-display text-lg font-semibold text-foreground/60 tracking-wide">
                {name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default PartnerAgencies;
