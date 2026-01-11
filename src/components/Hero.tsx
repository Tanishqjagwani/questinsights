"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Zap, Brain, TrendingUp, BarChart3 } from "lucide-react";
import Link from "next/link";

const avatars = [
  { bg: "bg-gradient-to-br from-amber-400 to-orange-500", initials: "SH" },
  { bg: "bg-gradient-to-br from-pink-400 to-rose-500", initials: "TJ" },
  { bg: "bg-gradient-to-br from-violet-400 to-purple-500", initials: "RK" },
  { bg: "bg-gradient-to-br from-cyan-400 to-blue-500", initials: "AI" },
];

const floatingCards = [
  { 
    title: "Your Brand", 
    subtitle: "AI-Powered Growth",
    icon: TrendingUp,
    position: "top-20 -left-10 md:left-10",
    delay: 0.8
  },
  { 
    title: "Analytics", 
    subtitle: "+127% this month",
    icon: BarChart3,
    position: "top-32 -right-10 md:right-10",
    delay: 1.0
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      {/* Gradient Blobs */}
      <div className="gradient-blob w-[600px] h-[600px] bg-amber-500/20 top-0 -right-64" />
      <div className="gradient-blob w-[500px] h-[500px] bg-pink-500/20 bottom-0 -left-64" />
      <div className="gradient-blob w-[400px] h-[400px] bg-violet-500/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Floating Cards - LanderX style */}
      {floatingCards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: card.delay, duration: 0.6 }}
          className={`absolute ${card.position} hidden lg:block z-20`}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
            className="glass-card p-4 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-pink-500/20 flex items-center justify-center">
              <card.icon className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">{card.title}</div>
              <div className="text-xs text-zinc-400">{card.subtitle}</div>
            </div>
          </motion.div>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        {/* Social Proof - Enhanced LanderX style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="flex -space-x-3">
            {avatars.map((avatar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className={`w-10 h-10 rounded-full ${avatar.bg} border-2 border-[#050505] flex items-center justify-center shadow-lg`}
              >
                <span className="text-white text-xs font-bold">
                  {avatar.initials}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="text-left">
            <div className="flex items-center gap-2">
              <span className="text-sm text-zinc-400">Join</span>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-white font-bold text-lg"
              >
                500+
              </motion.span>
              <span className="text-sm text-zinc-400">innovative companies</span>
            </div>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <motion.svg 
                  key={i} 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="w-4 h-4 text-amber-500 fill-current" 
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </motion.svg>
              ))}
              <span className="text-zinc-400 text-sm ml-2">5.0 rating</span>
            </div>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 font-[family-name:var(--font-display)]"
        >
          The best platform to{" "}
          <br className="hidden md:block" />
          <span className="gradient-text-pink">grow your AI business</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed"
        >
          The most powerful AI tools to boost your business, build intelligent systems, 
          and access cutting-edge machine learning solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="#contact"
            className="glow-button group flex items-center gap-2 px-8 py-4 text-base font-semibold text-black rounded-2xl hover:scale-105 transition-all duration-300"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#team"
            className="group flex items-center gap-2 px-8 py-4 text-base font-medium text-white bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <Play className="w-5 h-5" />
            Book a Demo
          </Link>
        </motion.div>

        {/* Feature Pills - Scrolling style like LanderX */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {[
            { icon: Sparkles, label: "AI Development" },
            { icon: Zap, label: "Rapid Prototyping" },
            { icon: Brain, label: "Machine Learning" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm text-zinc-300 hover:border-amber-500/30 transition-colors"
            >
              <item.icon className="w-4 h-4 text-amber-500" />
              {item.label}
            </motion.div>
          ))}
        </motion.div>

        {/* Dashboard Preview Cards - LanderX style */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {/* Stats Card 1 */}
          <motion.div
            whileHover={{ scale: 1.03, y: -5 }}
            className="glass-card p-6 text-left relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-transparent blur-2xl group-hover:opacity-100 opacity-50 transition-opacity" />
            <div className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Monthly Growth</div>
            <div className="text-4xl font-bold gradient-text mb-2">+127%</div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[1,2,3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-pink-500 border border-[#050505]" />
                ))}
              </div>
              <span className="text-xs text-zinc-400">Active users</span>
            </div>
            {/* Mini chart */}
            <div className="mt-4 flex items-end gap-1 h-12">
              {[40, 65, 45, 80, 55, 90, 70, 95].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
                  className="flex-1 bg-gradient-to-t from-amber-500/50 to-amber-500 rounded-sm"
                />
              ))}
            </div>
          </motion.div>

          {/* Stats Card 2 - Main */}
          <motion.div
            whileHover={{ scale: 1.03, y: -5 }}
            className="glass-card p-6 text-center relative overflow-hidden group md:scale-110"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent" />
            <div className="relative">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-500 to-pink-500 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm text-zinc-400 mb-1">Client Satisfaction</div>
              <div className="text-5xl font-bold gradient-text mb-2">98%</div>
              <div className="text-xs text-green-500 flex items-center justify-center gap-1">
                <TrendingUp className="w-3 h-3" />
                100% score anytime
              </div>
              <div className="mt-4 px-4 py-2 bg-white/5 rounded-xl text-xs text-zinc-400">
                Watch Stats & Growth like master
              </div>
            </div>
          </motion.div>

          {/* Stats Card 3 */}
          <motion.div
            whileHover={{ scale: 1.03, y: -5 }}
            className="glass-card p-6 text-left relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/10 to-transparent blur-2xl group-hover:opacity-100 opacity-50 transition-opacity" />
            <div className="text-xs text-zinc-500 uppercase tracking-wider mb-2">AI Models Deployed</div>
            <div className="text-4xl font-bold gradient-text mb-2">50+</div>
            <div className="text-sm text-zinc-400 mb-4">3x Faster Development</div>
            {/* Progress indicators */}
            <div className="space-y-2">
              {[
                { label: "Retention", value: 95 },
                { label: "Conversion", value: 87 },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs text-zinc-500 mb-1">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      transition={{ delay: 1.5 + i * 0.2, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-amber-500 to-pink-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
