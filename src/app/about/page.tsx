export const metadata = {
  title: "Alfred Hutomo - About",
  description:
    "My name is Alfred Louise Hutomo, I am Software Engineer specializing in full stack development. My skill set encompasses both frontend and backend development, cloud computing, DevOps, and project management.",
};

export default function About() {
  return (
    <main className="page">
      <section className="flex flex-col gap-6 leading-relaxed">
        <h1>About Me</h1>
        <p>
          My name is Alfred Louise Hutomo, I am Software Engineer specializing
          in full stack development. My skill set encompasses both frontend and
          backend development, cloud computing, DevOps, and project management.
        </p>
        <h3>Technicalities</h3>
        <ul>
          <li>Languages: JavaScript, TypeScript, Python, Java, and C#</li>
          <li>Frameworks & Libraries: Node, React, Next.</li>
          <li>Databases: SQL and NoSQL.</li>
          <li>
            Extension skills: functional programming and mobile app development.
          </li>
        </ul>
        <h3>Passions & Drives</h3>
        <p>
          Beyond my technical abilities, I&apos;m driven by my hobbies for
          gaming, photography, videography, and snowboarding. These interests
          showcase my creativity and desire for excellence, which I bring to
          every project I work on.
        </p>
        <h3>Educations</h3>
        <p>
          I hold a Bachelor&apos;s degree in Information Technology with
          Distinction, specializing in Software System Development, from RMIT
          University in Melbourne. Prior to that, I completed a Diploma of
          Engineering (IT Stream) at Monash College. Additionally, I obtained an
          International Baccalaureate (IB) Diploma from Binus International
          School Simprug in Jakarta.
        </p>
      </section>
    </main>
  );
}
