import { LuGraduationCap } from "react-icons/lu";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";


export const NavLinks = [
    {
      title: "About Me",
      link: "/#about"
    },
    {
        title: "Skills",
        link: "/#skills"
    },
    {
        title: "Projects",
        link: "/#projects"
    },
    {
        title: "Experience",
        link: "/#experience"
    },
    {
        title: "Contact",
        link: "/#contact"
    },
  ];

  export const Socials = [
    {
      name: "LinkdIn",
      src: "/icons/linkedin.svg",
      link: "https://www.linkedin.com/in/meet-limbani/"
    },
    {
      name: "GitHub",
      src: "/icons/github.svg",
      link: "https://github.com/meetlimbani27"
    },
    
  ];

  export const experiencesData = [
    {
      title: "BE - CE",
      location: "LDRP-ITR, Gandhinagar, Gujarat",
      description:
        "Pursuing bachelor's degree in CE engineering.",
      icon: React.createElement(LuGraduationCap),
      date: "2021 - 2025",
    },
    
    {
      title: "Full-Stack Developer",
      location: "The Special Character, Ahmedabad, Gujarat",
      description:
        ' We a team of 7, worked diligiently to make a fully complete ecommerce website for fruits,vegetables and everyday groceries which generates orderid also. We used React, Next.js14, Typescript, Tailwind and GitHub for version control and seemless collaboration which gave us a great experience and recognition on the stage among many fellow developers. This project is the fruit of our great Teamwork',
      icon: React.createElement(CgWorkAlt),
      date: "Dec 2023 - Jan 2024",
    },
    {
      title: "Back-end Developer",
      location: "SSIP Hackathon",
      description:
        'I worked on a web project named "GIFT Connect" which is a platform for the residents, employees and managing authority of the GIFT City in Gujarat which is a Financial City. My Job as a backend dev was to create backend for news, events, polls, voting system and unique tag for residents, employees and managing authority. And make a admin page which will allow the managing authority to manage the website.',
      icon: React.createElement(FaReact),
      date: "Nov 2023",
    },
  ] as const;