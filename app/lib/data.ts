import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import airbnbImg from "@/public/airbnb_clone.png";

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
      "I worked as a full-stack developer on this startup project for 6 month. It has features like filtering, listing and my favorite.",
    tags: ["React", "Next.js", "Supabase", "Tailwind", "Prisma"],
    imageUrl: airbnbImg,
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