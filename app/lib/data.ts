import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import airbnbImg from "@/public/airbnb_clone.png";
import myportfoImg from "@/public/my-portfolio.png";
import mysecondportfoImg from "@/public/second portfolio.png";

export interface ExperienceItem {
  title: string;
  date: string;
  location: string;
  description: string;
  icon: React.ReactNode; // If your icon is a React component
}

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Jakarta, Indonesia",
    description:
      "I graduated after 6 months of studying. Relevant Course works: HTML, CSS, JavaScript, React Native and Node.js.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - Present",
  },
  {
    title: "IT Intern",
    location: "Makassar, Indonesia",
    description:
      "Assisted with Technical Support (DUKTEK) maintenance of hardware, software, and LAN cables. Monitored the computer so it is always connected to Customer Service.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Education",
    location: "Makassar, Indonesia",
    description:
      "I'm study algorithms, software engineering. Relevant Course Works: C++, HTML, CSS, PHP, & MySQL.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Airbnb Clone",
    description:
      "I worked as a full-stack developer on this project for 6 month. It has features like filtering, listing and favorites.",
    tags: ["React", "Next.js","TypeScript", "Supabase", "Tailwind", "Prisma"],
    imageUrl: airbnbImg,
    url:"https://airbnb838.vercel.app/"
  },
  {
    title: "Currently Portfolio",
    description:
      "A public web app for people or hiring managers to view the projects I’ve worked on. It has feature to send email",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    imageUrl: myportfoImg,
    url:"https://my-portfolio-nine-gray-46.vercel.app/"
  },
  {
    title: "First Portfolio",
    description:
      "A public web app for people or hiring managers to view the projects I’ve worked on. It has feature to send email",
    tags: ["HTML", "CSS", "Bootstrap"],
    imageUrl: mysecondportfoImg,
    url:"https://ahyarfatahillah.github.io/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Jquery",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Git",
  "Tailwind",
  "MySQL",
  "Prisma",
  "Supabase",
  "Firebase",
  "Figma",
] as const;