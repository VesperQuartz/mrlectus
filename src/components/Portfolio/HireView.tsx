import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { personalInfo } from "@/data/portfolio";
import { motion } from "framer-motion";
import {
  IoGlobeOutline,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";

export function HireView() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-8 pb-4 space-y-8"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center gap-3 text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
          <h2 className="font-medium">Hire Me</h2>
        </div>
        <div className="flex items-center gap-1.5 bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Available for work
        </div>
      </div>

      <section className="mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Design Inquiry
        </h1>
        <p className="text-muted-foreground text-lg">
          Got an idea and need design help? Reach out now
        </p>
      </section>

      <form className="space-y-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="text"
            placeholder="Name"
            className="bg-secondary border-border text-foreground placeholder:text-muted-foreground/60 h-12 rounded-xl px-4 focus-visible:ring-1 focus-visible:ring-ring"
          />
          <Input
            type="email"
            placeholder="Email Address"
            className="bg-secondary border-border text-foreground placeholder:text-muted-foreground/60 h-12 rounded-xl px-4 focus-visible:ring-1 focus-visible:ring-ring"
          />
        </div>
        <Textarea
          placeholder="Message"
          className="bg-secondary border-border text-foreground placeholder:text-muted-foreground/60 min-h-[160px] rounded-xl p-4 resize-none focus-visible:ring-1 focus-visible:ring-ring"
        />
        <Button className="w-full bg-secondary hover:bg-muted text-foreground font-medium h-12 rounded-xl border border-border transition-colors">
          Submit
        </Button>
      </form>

      {/* Follow Me Section (Duplicated/Shared) */}
      <div className="bg-card border border-border rounded-2xl p-4 flex items-center justify-between">
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
      </div>
    </motion.div>
  );
}
