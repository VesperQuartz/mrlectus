import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio"; // Import personalInfo

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h2 className="text-xl font-semibold text-foreground mb-4">
              About
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-8"
          >
            <p className="text-2xl md:text-3xl font-light text-foreground leading-tight">
              I'm {personalInfo.name}, a {personalInfo.title} with over 5 years
              of experience crafting purposeful digital products.
            </p>
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>{personalInfo.bio}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
