"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, CreditCard, Zap } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small projects and MVPs",
    monthlyPrice: 2999,
    yearlyPrice: 2499,
    features: [
      "Single AI model development",
      "Basic integration support",
      "Email support",
      "Documentation access",
      "Monthly progress reports",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    description: "For scaling businesses and teams",
    monthlyPrice: 7999,
    yearlyPrice: 6499,
    features: [
      "Up to 3 AI models",
      "Priority integration support",
      "Dedicated Slack channel",
      "Custom API development",
      "Weekly progress calls",
      "Model fine-tuning included",
      "Performance optimization",
    ],
    cta: "Start Growing",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Full-scale AI transformation",
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      "Unlimited AI models",
      "Dedicated success manager",
      "24/7 priority support",
      "Custom infrastructure",
      "On-premise deployment options",
      "SLA guarantees",
      "Executive strategy sessions",
      "Full IP ownership",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="gradient-blob w-[600px] h-[600px] bg-pink-500/10 top-0 left-1/4" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-6">
            <CreditCard className="w-4 h-4 text-amber-500" />
            Pricing & Plans
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 font-[family-name:var(--font-display)]">
            Flexible <span className="gradient-text">Pricing</span> Plans
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-zinc-400 mb-8">
            Choose a plan that fits your needs and scale as you grow. 
            All plans include our core AI capabilities.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isYearly ? "text-white" : "text-zinc-500"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-16 h-8 bg-white/10 rounded-full p-1 transition-colors hover:bg-white/15"
            >
              <motion.div
                animate={{ x: isYearly ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full"
              />
            </button>
            <span className={`text-sm ${isYearly ? "text-white" : "text-zinc-500"}`}>
              Yearly
            </span>
            <span className="px-2 py-1 bg-amber-500/20 text-amber-500 text-xs font-medium rounded-full">
              Save 20%
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ y: -10 }}
              className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1 px-4 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-black text-sm font-semibold">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`glass-card p-8 h-full ${
                  plan.popular
                    ? "border-amber-500/30 bg-gradient-to-b from-amber-500/5 to-transparent"
                    : ""
                }`}
              >
                {/* Plan Header */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-zinc-500">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  {plan.monthlyPrice ? (
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold gradient-text">
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-zinc-500">/month</span>
                    </div>
                  ) : (
                    <div className="text-5xl font-bold gradient-text">Custom</div>
                  )}
                  {plan.yearlyPrice && isYearly && (
                    <p className="text-sm text-zinc-500 mt-2">
                      Billed annually (${plan.yearlyPrice * 12}/year)
                    </p>
                  )}
                </div>

                {/* CTA */}
                <Link
                  href="#contact"
                  className={`block w-full py-4 text-center font-semibold rounded-xl transition-all duration-300 mb-8 ${
                    plan.popular
                      ? "glow-button text-black hover:scale-105"
                      : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  {plan.cta}
                </Link>

                {/* Features */}
                <div className="space-y-4">
                  <p className="text-sm text-zinc-500 font-medium">Includes:</p>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-amber-500" />
                      </div>
                      <span className="text-sm text-zinc-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-card">
            <Zap className="w-5 h-5 text-amber-500" />
            <span className="text-sm text-zinc-300">
              All plans include a <span className="text-white font-medium">14-day money-back guarantee</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

