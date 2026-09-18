import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SmoothCursor } from "@/components/Cursor/SmoothCursor";
import { LocalTime } from "@/components/Portfolio/LocalTime";
import { Navigation } from "@/components/Portfolio/Navigation";
import { personalInfo } from "@/data/portfolio";

export const Route = createFileRoute("/(dashboard)")({
  component: DashboardLayout,
});

function DashboardLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-page-background text-foreground transition-colors duration-300">
      {/* Parked just above the viewport and slides in on keyboard focus. */}
      <a
        href="#main"
        className="no-print absolute top-4 left-4 z-[200] -translate-y-24 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <div className="grain-overlay no-print" aria-hidden="true" />
      <SmoothCursor />

      <Navigation />

      <main
        id="main"
        className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 md:py-24"
      >
        <Outlet />
      </main>

      <footer className="no-print border-t border-border">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <span>
            © {new Date().getFullYear()} {personalInfo.name}
          </span>
          <LocalTime />
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Available for work
          </span>
        </div>
      </footer>
    </div>
  );
}
