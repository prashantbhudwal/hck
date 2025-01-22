"use client";
import { Provider } from "jotai";
import { ThemeProvider } from "@/components/theme-provider";
import { SessionProvider } from "next-auth/react";
import { TRPCReactProvider } from "@/trpc/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
          <TRPCReactProvider>
            {children}
            <ReactQueryDevtools />
          </TRPCReactProvider>
        </Provider>
      </ThemeProvider>
    </SessionProvider>
  );
}
