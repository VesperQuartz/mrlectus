import { Button } from "@/components/ui/button";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import {
  IoAddOutline,
  IoBriefcaseOutline,
  IoHomeOutline,
  IoMoonOutline,
  IoPersonOutline,
  IoSunnyOutline,
} from "react-icons/io5";
import { useState, useEffect } from "react";

export function Navigation() {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: "Home", to: "/", icon: IoHomeOutline },
    { name: "About", to: "/about", icon: IoPersonOutline },
    { name: "Projects", to: "/projects", icon: IoBriefcaseOutline },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[680px] h-14 bg-background/80 backdrop-blur-md border border-border rounded-full flex items-center justify-between px-2 shadow-xl relative transition-colors duration-300"
      >
        {/* Left: Navigation Icons */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              location.pathname === item.to ||
              (item.to !== "/" && location.pathname.startsWith(item.to));
            const isHovered = hoveredTab === item.name;

            return (
              <div key={item.name} className="relative group">
                {/* Tooltip */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.8 }}
                      animate={{ opacity: 1, y: 8, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-[10px] font-medium px-2 py-1 rounded-md border border-border whitespace-nowrap z-50"
                    >
                      {item.name}
                      {/* Tiny Arrow */}
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-secondary border-t border-l border-border rotate-45" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link
                  to={item.to}
                  onMouseEnter={() => setHoveredTab(item.name)}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 relative`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-muted rounded-full border border-border"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <Icon
                    size={20}
                    className={`relative z-10 transition-colors duration-300 ${!isActive ? "text-muted-foreground hover:text-foreground" : "text-foreground"}`}
                  />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 pr-2">
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-10 h-10 flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            aria-label="Toggle Theme"
          >
            {mounted && theme === "light" ? (
              <IoSunnyOutline size={20} />
            ) : (
              <IoMoonOutline size={20} />
            )}
          </button>

          <Link to="/hire">
            <Button className="bg-secondary hover:bg-muted text-secondary-foreground text-xs font-medium px-4 py-2 h-9 rounded-full border border-border transition-all flex items-center gap-2">
              <IoAddOutline size={14} />
              Hire Me
            </Button>
          </Link>
        </div>
      </motion.nav>
    </div>
  );
}
