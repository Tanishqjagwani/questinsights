import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GenieAI Staxk | AI-Powered Solutions for the Future",
  description: "Build, scale, and innovate with GenieAI Staxk. We transform ideas into powerful AI-driven products that shape the future of technology.",
  keywords: ["AI", "Machine Learning", "Startup", "Technology", "Innovation", "SaaS"],
  authors: [
    { name: "Shivam", url: "https://www.linkedin.com/in/shivam274/" },
    { name: "Tanishq Jagwani", url: "https://www.linkedin.com/in/tanishq-jagwani-569687193/" },
    { name: "Rishabh", url: "https://www.linkedin.com/in/rishabh5301/" },
  ],
  openGraph: {
    title: "GenieAI Staxk | AI-Powered Solutions for the Future",
    description: "Build, scale, and innovate with GenieAI Staxk. We transform ideas into powerful AI-driven products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
