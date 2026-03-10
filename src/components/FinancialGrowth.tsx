/* ============================================================
   Financial Growth Metrics — Animated progress bars + stats
   ============================================================ */
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, PieChart, ArrowUpRight } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    label: "Average ROI Increase",
    value: "32%",
    desc: "Year-over-year return improvement for managed properties",
    bar: 82,
  },
  {
    icon: DollarSign,
    label: "Revenue Growth",
    value: "$2.4B",
    desc: "Total property revenue managed across our portfolio",
    bar: 90,
  },
  {
    icon: PieChart,
    label: "Cost Reduction",
    value: "28%",
    desc: "Average operational cost savings through our management",
    bar: 72,
  },
  {
    icon: ArrowUpRight,
    label: "Property Appreciation",
    value: "18%",
    desc: "Above-market appreciation rate for managed properties",
    bar: 68,
  },
];

const FinancialGrowth = () => (
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
          Performance Metrics
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
          Driving Financial Growth
        </h2>
        <div className="gold-divider" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="float-card p-8 rounded-lg border border-border bg-secondary shadow-[var(--shadow-luxury)]"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <m.icon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground uppercase tracking-wider">
                  {m.label}
                </p>
                <p className="font-display text-3xl font-bold text-foreground">
                  {m.value}
                </p>
              </div>
            </div>
            <p className="font-body text-muted-foreground text-sm mb-4">
              {m.desc}
            </p>
            {/* Animated progress bar */}
            <div className="w-full h-2 bg-border rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${m.bar}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FinancialGrowth;
