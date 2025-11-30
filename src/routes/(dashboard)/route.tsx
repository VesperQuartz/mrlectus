import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Navigation } from "@/components/Portfolio/Navigation";

export const Route = createFileRoute("/(dashboard)")({
  component: DashboardLayout,
});

function DashboardLayout() {
  return (
    <div className="min-h-screen w-full py-8 px-4 flex flex-col items-center justify-start bg-page-background text-foreground transition-colors duration-300">
      <Navigation />

      <main className="w-full max-w-[680px] bg-background rounded-[32px] border border-border p-6 md:p-8 shadow-2xl mt-20 mb-12 relative overflow-hidden min-h-[60vh] transition-colors duration-300">
        <Outlet />
      </main>

      <footer className="text-center text-sm text-muted-foreground pb-8">
        <p>© 2024 {new Date().getFullYear()} Subtle Folio – Framer Template</p>
        <p className="text-xs opacity-60 mt-2">
          by MrLectus {/* MorvaLabs // Framer */}
        </p>
      </footer>
    </div>
  );
}
