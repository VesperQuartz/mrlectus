import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import {
  IoAddOutline,
  IoCopyOutline,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoGlobeOutline,
} from "react-icons/io5";
import { useState } from "react";
import { Link } from "@tanstack/react-router";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="pt-8 pb-4">
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let's work together.
        </motion.h2>
        <motion.p
          className="text-muted-foreground mb-8 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          Creating user experience and visual appealing design
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
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

      {/* Follow Me Section */}
      <motion.div
        className="bg-card border border-border rounded-2xl p-4 flex items-center justify-between"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
          <h3 className="font-medium">Follow Me</h3>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={personalInfo.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:text-foreground hover:bg-secondary transition-all border border-border"
          >
            <IoLogoTwitter
              size={18}
              className="hover:text-foreground transition-colors"
            />
          </a>
          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:text-foreground hover:bg-secondary transition-all border border-border"
            aria-label="Instagram"
          >
            <IoLogoInstagram
              size={18}
              className="hover:text-foreground transition-colors"
            />
          </button>
          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:text-foreground hover:bg-secondary transition-all border border-border"
            aria-label="Website"
          >
            <IoGlobeOutline
              size={18}
              className="hover:text-foreground transition-colors"
            />
          </button>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:text-foreground hover:bg-secondary transition-all border border-border"
          >
            <IoLogoLinkedin
              size={18}
              className="hover:text-foreground transition-colors"
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
