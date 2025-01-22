"use client";
import { Provider } from "jotai";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ThemeProvider } from "@/components/theme-provider";
import { SessionProvider } from "next-auth/react";
import { TRPCReactProvider } from "@/trpc/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
        forcedTheme="dark"
      >
        <Provider>
          <TRPCReactProvider>{children}</TRPCReactProvider>
          <TanStackRouterDevtools />
        </Provider>
      </ThemeProvider>
    </SessionProvider>
  );
}
