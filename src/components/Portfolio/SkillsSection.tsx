import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: skills.frontend,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend",
      skills: skills.backend,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Blockchain",
      skills: skills.blockchain,
      color: "from-purple-500 to-violet-500",
    },
    {
      title: "Tools & Others",
      skills: skills.tools,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color} mr-3`}
                ></div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                  >
                    <Badge
                      variant="secondary"
                      className="hover:scale-105 transition-transform cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
