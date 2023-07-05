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
              " flex flex-col-reverse items-stretch justify-between sm:flex-row min-h-screen bg-milk dark:bg-abyss"
            }
          >
            <NavBar />
            <div className="flex-1 relative max-h-screen overflow-scroll">
              {children}
            </div>
            <ControlBar />
          </div>
        </Providers>
      </body>
    </html>
  );
}
