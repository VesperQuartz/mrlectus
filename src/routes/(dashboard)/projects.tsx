import { createFileRoute } from "@tanstack/react-router";
import { ProjectsSection } from "@/components/Portfolio/ProjectsSection";
import { ContactSection } from "@/components/Portfolio/ContactSection";
import { motion } from "framer-motion";

export const Route = createFileRoute("/(dashboard)/projects")({
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-12 pt-8"
    >
      <ProjectsSection />
      <ContactSection />
    </motion.div>
  );
}
