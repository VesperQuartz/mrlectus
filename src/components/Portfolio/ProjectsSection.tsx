import { featuredProjects } from "@/data/portfolio";
import { motion } from "framer-motion";
import { IoChevronForwardOutline } from "react-icons/io5";

export function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-border pb-12">
      <div className="mb-6 px-2">
        <div className="flex items-center gap-3 text-muted-foreground mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
          <h2 className="font-medium text-sm uppercase">Projects</h2>
        </div>
        <h3 className="text-3xl font-bold text-foreground mb-3">My Works</h3>
        <p className="text-muted-foreground text-base leading-relaxed max-w-md">
          Discover my portfolio, where purposeful interfaces meet captivating
          design. My work strives to enhance experiences and inspire.
        </p>
      </div>

      <div className="space-y-3">
        {featuredProjects.slice(0, 5).map(
          (
            project,
            index, // Showing 5 projects as in screenshot
          ) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card hover:bg-secondary border border-border p-4 rounded-2xl cursor-pointer transition-all flex items-center justify-between gap-4"
              onClick={() => window.open(project.liveUrl, "_blank")}
            >
              <div className="flex items-center gap-4">
                {/* Icon Placeholder */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shrink-0 ${
                    index === 0
                      ? "bg-purple-500/20 text-purple-400"
                      : index === 1
                        ? "bg-blue-500/20 text-blue-400"
                        : index === 2
                          ? "bg-orange-500/20 text-orange-400"
                          : index === 3
                            ? "bg-sky-500/20 text-sky-400"
                            : "bg-gray-500/20 text-gray-400"
                  }`}
                >
                  {project.title.charAt(0)}
                </div>

                <div>
                  <h3 className="text-foreground font-semibold text-base mb-0.5">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.category.charAt(0).toUpperCase() +
                      project.category.slice(1)}
                    <span className="mx-1.5">•</span>
                    {project.technologies[0]}
                  </p>
                </div>
              </div>

              <IoChevronForwardOutline
                size={20}
                className="text-muted-foreground group-hover:text-foreground transition-colors"
              />
            </motion.div>
          ),
        )}
      </div>
    </section>
  );
}
