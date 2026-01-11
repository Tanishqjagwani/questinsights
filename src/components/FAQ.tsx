"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What types of AI solutions do you build?",
    answer: "We specialize in a wide range of AI solutions including custom LLM development, AI agents, RAG systems, predictive analytics, computer vision applications, NLP solutions, and ML model fine-tuning. Each solution is tailored to your specific business needs and industry requirements.",
  },
  {
    question: "How long does a typical AI project take?",
    answer: "Project timelines vary based on complexity. A simple MVP can be delivered in 4-6 weeks, while more complex enterprise solutions may take 3-6 months. We follow agile methodologies with regular sprints and demos to ensure you see progress throughout the development cycle.",
  },
  {
    question: "Do you offer ongoing support after deployment?",
    answer: "Absolutely! We provide comprehensive post-deployment support including model monitoring, performance optimization, bug fixes, and feature enhancements. Our support plans range from basic email support to 24/7 dedicated assistance with guaranteed SLAs.",
  },
  {
    question: "Can you integrate AI solutions with our existing systems?",
    answer: "Yes, we specialize in seamless integration with existing tech stacks. Whether it's connecting to your CRM, ERP, databases, or third-party APIs, we ensure our AI solutions work harmoniously with your current infrastructure with minimal disruption.",
  },
  {
    question: "How do you ensure data security and privacy?",
    answer: "Security is paramount in our development process. We implement enterprise-grade encryption, follow SOC 2 compliance standards, offer on-premise deployment options, and sign comprehensive NDAs. Your data never leaves your control, and we can work within your existing security frameworks.",
  },
  {
    question: "What industries do you work with?",
    answer: "We work across diverse industries including fintech, healthcare, e-commerce, manufacturing, logistics, legal tech, and more. Our team has deep domain expertise in multiple sectors, allowing us to build AI solutions that truly understand industry-specific challenges and opportunities.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="gradient-blob w-[500px] h-[500px] bg-violet-500/10 top-0 left-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-6">
            <HelpCircle className="w-4 h-4 text-amber-500" />
            FAQ
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 font-[family-name:var(--font-display)]">
            Common <span className="gradient-text">Questions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-zinc-400">
            Get answers to frequently asked questions about our AI development 
            services and how we can help your business.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
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
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    openIndex === index
                      ? "bg-amber-500 text-black"
                      : "bg-white/5 text-white"
                  }`}
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-zinc-400 mb-4">
            Still have questions? We&apos;re here to help.
          </p>
          <a
            href="mailto:hello@genieaistaxk.com"
            className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-medium transition-colors"
          >
            Contact our team
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

