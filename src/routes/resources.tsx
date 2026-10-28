import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Download, Wrench, Palette, Video, Code } from "lucide-react";
import { Hero, CardGrid } from "@/components/site";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Uncle T Media" },
      { name: "description", content: "Guides, tools and assets to power your next project." },
      { property: "og:title", content: "Resources — Uncle T Media" },
      { property: "og:description", content: "Guides, tools and assets to power your next project." },
    ],
  }),
  component: Page,
});

const items = [
  { icon: BookOpen, title: "Guides", desc: "Step-by-step tutorials for builders.", tag: "" },
  { icon: Download, title: "Free Assets", desc: "Icons, mockups and graphics to download.", tag: "" },
  { icon: Wrench, title: "AI Tools", desc: "Our curated list of favorite AI tools.", tag: "" },
  { icon: Palette, title: "Brand Kits", desc: "Color and type systems ready to use.", tag: "" },
  { icon: Video, title: "Video Courses", desc: "Learn media production from experts.", tag: "" },
  { icon: Code, title: "Snippets", desc: "Copy-paste code for common features.", tag: "" },
];

function Page() {
  return (
    <>
      <Hero eyebrow="TOOLKIT" title={<span className="text-gradient">Resources</span>} subtitle="Guides, tools and assets to power your next project." />
      <CardGrid items={items} />
    </>
  );
}
