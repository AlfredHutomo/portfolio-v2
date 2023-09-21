import PageReveal from "@/animation/PageReveal";
import { projects } from "@/constants";

export const metadata = {
  title: "Alfred Hutomo - Works",
  description: "Alfred Hutomo's works and experiences.",
};

export default function Works() {
  return (
    <PageReveal className="page">
      <section className="flex flex-col gap-6 leading-relaxed">
        <h1>Works</h1>
        <h3>Experiences</h3>
        <p>
          <b>Fullstack Software Engineer</b> at Grab, Jakarta, Indonesia, hybrid
          (2023 - present)
        </p>
        <p>
          <b>Fullstack Web Development Mentor</b> at Skilvul, Jakarta,
          Indonesia, remote (2023 - present)
        </p>
        <p>
          <b>Software Development Engineer</b> at Kargo Tech, Jakarta,
          Indonesia, hybrid (2022 - 2023)
        </p>
        <p>
          <b>Full Stack Developer</b> at Relab Studios, Melbourne, Australia,
          remote (2021 - 2022)
        </p>
        <p>
          <b>Creative Officer & Webmaster</b> at Indonesian Film Festival (IFF)
          Australia (2020 - 2021)
        </p>
        <h3>Projects</h3>
        {projects.map((project) => {
          if (project.link) {
            return (
              <div key={project.name}>
                <a
                  className="font-bold underline mr-2"
                  href={project.link}
                  target="_blank"
                >
                  {project.name}
                </a>
                {project.source && <a href={project.source}>source</a>}
              </div>
            );
          }
          return (
            <p key={project.name} className="font-bold">
              {project.name}
            </p>
          );
        })}
        <h6>Exciting Projects Revealed Soon</h6>
      </section>
    </PageReveal>
  );
}
