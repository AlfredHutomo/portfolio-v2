export const metadata = {
  title: "Alfred Hutomo - Works",
  description: "Alfred Hutomo's works and experiences.",
};

const projects: { name: string; link?: string }[] = [
  {
    name: "Attendance Summary App for a small business",
    link: "https://asa.alfredtomo.dev",
  },
  {
    name: "Doctor Booking App",
  },
  {
    name: "Giphy API Integration App",
    link: "https://thriving-marshmallow-318cf2.netlify.app/",
  },
  {
    name: "Portfolio Website V1",
    link: "https://v1.alfredtomo.dev/",
  },
  {
    name: "Real Futbol Institute Website with Relab Studios",
    link: "https://www.realfutbolinstitute.com/",
  },
  {
    name: "16th Indonesian Film Festival with Relab Studios",
    link: "https://iffaustralia.com",
  },
  {
    name: "15th 2.0 Indonesian Film Festival",
  },
  {
    name: "Quiz plus RoR App",
  },
];

export default function Works() {
  return (
    <main className="page">
      <section className="flex flex-col gap-6 leading-relaxed">
        <h1>Works</h1>
        <h3>Professional Experiences</h3>
        <p>
          <b>Software Development Engineer</b> at Kargo Tech, Jakarta,
          Indonesia, hybrid (2022 - present)
        </p>
        <p>
          <b>Full-Stack Engineering Mentor</b> at Skilvul, Jakarta, Indonesia,
          remote (2023)
        </p>
        <p>
          <b>Full Stack Developer</b> at Relab Studios, Melbourne, Australia,
          remote (2021 - 2022)
        </p>
        <h3>Programming & Coding Experiences</h3>
        <p>
          <b>Creative Officer & Webmaster</b> at Indonesian Film Festival (IFF)
          Australia (2020 - 2021)
        </p>
        <h3>Projects</h3>
        {projects.map((project) => {
          if (project.link) {
            return (
              <a
                key={project.name}
                className="font-bold underline"
                href={project.link}
                target="_blank"
              >
                {project.name}
              </a>
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
    </main>
  );
}
