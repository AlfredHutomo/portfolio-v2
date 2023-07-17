"use client";
import { ThemeProvider } from "next-themes";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <LazyMotion features={domAnimation}>
        <AnimatePresence
          mode="wait"
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          {children}
        </AnimatePresence>
      </LazyMotion>
    </ThemeProvider>
  );
}
