"use client";

import { motion } from "framer-motion";
import { Sparkles, Linkedin, Twitter, Github, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  company: [
    { label: "About Us", href: "#team" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
  ],
  services: [
    { label: "AI Development", href: "#features" },
    { label: "ML Solutions", href: "#features" },
    { label: "Consulting", href: "#" },
    { label: "Enterprise", href: "#pricing" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Support", href: "#faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Security", href: "#" },
  ],
};

const socialLinks = [
  { 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/shivam274/", 
    label: "LinkedIn",
    color: "hover:text-[#0077B5]"
  },
  { 
    icon: Twitter, 
    href: "#", 
    label: "Twitter",
    color: "hover:text-[#1DA1F2]"
  },
  { 
    icon: Github, 
    href: "https://github.com/genieaistaxk", 
    label: "GitHub",
    color: "hover:text-white"
  },
];

const teamLinks = [
  {
    name: "Shivam",
    role: "Founder",
    linkedin: "https://www.linkedin.com/in/shivam274/",
    github: "https://github.com/shivam274",
  },
  {
    name: "Tanishq Jagwani",
    role: "Co-Founder",
    linkedin: "https://www.linkedin.com/in/tanishq-jagwani-569687193/",
    github: "https://github.com/tanishqjagwani",
  },
  {
    name: "Rishabh",
    role: "CTO",
    linkedin: "https://www.linkedin.com/in/rishabh5301/",
    github: "https://github.com/rishabh5301",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-pink-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight">
                GenieAI<span className="text-amber-500">Staxk</span>
              </span>
            </Link>
            <p className="text-zinc-400 mb-6 max-w-sm leading-relaxed">
              Building the future with AI innovation. We transform ambitious ideas 
              into powerful AI-driven products that shape tomorrow.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-zinc-400">
              <a href="mailto:hello@genieaistaxk.com" className="flex items-center gap-3 hover:text-amber-500 transition-colors">
                <Mail className="w-4 h-4" />
                hello@genieaistaxk.com
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                India
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-white/5 rounded-xl text-zinc-400 transition-all hover:bg-white/10 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Team LinkedIn & GitHub Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-8 border-t border-white/5"
        >
          <p className="text-center text-sm text-zinc-500 mb-6">Connect with our founding team</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {teamLinks.map((member, i) => (
              <div key={i} className="flex items-center gap-2">
                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl text-sm text-zinc-300 hover:text-[#0077B5] hover:bg-white/10 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  {member.name} ({member.role})
                </Link>
                <Link
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                  aria-label={`${member.name}'s GitHub`}
                >
                  <Github className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contribution Note - Like LanderX */}
        <div className="py-6 border-t border-white/5 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full text-sm text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            GenieAI Staxk contributes 5% of revenue to AI ethics research
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-500">
              © {currentYear} GenieAI Staxk. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-zinc-500">
              <span>Built with 💛 by the GenieAI Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
