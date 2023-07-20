import LinkedInLogo from "@/components/svgs/LinkedIn.svg";
import InstagramLogo from "@/components/svgs/Instagram.svg";
import GitLogo from "@/components/svgs/Git.svg";

export const internalLinks = [
  {
    text: "ABOUT",
    path: "/about",
    disabled: false,
  },
  {
    text: "WORKS",
    path: "/works",
    disabled: false,
  },
  {
    text: "SNAPS",
    path: "/snaps",
    disabled: true,
  },
  {
    text: "REACH",
    path: "/reach",
    disabled: false,
  },
] as const;

export const socials = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/alfred-hutomo/",
    LogoComponent: LinkedInLogo,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/alfredhutomo/",
    LogoComponent: InstagramLogo,
  },
  {
    name: "GitHub",
    link: "https://github.com/AlfredHutomo",
    LogoComponent: GitLogo,
  },
] as const;

type ReadOnlyProject = readonly {
  name: string;
  link?: string;
  source?: string;
}[];

export const projects: ReadOnlyProject = [
  {
    name: "Portfolio Website V2",
    link: "https://alfredtomo.dev",
    source: "https://github.com/AlfredHutomo/portfolio-v2",
  },
  {
    name: "Attendance Summary App for a small business",
    link: "https://asa.alfredtomo.dev",
    source: "https://github.com/AlfredHutomo/attendance-summary",
  },
  {
    name: "Doctor Booking App",
    link: "https://necktie-doctor-app.vercel.app/",
    source: "https://github.com/AlfredHutomo/Doctor-Booking-App",
  },
  {
    name: "Giphy API Integration App",
    link: "https://thriving-marshmallow-318cf2.netlify.app/",
    source: "https://github.com/AlfredHutomo/BesiManGiphy",
  },
  {
    name: "Portfolio Website V1",
    link: "https://v1.alfredtomo.dev/",
    source: "https://github.com/AlfredHutomo/portfolio",
  },
  {
    name: "Real Futbol Institute Website with Relab Studios",
    link: "https://www.realfutbolinstitute.com/",
    source: "https://github.com/AlfredHutomo/rfi-site",
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
] as const;
