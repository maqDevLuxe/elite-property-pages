/* ============================================================
   Subscribe CTA — Newsletter + contact form
   ============================================================ */
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

const SubscribeCTA = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
            Stay Informed
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="font-body text-primary-foreground/60 text-base max-w-xl mx-auto mb-10">
            Get exclusive market insights, property management tips, and
            industry news delivered directly to your inbox.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
        >
          {subscribed ? (
            <p className="font-body text-gold text-base w-full py-4">
              ✓ Thank you for subscribing!
            </p>
          ) : (
            <>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-primary-foreground/10 border border-primary-foreground/20 rounded px-5 py-3.5 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-accent-foreground px-8 py-3.5 rounded font-body font-semibold text-sm tracking-wider uppercase hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Subscribe <Send className="w-4 h-4" />
              </button>
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default SubscribeCTA;
