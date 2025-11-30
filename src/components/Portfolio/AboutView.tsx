import { IoArrowForwardOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { featuredProjects, personalInfo } from "@/data/portfolio";

export function AboutView() {
  // Use the first 3 projects from featuredProjects as side projects
  const sideProjects = featuredProjects.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-8 pb-4 space-y-12"
    >
      {/* Header */}
      <div className="flex items-center gap-3 text-muted-foreground mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
        <h2 className="font-medium">About</h2>
      </div>

      <section>
        <h1 className="text-4xl font-bold text-foreground mb-6">
          It's Me {personalInfo.name.split(" ")[0]}
        </h1>
        <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl">
          I'm {personalInfo.name}, a {personalInfo.title} with over 5 years of
          experience, currently residing in {personalInfo.location}.{" "}
          {personalInfo.bio}
        </p>
      </section>

      {/* Photo */}
      <section className="aspect-[4/3] md:aspect-square w-full max-w-md mx-auto bg-muted rounded-3xl overflow-hidden relative shadow-2xl border border-border flex items-center justify-center text-muted-foreground">
        <span className="text-xl font-medium">Placeholder Image</span>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">
          More About Me
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            {personalInfo.name} holds a bachelor's degree in Graphic Design from
            a prestigious university in the United States and has a relentless
            drive for staying up-to-date with the latest technologies and design
            trends. Actively involved in the design community, he regularly
            participates in diverse design conferences and meetups.
          </p>
          <p>
            When he's not immersed in design work, he finds solace in playing
            the guitar and exploring new coffee shops in his local area. He
            firmly believes in maintaining a healthy work-life balance, making
            sure to take breaks and reenergize his creativity. In his spare
            time, he also volunteers at a local animal shelter on weekends.
          </p>
        </div>
      </section>

      <section className="border-t border-border pt-12">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          My Side Projects
        </h2>
        <p className="text-muted-foreground mb-6">
          I did passion side projects in the weekend, please take a look you
          will love it (i hope).
        </p>

        <div className="space-y-3">
          {sideProjects.map((project, index) => (
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
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold border border-border shrink-0 ${
                    index === 0
                      ? "bg-purple-500/20 text-purple-400"
                      : index === 1
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-orange-500/20 text-orange-400"
                  }`}
                >
                  {project.title.charAt(0)}
                </div>

                <h3 className="text-foreground font-semibold text-base">
                  {project.title}
                </h3>
              </div>

              <div className="flex items-center gap-4">
                <span className="hidden sm:block px-3 py-1 bg-muted rounded-full text-[10px] font-medium text-muted-foreground tracking-wider border border-border">
                  {project.category.toUpperCase()}
                </span>
                <IoArrowForwardOutline
                  size={18}
                  className="text-muted-foreground group-hover:text-foreground transition-colors rotate-[-45deg]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Redundant footer removed */}
    </motion.div>
  );
}
