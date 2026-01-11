"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  TrendingUp, 
  Settings2, 
  Lock, 
  RefreshCcw, 
  HeadphonesIcon,
  Award
} from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "Get from idea to production in weeks, not months. Our agile approach ensures rapid iteration and deployment.",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Analytics",
    description: "Make smarter decisions with live data and actionable insights, delivered in real-time to stay ahead of the curve.",
  },
  {
    icon: Settings2,
    title: "Fully Customizable",
    description: "Every solution is tailored to your unique needs. No cookie-cutter approaches—just purpose-built AI systems.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Your data is protected with cutting-edge encryption and robust security protocols at every layer.",
  },
  {
    icon: RefreshCcw,
    title: "Continuous Learning",
    description: "Our AI systems evolve with your business, continuously improving accuracy and performance over time.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Expert Support",
    description: "Access dedicated assistance around the clock. Our team ensures you're never alone on your AI journey.",
  },
];

const marqueeItems = [
  "AI Development",
  "Machine Learning",
  "Deep Learning",
  "Natural Language Processing",
  "Computer Vision",
  "Predictive Analytics",
  "Data Engineering",
  "MLOps",
  "LLM Fine-tuning",
  "RAG Systems",
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="gradient-blob w-[600px] h-[600px] bg-pink-500/10 -bottom-64 -left-64" />
      <div className="gradient-blob w-[500px] h-[500px] bg-violet-500/10 top-0 right-0" />

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 px-6"
        >
          <span className="section-label mb-6">
            <Award className="w-4 h-4 text-amber-500" />
            Benefits
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 font-[family-name:var(--font-display)]">
            Why Choose <span className="gradient-text">GenieAI</span>?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-zinc-400">
            Innovative tools and powerful insights designed to accelerate 
            your business growth and AI transformation.
          </p>
        </motion.div>

        {/* Scrolling Marquee */}
        <div className="relative mb-20 overflow-hidden py-8">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />
          
          <div className="flex animate-marquee">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 mx-4 px-6 py-3 bg-white/5 border border-white/10 rounded-full whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="text-sm font-medium text-zinc-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-7xl mx-auto px-6">
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-8 group"
              >
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/10 to-pink-500/10 flex items-center justify-center group-hover:from-amber-500/20 group-hover:to-pink-500/20 transition-all duration-300">
                    <benefit.icon className="w-7 h-7 text-amber-500" />
                  </div>
                  <div className="absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-amber-500 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

