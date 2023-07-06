"use client";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        {children}
      </AnimatePresence>
    </ThemeProvider>
  );
}
