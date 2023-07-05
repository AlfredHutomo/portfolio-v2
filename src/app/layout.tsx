"use client";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { Work_Sans } from "next/font/google";
import ControlBar from "@/components/ControlBar";
import { Providers } from "./providers";

const workSans = Work_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div
            className={
              workSans.className +
              " flex flex-col-reverse justify-between sm:flex-row min-h-screen bg-milk dark:bg-abyss"
            }
          >
            <NavBar />
            <div>{children}</div>
            <ControlBar />
          </div>
        </Providers>
      </body>
    </html>
  );
}
