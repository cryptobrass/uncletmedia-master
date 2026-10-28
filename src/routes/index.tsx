import { createFileRoute, Link } from "@tanstack/react-router";
import { Zap, ShieldCheck, Cpu, Bot, Activity, Users } from "lucide-react";
import { Hero, CardGrid } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Uncle T Media — AI-Powered Digital Media" },
      { name: "description", content: "Futuristic, AI-powered templates, blogs and resources from Uncle T Media." },
      { property: "og:title", content: "Uncle T Media — AI-Powered Digital Media" },
      { property: "og:description", content: "Futuristic, AI-powered templates, blogs and resources." },
    ],
  }),
  component: Index,
});

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "Optimized performance tuned by intelligent systems." },
  { icon: ShieldCheck, title: "Secure & Reliable", desc: "Enterprise-grade security protecting your data." },
  { icon: Cpu, title: "AI-Driven Design", desc: "Layouts generated and refined with machine intelligence." },
  { icon: Bot, title: "Smart Automation", desc: "Let AI handle the repetitive work while you create." },
  { icon: Activity, title: "Analytics", desc: "Real-time insights for data-driven decisions." },
  { icon: Users, title: "Team Collaboration", desc: "Work together seamlessly across every project." },
];

function Index() {
  return (
    <>
      <Hero
        eyebrow="THE FUTURE OF MEDIA"
        title={<>Transform Your <span className="text-gradient">Digital Presence</span></>}
        subtitle="Elevate your brand with AI-powered templates, insights and resources built for the next generation of the web."
      >
        <Link to="/templates" className="rounded-lg bg-gradient-primary px-7 py-3 font-semibold text-primary-foreground shadow-glow">
          Explore Templates
        </Link>
        <Link to="/blog" className="rounded-lg border border-border bg-card/60 px-7 py-3 font-semibold backdrop-blur">
          Read the Blog
        </Link>
      </Hero>
      <CardGrid items={features} />
    </>
  );
}
