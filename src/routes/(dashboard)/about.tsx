import { createFileRoute } from "@tanstack/react-router";
import { AboutView } from "@/components/Portfolio/AboutView";
import { ContactSection } from "@/components/Portfolio/ContactSection";

export const Route = createFileRoute("/(dashboard)/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <AboutView />
      <ContactSection />
    </>
  );
}
