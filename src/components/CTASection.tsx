/* ============================================================
   Call to Action — Parallax background + contact form
   ============================================================ */
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const CTASection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 parallax-bg"
      style={{ backgroundImage: "url('/images/cta-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-primary/85" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text + info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
              Start Your Journey
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              Let's Elevate Your
              <br />
              <span className="text-gradient-gold">Property Portfolio</span>
            </h2>
            <p className="text-primary-foreground/70 font-body text-lg leading-relaxed mb-10">
              Schedule a complimentary consultation with our senior management
              team. Discover how we can transform your property experience.
            </p>

            <div className="space-y-5">
              {[
                { icon: Phone, text: "+1 (888) 555-0199" },
                { icon: Mail, text: "hello@prestigeestates.com" },
                { icon: MapPin, text: "One World Trade Center, New York" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-primary-foreground/80 font-body text-sm">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="float-card bg-card rounded-lg p-8 md:p-10 shadow-[var(--shadow-luxury)]"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                  <Mail className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  Thank You
                </h3>
                <p className="text-muted-foreground font-body">
                  We'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                  Request a Consultation
                </h3>
                <p className="text-muted-foreground font-body text-sm mb-8">
                  Fill in your details and we'll contact you shortly.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input
                      required
                      type="text"
                      placeholder="First Name"
                      className="w-full bg-secondary border border-border rounded px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                    />
                    <input
                      required
                      type="text"
                      placeholder="Last Name"
                      className="w-full bg-secondary border border-border rounded px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-secondary border border-border rounded px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-secondary border border-border rounded px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                  />
                  <textarea
                    rows={4}
                    placeholder="Tell us about your property..."
                    className="w-full bg-secondary border border-border rounded px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gold text-accent-foreground py-4 rounded font-body font-semibold text-sm tracking-wider uppercase hover:bg-gold-light transition-colors duration-300"
                  >
                    Send Inquiry
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
