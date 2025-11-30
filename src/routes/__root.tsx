import { TanStackDevtools } from "@tanstack/react-devtools";
import { formDevtoolsPlugin } from "@tanstack/react-form-devtools";
import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { AsyncProvider } from "@/providers/async";
import { LoadingProvider } from "@/providers/loader";
export type RootContext = {
  auth: any;
  queryClient: QueryClient | undefined;
};

export const Route = createRootRouteWithContext<RootContext>()({
  head: () => ({
    meta: [
      {
        title: "Waheed | Full Stack Developer - Blockchain & Web3 Expert",
      },
      {
        name: "description",
        content:
          "Waheed is a Full Stack Developer specializing in high-performance blockchain solutions, fintech apps, and modern web development. Available for hire.",
      },
      {
        property: "og:title",
        content: "Waheed | Full Stack Developer - Blockchain & Web3 Expert",
      },
      {
        property: "og:description",
        content:
          "Waheed is a Full Stack Developer specializing in high-performance blockchain solutions, fintech apps, and modern web development. Available for hire.",
      },
      {
        property: "og:image",
        content: "https://mrlectus.online/logo512.png",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:creator",
        content: "@mrlectus",
      },
      {
        name: "twitter:title",
        content: "Waheed | Full Stack Developer - Blockchain & Web3 Expert",
      },
      {
        name: "twitter:description",
        content:
          "Waheed is a Full Stack Developer specializing in high-performance blockchain solutions, fintech apps, and modern web development. Available for hire.",
      },
      {
        name: "twitter:image",
        content: "https://mrlectus.online/logo512.png",
      },
    ],
  }),
  component: () => (
    <>
      <AsyncProvider>
        <LoadingProvider>
          <HeadContent />
          <Outlet />
          {import.meta.env.DEV && (
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
          )}
        </LoadingProvider>
      </AsyncProvider>
    </>
  ),
});
