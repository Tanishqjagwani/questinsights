"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Users, ExternalLink } from "lucide-react";
import Link from "next/link";

const team = [
  {
    name: "Shivam",
    role: "Founder & CEO",
    bio: "Visionary leader driving AI innovation and company strategy. Passionate about building products that transform industries.",
    linkedin: "https://www.linkedin.com/in/shivam274/",
    github: "https://github.com/shivam274",
    avatar: "S",
    bgColor: "from-amber-400 to-orange-500",
    quote: "Building the future, one AI at a time.",
  },
  {
    name: "Tanishq Jagwani",
    role: "Co-Founder",
    bio: "Strategic thinker and execution expert. Bridges the gap between technical innovation and business growth.",
    linkedin: "https://www.linkedin.com/in/tanishq-jagwani-569687193/",
    github: "https://github.com/tanishqjagwani",
    avatar: "TJ",
    bgColor: "from-pink-400 to-rose-500",
    quote: "Innovation meets execution.",
  },
  {
    name: "Rishabh",
    role: "Chief Technology Officer",
    bio: "Technical architect leading our engineering excellence. Expert in ML systems, scalable infrastructure, and cutting-edge AI research.",
    linkedin: "https://www.linkedin.com/in/rishabh5301/",
    github: "https://github.com/rishabh5301",
    avatar: "R",
    bgColor: "from-violet-400 to-purple-500",
    quote: "Architecting intelligence at scale.",
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="gradient-blob w-[500px] h-[500px] bg-violet-500/10 top-0 right-0" />
      <div className="gradient-blob w-[500px] h-[500px] bg-amber-500/10 bottom-0 left-0" />

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
            <Users className="w-4 h-4 text-amber-500" />
            Our Team
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 font-[family-name:var(--font-display)]">
            Meet the <span className="gradient-text-pink">Visionaries</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-zinc-400">
            The minds behind GenieAI Staxk — passionate about pushing the 
            boundaries of what&apos;s possible with artificial intelligence.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="glass-card p-8 h-full relative overflow-hidden">
                {/* Gradient Accent */}
                <div
                  className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${member.bgColor} opacity-5 blur-3xl group-hover:opacity-15 transition-opacity duration-500`}
                />

                {/* Avatar */}
                <div className="relative mb-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${member.bgColor} flex items-center justify-center text-white font-bold text-3xl shadow-2xl`}
                  >
                    {member.avatar}
                  </motion.div>
                  <div
                    className={`absolute inset-0 w-24 h-24 rounded-3xl bg-gradient-to-br ${member.bgColor} opacity-50 blur-2xl`}
                  />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-amber-500 font-medium mb-4">{member.role}</p>
                  <p className="text-zinc-400 leading-relaxed mb-6">{member.bio}</p>
                  
                  {/* Quote */}
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5 mb-6">
                    <p className="text-sm text-zinc-300 italic">&ldquo;{member.quote}&rdquo;</p>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-3">
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#0077B5]/10 text-[#0077B5] rounded-xl hover:bg-[#0077B5]/20 transition-colors group/link"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="text-sm font-medium">LinkedIn</span>
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </Link>
                    <Link
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 text-zinc-300 rounded-xl hover:bg-white/10 hover:text-white transition-colors group/link"
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm font-medium">GitHub</span>
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Founder's Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            <div className="gradient-blob w-[400px] h-[400px] bg-amber-500/20 -top-32 -right-32" />
            
            <div className="relative">
              {/* Label */}
              <div className="text-xs uppercase tracking-wider text-amber-500 mb-6">Founder&apos;s Note</div>
              
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-2xl">
                    S
                  </div>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-light text-zinc-300 leading-relaxed mb-6 font-[family-name:var(--font-display)]">
                    &ldquo;We gather your requirements. We understand your target audience & how your product can stand out from the crowd. Best part is we also help you with Solutions.&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-white">Shivam</span>
                    <span className="text-zinc-500">•</span>
                    <span className="text-amber-500">Co-founder & CEO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
