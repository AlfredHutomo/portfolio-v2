import PageReveal from "@/animation/PageReveal";
import LargeAHLogo from "@/components/svgs/large_ah_logo.svg";

export const metadata = {
  title: "Alfred Hutomo",
  description:
    "Welcome to Alfred Hutomo's Web Portfolio! As a software engineer and an aspiring content-creator, I create captivating digital experiences that blend seamless functionality with stunning visuals. Stay tuned for my upcoming photography and videography portfolio, where I will showcase my artistic flair and storytelling abilities through striking imagery and captivating videos. Together, let's shape a remarkable online presence that leaves a lasting impression on your audience.",
};

export default function Home() {
  return (
    <PageReveal className="fixed top-0 sm:absolute flex flex-col items-center justify-center h-full w-full p-7">
      <div className="max-w-lg w-full">
        <LargeAHLogo className="primary" />
      </div>
    </PageReveal>
  );
}
