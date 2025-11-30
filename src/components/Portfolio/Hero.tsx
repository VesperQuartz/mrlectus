import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { IoAddOutline, IoCopyOutline } from "react-icons/io5";
import { useState } from "react";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-4 pb-12 border-b border-border">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Status Badge Row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center md:justify-start gap-3 mb-6"
          >
            <span className="text-muted-foreground font-medium">
              {personalInfo.title}
            </span>
            <div className="flex items-center gap-1.5 bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for work
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            I'm {personalInfo.name}
          </motion.h1>

          <motion.p
            className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-md mx-auto md:mx-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {personalInfo.title} from {personalInfo.location}.{" "}
            {personalInfo.bio}
          </motion.p>

          <motion.div
            className="flex items-center justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/hire">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 h-11 rounded-xl border border-border transition-all flex items-center gap-2 font-medium">
                <IoAddOutline size={16} />
                Hire Me
              </Button>
            </Link>
            <Button
              onClick={handleCopy}
              className="bg-secondary hover:bg-muted text-secondary-foreground px-5 py-2.5 h-11 rounded-xl border border-border transition-all flex items-center gap-2 font-medium"
            >
              <IoCopyOutline size={16} />
              {copied ? "Copied!" : "Copy Email"}
            </Button>
          </motion.div>
        </div>

        {/* Right Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative w-40 h-40 md:w-48 md:h-48 shrink-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-muted to-transparent rounded-full opacity-50" />
          {/* biome-ignore lint/performance/noImgElement: Using standard HTML img tag */}
          <img
            src="https://avatar.vercel.sh/waheed?size=200"
            alt="Profile"
            className="w-full h-full rounded-full object-cover border-4 border-background shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
