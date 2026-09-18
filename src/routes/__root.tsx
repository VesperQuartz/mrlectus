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

/**
 * All SEO and social meta lives in index.html, deliberately.
 *
 * This is a client-rendered SPA — the bots that build link previews (LinkedIn,
 * Slack, Discord, iMessage) fetch the raw HTML and do not execute JavaScript.
 * They only ever see index.html, so that file is the single source of truth for
 * <title>, description and the Open Graph / Twitter tags.
 *
 * Declaring the same tags here as well produced a duplicate copy of each tag in
 * <head>, so this route intentionally contributes no meta.
 */

export const Route = createRootRouteWithContext<RootContext>()({
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
