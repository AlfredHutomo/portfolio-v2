import PageReveal from "@/animation/PageReveal";
import { socials } from "@/constants";
import CopyButton from "@/components/CopyButton";

export const metadata = {
  title: "Alfred Hutomo - Reach",
  description: "Multiple ways to reach Alfred Hutomo.",
};

export default function Works() {
  return (
    <PageReveal className="page">
      <section className="flex flex-col gap-6 leading-relaxed">
        <h1>Reach Me</h1>
        <h4>Email</h4>
        <div className="flex gap-2 items-center">
          <a
            href="mailto:alfredhutomo+portfolio@gmail.com"
            className="hover-underline font-bold"
          >
            alfredhutomo[at]gmail.com
          </a>
          <CopyButton text="alfredhutomo+portfolio@gmail.com" />
        </div>
        <h4>Socials</h4>
        {socials.map((social) => {
          return (
            <a
              key={social.name}
              href={social.link}
              className="hover-underline font-bold"
            >
              {social.name}
            </a>
          );
        })}
      </section>
    </PageReveal>
  );
}
