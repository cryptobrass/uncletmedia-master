import { createFileRoute } from "@tanstack/react-router";
import { LayoutTemplate, Rocket, ShoppingBag, Briefcase, Camera, Sparkles } from "lucide-react";
import { Hero, CardGrid } from "@/components/site";

export const Route = createFileRoute("/templates")({
  head: () => ({
    meta: [
      { title: "Templates — Uncle T Media" },
      { name: "description", content: "Futuristic templates crafted with AI, ready to launch." },
      { property: "og:title", content: "Templates — Uncle T Media" },
      { property: "og:description", content: "Futuristic templates crafted with AI, ready to launch." },
    ],
  }),
  component: Page,
});

const items = [
  { icon: LayoutTemplate, title: "Landing Pro", desc: "High-converting landing page with neon accents.", tag: "New" },
  { icon: Rocket, title: "Startup Launch", desc: "Pitch your product with a sleek launch site.", tag: "" },
  { icon: ShoppingBag, title: "Nova Store", desc: "E-commerce template with smart product grids.", tag: "" },
  { icon: Briefcase, title: "Agency Grid", desc: "Showcase services and case studies.", tag: "" },
  { icon: Camera, title: "Portfolio X", desc: "Minimal portfolio for creators.", tag: "Popular" },
  { icon: Sparkles, title: "AI SaaS", desc: "Dashboard-ready template for AI products.", tag: "" },
];

function Page() {
  return (
    <>
      <Hero eyebrow="AI TEMPLATES" title={<span className="text-gradient">Templates</span>} subtitle="Futuristic templates crafted with AI, ready to launch." />
      <CardGrid items={items} />
    </>
  );
}
