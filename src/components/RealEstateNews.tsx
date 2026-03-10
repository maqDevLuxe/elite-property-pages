/* ============================================================
   Real Estate News — Blog preview cards
   ============================================================ */
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const articles = [
  {
    image: "/images/news-1.jpg",
    date: "March 5, 2026",
    title: "The Future of Luxury Property Management in 2026",
    excerpt: "Emerging trends in AI-driven property management and what it means for high-net-worth investors.",
  },
  {
    image: "/images/news-2.jpg",
    date: "February 28, 2026",
    title: "Maximizing ROI: A Guide to Premium Rental Strategies",
    excerpt: "How dynamic pricing and strategic renovations can boost your property portfolio's performance.",
  },
  {
    image: "/images/news-3.jpg",
    date: "February 20, 2026",
    title: "Top 10 Markets for Luxury Real Estate Investment",
    excerpt: "Our analysts reveal the most promising luxury real estate markets for the coming year.",
  },
];

const RealEstateNews = () => (
  <section className="py-24 md:py-32 bg-secondary">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
          Industry Insights
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
          Real Estate News
        </h2>
        <div className="gold-divider" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((a, i) => (
          <motion.article
            key={a.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="float-card group bg-card rounded-lg overflow-hidden shadow-[var(--shadow-luxury)] hover:shadow-[var(--shadow-gold)] transition-shadow duration-500"
          >
            <div className="overflow-hidden aspect-[16/10]">
              <img
                src={a.image}
                alt={a.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-7">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-3.5 h-3.5 text-gold" />
                <span className="font-body text-muted-foreground text-xs">{a.date}</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2 leading-snug">
                {a.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                {a.excerpt}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-body text-sm text-gold font-semibold uppercase tracking-wider hover:gap-3 transition-all duration-300"
              >
                Read More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default RealEstateNews;
