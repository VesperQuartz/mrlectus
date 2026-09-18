import { useEffect, useState } from "react";

const TIME_ZONE = "Africa/Lagos";

function format(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    timeZone: TIME_ZONE,
  }).format(date);
}

/**
 * The visitor's read on "is this person around right now". Static text feels
 * like a brochure; a clock that actually ticks does not.
 */
export function LocalTime() {
  const [time, setTime] = useState(() => format(new Date()));

  useEffect(() => {
    const id = setInterval(() => setTime(format(new Date())), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className="inline-flex items-center gap-2"
      title="Local time in Nigeria (WAT)"
    >
      Nigeria
      <span className="font-mono text-xs tabular-nums text-foreground/70">
        {time}
      </span>
    </span>
  );
}
