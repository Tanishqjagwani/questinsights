"use client";

import { motion } from "framer-motion";
import { Puzzle, Bot, FileText, Linkedin, Twitter, Database, Cloud, Code2 } from "lucide-react";

const integrations = [
  {
    name: "GPT Models",
    description: "Generate content and build intelligent agents with OpenAI integration.",
    icon: Bot,
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "Data Platforms",
    description: "Connect seamlessly with your existing databases and data warehouses.",
    icon: Database,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "LinkedIn",
    description: "Connect with LinkedIn and dozens of other professional tools.",
    icon: Linkedin,
    color: "from-[#0077B5] to-[#00A0DC]",
  },
  {
    name: "Cloud Services",
    description: "Deploy on AWS, GCP, Azure, or your preferred cloud platform.",
    icon: Cloud,
    color: "from-orange-500 to-amber-500",
  },
  {
    name: "Custom APIs",
    description: "Build and integrate custom APIs tailored to your business needs.",
    icon: Code2,
    color: "from-violet-500 to-purple-500",
  },
  {
    name: "Documentation",
    description: "Auto-generate and maintain comprehensive documentation.",
    icon: FileText,
    color: "from-pink-500 to-rose-500",
  },
];

export default function Integrations() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="gradient-blob w-[600px] h-[600px] bg-cyan-500/10 top-0 right-0" />
      <div className="gradient-blob w-[500px] h-[500px] bg-violet-500/10 bottom-0 left-0" />

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
            <Puzzle className="w-4 h-4 text-amber-500" />
            Integrations
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 font-[family-name:var(--font-display)]">
            Seamless <span className="gradient-text">Integrations</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-zinc-400">
            Connect with your favorite tools and platforms to streamline workflows
          </p>
        </motion.div>

        {/* Integrations Grid */}
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
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card p-6 group cursor-pointer"
            >
              {/* Icon */}
              <div className="relative mb-4">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${integration.color} flex items-center justify-center`}
                >
                  <integration.icon className="w-7 h-7 text-white" />
                </motion.div>
                <div className={`absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${integration.color} opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-300`} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold mb-2 group-hover:text-amber-500 transition-colors">
                {integration.name}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {integration.description}
              </p>

              {/* Arrow indicator */}
              <div className="mt-4 flex items-center gap-2 text-sm text-zinc-500 group-hover:text-amber-500 transition-colors">
                <span>Learn more</span>
                <svg 
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scrolling Integration Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="relative overflow-hidden py-8">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />
            
            <div className="flex animate-marquee">
              {[...integrations, ...integrations].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 mx-6 px-6 py-3 bg-white/5 border border-white/10 rounded-full whitespace-nowrap"
                >
                  <item.icon className="w-5 h-5 text-amber-500" />
                  <span className="text-sm font-medium text-zinc-300">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

