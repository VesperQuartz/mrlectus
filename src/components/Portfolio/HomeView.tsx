import { ContactSection } from "@/components/Portfolio/ContactSection";
import { Hero } from "@/components/Portfolio/Hero";
import { ProjectsSection } from "@/components/Portfolio/ProjectsSection";
import { motion } from "framer-motion";
// import { ProductsSection } from "@/components/Portfolio/ProductsSection"; // Removed

export function HomeView() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-12"
    >
      <div id="home">
        <Hero />
      </div>
      <ProjectsSection />
      {/* <ProductsSection /> */}
      <ContactSection />
    </motion.div>
  );
}
