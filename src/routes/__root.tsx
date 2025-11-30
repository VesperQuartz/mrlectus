import { formDevtoolsPlugin } from "@tanstack/react-form-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import type { AuthClient } from "better-auth/react"; // Attempt to import AuthClient type
import { AsyncProvider } from "@/providers/async";
import { LoadingProvider } from "@/providers/loader";
export type RootContext = {
  auth: AuthClient; // Use the imported type
  queryClient: QueryClient | undefined;
};

export const Route = createRootRouteWithContext<RootContext>()({
  component: () => (
    <>
      <AsyncProvider>
        <LoadingProvider>
          <HeadContent />
          <Outlet />
          <TanStackDevtools
            config={{
              position: "bottom-left",
              openHotkey: ["Meta", "Shift", "O"],
            }}
            plugins={[
              {
                name: "Tanstack Router",
                render: <TanStackRouterDevtoolsPanel />,
              },
              {
                name: "React Query",
                render: <ReactQueryDevtoolsPanel />,
              },
              formDevtoolsPlugin(),
            ]}
          />
        </LoadingProvider>
      </AsyncProvider>
    </>
  ),
});
