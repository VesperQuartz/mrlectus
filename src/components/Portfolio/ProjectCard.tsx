import { motion } from "framer-motion";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const categoryColors = {
    blockchain:
      "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    fintech:
      "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
    healthcare: "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300",
    social:
      "bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
    analytics:
      "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 group">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <Badge className={categoryColors[project.category]}>
                {project.category}
              </Badge>
              <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                {project.title}
              </CardTitle>
            </div>
          </div>
          <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Project Image Placeholder */}
          <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-600">
            <span className="text-gray-700 dark:text-gray-200 text-lg font-semibold">
              {project.title}
            </span>
          </div>

          {/* Features */}
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
              Key Features:
            </h4>
            <ul className="space-y-1">
              {project.features.slice(0, 3).map((feature, _idx) => (
                <li
                  key={feature}
                  className="text-sm text-gray-600 dark:text-gray-300 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
              Technologies:
            </h4>
            <div className="flex flex-wrap gap-1">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant="secondary" className="text-xs">
                  +{project.technologies.length - 4} more
                </Badge>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-4">
            {project.liveUrl && (
              <Button
                size="sm"
                className="bg-gray-900 hover:bg-gray-800 text-white"
                onClick={() => window.open(project.liveUrl, "_blank")}
              >
                <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-1" />
                Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button
                size="sm"
                variant="outline"
                onClick={() => window.open(project.githubUrl, "_blank")}
              >
                <CodeBracketIcon className="w-4 h-4 mr-1" />
                Code
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
