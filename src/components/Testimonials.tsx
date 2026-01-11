"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    content: "GenieAI Staxk transformed our entire data pipeline. Their AI solutions reduced our processing time by 80%.",
    author: "Sarah Chen",
    role: "CTO, TechFlow Inc.",
    rating: 5,
    avatar: "SC",
    bgColor: "from-amber-400 to-orange-500",
  },
  {
    content: "Working with the GenieAI team was incredible. They understood our vision and delivered beyond expectations.",
    author: "Marcus Johnson",
    role: "VP Engineering, DataCore",
    rating: 5,
    avatar: "MJ",
    bgColor: "from-pink-400 to-rose-500",
  },
  {
    content: "The RAG system they built handles complex queries with remarkable accuracy. Support efficiency improved 3x!",
    author: "Emily Rodriguez",
    role: "Product Director, SupportAI",
    rating: 5,
    avatar: "ER",
    bgColor: "from-violet-400 to-purple-500",
  },
  {
    content: "Pure brilliance! The AI agents they developed have streamlined our workflow massively.",
    author: "David Kim",
    role: "Founder, AutomateNow",
    rating: 4.8,
    avatar: "DK",
    bgColor: "from-cyan-400 to-blue-500",
  },
  {
    content: "Incredible design and functionality! The predictive analytics dashboard is essential to our decisions.",
    author: "Lisa Thompson",
    role: "Head of Analytics, InsightCorp",
    rating: 5,
    avatar: "LT",
    bgColor: "from-emerald-400 to-teal-500",
  },
  {
    content: "A top-notch solution! Their LLM fine-tuning expertise created an AI that truly understands our industry.",
    author: "James Wilson",
    role: "CEO, FinanceAI",
    rating: 5,
    avatar: "JW",
    bgColor: "from-orange-400 to-red-500",
  },
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ scale: 1.02, y: -5 }}
    className="glass-card p-6 md:p-8 group relative min-w-[320px] md:min-w-[380px] flex-shrink-0"
  >
    {/* Quote Icon */}
    <Quote className="absolute top-4 right-4 md:top-6 md:right-6 w-6 h-6 md:w-8 md:h-8 text-white/5 group-hover:text-amber-500/20 transition-colors" />

    {/* Rating */}
    <div className="flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`w-4 h-4 ${i < Math.floor(testimonial.rating) ? 'text-amber-500 fill-current' : 'text-zinc-600'}`} 
        />
      ))}
      <span className="ml-2 text-sm text-zinc-500">{testimonial.rating}</span>
    </div>

    {/* Content */}
    <p className="text-zinc-300 leading-relaxed mb-6 text-sm md:text-base">
      &ldquo;{testimonial.content}&rdquo;
    </p>

    {/* Author */}
    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
      <div
        className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${testimonial.bgColor} flex items-center justify-center text-white font-bold text-xs md:text-sm`}
      >
        {testimonial.avatar}
      </div>
      <div>
        <div className="font-semibold text-white text-sm md:text-base">{testimonial.author}</div>
        <div className="text-xs md:text-sm text-zinc-500">{testimonial.role}</div>
      </div>
    </div>
  </motion.div>
);

export default function Testimonials() {
  // Split testimonials into two rows for horizontal scroll
  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="gradient-blob w-[600px] h-[600px] bg-amber-500/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

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
            <Quote className="w-4 h-4 text-amber-500" />
            Wall of Love
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 font-[family-name:var(--font-display)]">
            Loved by <span className="gradient-text">Thinkers</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-zinc-400">
            Here&apos;s what people worldwide are saying about us
          </p>
        </motion.div>

        {/* Horizontal Scrolling Testimonials - Row 1 */}
        <div className="relative mb-6 overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />
          
          <motion.div 
            className="flex gap-6 px-6"
            animate={{ x: [0, -50 * row1.length + '%'] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {[...row1, ...row1, ...row1].map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index % 3} />
            ))}
          </motion.div>
        </div>

        {/* Horizontal Scrolling Testimonials - Row 2 (reverse direction) */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />
          
          <motion.div 
            className="flex gap-6 px-6"
            animate={{ x: [-50 * row2.length + '%', 0] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {[...row2, ...row2, ...row2].map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index % 3} />
            ))}
          </motion.div>
        </div>

        {/* Social Proof Counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex items-center justify-center gap-6 px-6"
        >
          <div className="flex -space-x-3">
            {testimonials.slice(0, 4).map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.bgColor} border-2 border-[#050505] flex items-center justify-center text-white text-xs font-bold`}
              >
                {t.avatar}
              </motion.div>
            ))}
          </div>
          <div className="text-left">
            <div className="flex items-center gap-2">
              <span className="text-sm text-zinc-400">Join</span>
              <span className="text-xl font-bold text-white">1,000+</span>
              <span className="text-sm text-zinc-400">other loving customers</span>
            </div>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-5xl mx-auto px-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 p-8 glass-card">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-1">500+</div>
              <div className="text-sm text-zinc-500">Projects Delivered</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/10" />
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-1">98%</div>
              <div className="text-sm text-zinc-500">Client Satisfaction</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/10" />
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-1">24/7</div>
              <div className="text-sm text-zinc-500">Support Available</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/10" />
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-1">50+</div>
              <div className="text-sm text-zinc-500">AI Models Deployed</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
