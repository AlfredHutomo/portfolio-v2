export const metadata = {
  title: "Alfred Hutomo - Works",
  description: "Alfred Hutomo's works and experiences.",
};

export default function Works() {
  return (
    <main className="flex flex-col px-7 pb-40 sm:pb-0 sm:py-[80px] sm:px-[100px] w-full max-w-3xl overflow-scroll">
      <section className="flex flex-col gap-6 leading-relaxed">
        <h1>Works</h1>
        <h3>Professional Experiences</h3>
        <p>
          <b>Software Development Engineer</b>at Kargo Tech, Jakarta, Indonesia,
          hybrid (2022 - present)
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
          Australia - (2020 - 2021)
        </p>
        <h3>Projects</h3>
        <a className="font-bold underline" href="https://asa.alfredtomo.dev">
          Attendance Summary App
        </a>
        <p className="font-bold">Doctor Booking App</p>
        <a
          className="font-bold underline"
          href="https://www.realfutbolinstitute.com/"
        >
          Real Futbol Institute Website
        </a>
        <p className="font-bold">16th Indonesian Film Festival</p>
        <p className="font-bold">15th 2.0 Indonesian Film Festival</p>
        <p className="font-bold">Quiz plus</p>
        <h6>Exciting Projects Coming Soon</h6>
      </section>
    </main>
  );
}
