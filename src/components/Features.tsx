"use client";

import { motion } from "framer-motion";
import { 
  Bot, 
  Cpu, 
  LineChart, 
  Shield, 
  Rocket, 
  Code2,
  Layers,
  Workflow
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Agents",
    description: "Build intelligent autonomous agents that understand context and execute complex tasks with precision.",
    color: "from-amber-500 to-orange-500",
    size: "large",
  },
  {
    icon: Cpu,
    title: "Custom LLM Solutions",
    description: "Fine-tuned language models tailored to your specific domain and use cases.",
    color: "from-pink-500 to-rose-500",
    size: "small",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Data-driven insights powered by advanced ML algorithms.",
    color: "from-violet-500 to-purple-500",
    size: "small",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security protocols protecting your data and AI models with zero-trust architecture.",
    color: "from-cyan-500 to-blue-500",
    size: "large",
  },
];

const smallFeatures = [
  { icon: Rocket, label: "Rapid Deployment" },
  { icon: Code2, label: "Clean APIs" },
  { icon: Layers, label: "Scalable Architecture" },
  { icon: Workflow, label: "Seamless Integration" },
];

export default function Features() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="gradient-blob w-[500px] h-[500px] bg-amber-500/10 top-0 right-0" />

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
            <Cpu className="w-4 h-4 text-amber-500" />
            Our Capabilities
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 font-[family-name:var(--font-display)]">
            Powerful AI Solutions
            <br />
            <span className="text-zinc-500">Built for Scale</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-zinc-400">
            From intelligent automation to predictive analytics, we deliver 
            cutting-edge AI technology that drives real business outcomes.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`glass-card relative overflow-hidden group ${
                feature.size === "large" ? "lg:col-span-2 lg:row-span-2 p-8" : "p-6"
              }`}
            >
              {/* Gradient Accent */}
              <div
                className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${feature.color} opacity-5 blur-3xl group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} p-3 mb-4`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3
                className={`font-bold mb-3 ${
                  feature.size === "large" ? "text-2xl" : "text-lg"
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-zinc-400 leading-relaxed ${
                  feature.size === "large" ? "text-base" : "text-sm"
                }`}
              >
                {feature.description}
              </p>

              {/* Large card extra content */}
              {feature.size === "large" && (
                <div className="mt-6 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-2 text-sm text-amber-500">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    Active & Deployed
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Small Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          {smallFeatures.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-5 py-3 glass-card"
            >
              <item.icon className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-medium">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
