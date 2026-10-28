import { createFileRoute } from "@tanstack/react-router";
import { Newspaper, Brain, TrendingUp, PenTool, Globe, Lightbulb } from "lucide-react";
import { Hero, CardGrid } from "@/components/site";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Uncle T Media" },
      { name: "description", content: "Stories and ideas on AI, media and the future of the web." },
      { property: "og:title", content: "Blog — Uncle T Media" },
      { property: "og:description", content: "Stories and ideas on AI, media and the future of the web." },
    ],
  }),
  component: Page,
});

const items = [
  { icon: Brain, title: "How AI Is Reshaping Media", desc: "Exploring the tools changing content creation.", tag: "5 min" },
  { icon: TrendingUp, title: "Design Trends for 2027", desc: "Glassmorphism, grids and glowing gradients.", tag: "4 min" },
  { icon: PenTool, title: "Writing With AI", desc: "Workflows for creators using language models.", tag: "6 min" },
  { icon: Globe, title: "Building a Global Brand", desc: "Reach audiences everywhere with smart media.", tag: "3 min" },
  { icon: Lightbulb, title: "Ideas to Launch", desc: "Turning a concept into a live product fast.", tag: "7 min" },
  { icon: Newspaper, title: "Uncle T Weekly", desc: "Our roundup of the week in tech.", tag: "2 min" },
];

function Page() {
  return (
    <>
      <Hero eyebrow="INSIGHTS" title={<span className="text-gradient">Blog</span>} subtitle="Stories and ideas on AI, media and the future of the web." />
      <CardGrid items={items} />
    </>
  );
}
