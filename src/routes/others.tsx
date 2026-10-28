import { createFileRoute } from "@tanstack/react-router";
import { Mic, Handshake, Mail, Calendar, Award, HelpCircle } from "lucide-react";
import { Hero, CardGrid } from "@/components/site";

export const Route = createFileRoute("/others")({
  head: () => ({
    meta: [
      { title: "Others — Uncle T Media" },
      { name: "description", content: "Everything else from the Uncle T Media universe." },
      { property: "og:title", content: "Others — Uncle T Media" },
      { property: "og:description", content: "Everything else from the Uncle T Media universe." },
    ],
  }),
  component: Page,
});

const items = [
  { icon: Mic, title: "Podcast", desc: "Conversations with makers and innovators.", tag: "" },
  { icon: Handshake, title: "Partnerships", desc: "Collaborate with Uncle T Media.", tag: "" },
  { icon: Mail, title: "Newsletter", desc: "Fresh insights delivered to your inbox.", tag: "" },
  { icon: Calendar, title: "Events", desc: "Workshops, webinars and meetups.", tag: "" },
  { icon: Award, title: "Showcase", desc: "Projects built by our community.", tag: "" },
  { icon: HelpCircle, title: "Support", desc: "Answers to frequently asked questions.", tag: "" },
];

function Page() {
  return (
    <>
      <Hero eyebrow="MORE" title={<span className="text-gradient">Others</span>} subtitle="Everything else from the Uncle T Media universe." />
      <CardGrid items={items} />
    </>
  );
}
