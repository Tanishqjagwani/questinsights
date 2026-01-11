"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Mail, Calendar } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />
        <div className="gradient-blob w-[800px] h-[800px] bg-amber-500/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="gradient-blob w-[600px] h-[600px] bg-pink-500/15 top-1/2 left-1/3 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-gradient-to-br from-amber-500/20 to-transparent blur-2xl" />
          <div className="absolute bottom-8 right-8 w-32 h-32 rounded-full bg-gradient-to-br from-pink-500/20 to-transparent blur-2xl" />

          <div className="relative">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 mb-8"
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>

            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 font-[family-name:var(--font-display)]">
              Ready to Build the
              <br />
              <span className="gradient-text-pink">Future Together?</span>
            </h2>

            {/* Description */}
            <p className="max-w-2xl mx-auto text-lg text-zinc-400 mb-10 leading-relaxed">
              Let&apos;s discuss how AI can transform your business. Our team is ready 
              to turn your vision into reality with cutting-edge technology and 
              unmatched expertise.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link
                href="mailto:hello@genieaistaxk.com"
                className="glow-button group flex items-center gap-3 px-8 py-4 text-base font-semibold text-black rounded-2xl hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Start a Conversation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#"
                className="group flex items-center gap-3 px-8 py-4 text-base font-medium text-white bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Demo
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>No Commitment Required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Response within 24 hours</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

