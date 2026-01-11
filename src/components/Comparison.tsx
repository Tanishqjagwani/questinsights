"use client";

import { motion } from "framer-motion";
import { Check, X, Scale } from "lucide-react";

const comparisonFeatures = [
  "Effortless AI integration",
  "Highly scalable & flexible solutions",
  "Advanced dashboard control",
  "Built-in data-driven analytics",
  "Latest automation solutions",
];

const othersFeatures = [
  "Limited integration capabilities",
  "Rigid and non-scalable options",
  "Basic dashboard functionalities",
  "Lack of advanced analytics",
  "Outdated and complex interfaces",
];

export default function Comparison() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="gradient-blob w-[500px] h-[500px] bg-violet-500/10 top-0 left-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-6">
            <Scale className="w-4 h-4 text-amber-500" />
            Comparison
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 font-[family-name:var(--font-display)]">
            Why <span className="gradient-text">GenieAI</span> Stands Out
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-zinc-400">
            See how we compare against others in performance, innovation, and growth
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* GenieAI Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-card p-8 h-full border-amber-500/30 bg-gradient-to-b from-amber-500/5 to-transparent">
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-pink-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">GenieAI Staxk</h3>
                  <p className="text-sm text-amber-500">Recommended</p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {comparisonFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-xl"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-zinc-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-px bg-gradient-to-b from-amber-500/20 to-transparent rounded-3xl blur-xl opacity-50 -z-10" />
            </div>
          </motion.div>

          {/* Others Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 h-full opacity-75">
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <span className="text-zinc-400 font-bold text-lg">?</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-400">Others</h3>
                  <p className="text-sm text-zinc-500">Traditional Solutions</p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {othersFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-xl"
                  >
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-red-500" />
                    </div>
                    <span className="text-zinc-500">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-zinc-400 mb-4">
            Ready to experience the difference?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-medium transition-colors"
          >
            Start your project today
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

