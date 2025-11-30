import { createFileRoute } from "@tanstack/react-router";
import { HomeView } from "@/components/Portfolio/HomeView";

export const Route = createFileRoute("/(dashboard)/")({
  component: Portfolio,
});

function Portfolio() {
  return <HomeView />;
}
