/* ============================================================
   Testimonials — Carousel with floating cards
   ============================================================ */
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Victoria Harrington",
    role: "Estate Owner, Beverly Hills",
    image: "/images/property-1.jpg",
    quote:
      "Prestige Estates transformed how I view property management. Their attention to detail and proactive communication is unmatched in the industry.",
    rating: 5,
  },
  {
    name: "James Whitfield III",
    role: "Portfolio Investor, Manhattan",
    image: "/images/property-2.jpg",
    quote:
      "Since partnering with Prestige, my rental income has increased by 32%. Their market insights and tenant curation are truly world-class.",
    rating: 5,
  },
  {
    name: "Sophia Chen-Ramirez",
    role: "Luxury Villa Owner, Miami",
    image: "/images/property-3.jpg",
    quote:
      "The 24/7 concierge service gives me complete peace of mind. My tenants are happier, and my properties have never been in better condition.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % testimonials.length),
    []
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length),
    []
  );

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
            Client Voices
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Trusted by Distinguished Owners
          </h2>
          <div className="gold-divider" />
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5 }}
              className="float-card-slow bg-card rounded-lg p-10 md:p-14 text-center shadow-[var(--shadow-luxury)]"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-gold text-gold"
                  />
                ))}
              </div>

              <blockquote className="font-display text-lg md:text-2xl text-foreground leading-relaxed mb-8 italic">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold"
                />
                <div className="text-left">
                  <p className="font-display font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 w-10 h-10 rounded-full bg-card/10 backdrop-blur border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:border-gold hover:text-gold transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 w-10 h-10 rounded-full bg-card/10 backdrop-blur border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:border-gold hover:text-gold transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-gold w-8"
                    : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
