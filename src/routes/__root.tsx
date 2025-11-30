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
        title: "Waheed - Full Stack Developer Portfolio",
      },
      {
        name: "description",
        content: "Portfolio of Waheed - Full Stack Developer specializing in blockchain, fintech, and modern web applications",
      },
      {
        property: "og:title",
        content: "Waheed - Full Stack Developer Portfolio",
      },
      {
        property: "og:description",
        content: "Portfolio of Waheed - Full Stack Developer specializing in blockchain, fintech, and modern web applications",
      },
      {
        property: "og:image",
        content: "https://mrlectus.online/og-image.png",
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
        content: "Waheed - Full Stack Developer Portfolio",
      },
      {
        name: "twitter:description",
        content: "Portfolio of Waheed - Full Stack Developer specializing in blockchain, fintech, and modern web applications",
      },
      {
        name: "twitter:image",
        content: "https://mrlectus.online/og-image.png",
      },
    ],
  }),
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
