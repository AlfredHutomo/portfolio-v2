import LargeAHLogo from "@/components/svgs/large_ah_logo.svg";

export const metadata = {
  title: "Alfred Hutomo",
  description: "Welcome to my portfolio page",
};

export default function Home() {
  return (
    <main className="fixed top-0 sm:absolute flex flex-col items-center justify-center h-full w-full p-7">
      <div className="max-w-lg w-full">
        <LargeAHLogo className="primary" />
      </div>
    </main>
  );
}
