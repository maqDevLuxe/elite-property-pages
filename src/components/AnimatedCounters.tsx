/* ============================================================
   Animated Counters — Key stats with counting animation
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { end: 2500, suffix: "+", label: "Properties Managed" },
  { end: 98, suffix: "%", label: "Client Satisfaction" },
  { end: 15, suffix: "+", label: "Years of Excellence" },
  { end: 4.2, suffix: "B", prefix: "$", label: "Assets Under Management" },
];

function useCounter(end: number, duration = 2000, start = false) {
  const [value, setValue] = useState(0);
  const ref = useRef<number>();

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Number((eased * end).toFixed(end % 1 !== 0 ? 1 : 0)));
      if (progress < 1) ref.current = requestAnimationFrame(step);
    };
    ref.current = requestAnimationFrame(step);
    return () => ref.current && cancelAnimationFrame(ref.current);
  }, [end, duration, start]);

  return value;
}

function CounterItem({ stat }: { stat: (typeof stats)[0] }) {
  const [inView, setInView] = useState(false);
  const val = useCounter(stat.end, 2200, inView);

  return (
    <motion.div
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true }}
      className="text-center"
    >
      <p className="font-display text-4xl md:text-6xl font-bold text-gold mb-2">
        {stat.prefix || ""}
        {val}
        {stat.suffix}
      </p>
      <p className="font-body text-primary-foreground/60 text-sm uppercase tracking-[0.2em]">
        {stat.label}
      </p>
    </motion.div>
  );
}

const AnimatedCounters = () => (
  <section className="py-20 md:py-28 bg-primary">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s) => (
          <CounterItem key={s.label} stat={s} />
        ))}
      </div>
    </div>
  </section>
);

export default AnimatedCounters;
