import { createFileRoute } from "@tanstack/react-router";
import { HireView } from "@/components/Portfolio/HireView";

export const Route = createFileRoute("/(dashboard)/hire")({
  component: HirePage,
});

function HirePage() {
  return <HireView />;
}
