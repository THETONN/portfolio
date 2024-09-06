'use client';
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import travelapp from '@/assets/images/travelapp.png'
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import acneProject from '@/assets/images/acne.png'

const portfolioProjects = [
  
  // {
  //   company: "Project Term",
  //   year: "2022",
  //   title: "Hotel Booking",
  //   results: [
  //     { title: "Enhanced user experience by 40%" },
  //     { title: "Improved site speed by 50%" },
  //     { title: "Increased mobile traffic by 35%" },
  //   ],
  //   link: "https://youtu.be/4k7IdSLxh6w",
  //   image: darkSaasLandingPage,
  // },
  {
    company: "Senior Project",
    year: "2023",
    title: "Travel Agency Website",
    results: [
      { title: "AI-Curated Adventures" },
      { title: "Smart Travel Matching" },
      { title: "Your Perfect Trip Awaits" },
    ],
    link: "https://github.com/THETONN/final_project.git",
    image: travelapp,
  },
  {
    company: "Freelance Work",
    year: "2024",
    title: "AI Skin Ananlysis",
    results: [
      { title: "The use of AI technology" },
      { title: "Quick analysis (under 5 minutes)" },
      { title: "Personalized skincare recommendations" },
    ],
    link: "https://acne-severity.vercel.app/",
    image: acneProject,
  },
  {
    company: "Fronend Project",
    year: "2024",
    title: "Sass Landing Page",
    results: [
      { title: "Sleek, modern UI design" },
      { title: "Smooth, responsive animations" },
      { title: "Intuitive user experience" },
    ],
    link: "https://saa-s-landing-page-mu.vercel.app/",
    image: darkSaasLandingPage,
  },
];

export const ProjectsSection = () => {
  
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title={"Featured Projects"}
          eyebrow={"Real-world Results"}
          description={
            "Transforming Ideas into Impactful Digital Solutions."
          }
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project,index) => (
            <Card
              key={project.title}
              className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 
              lg:pt-16 lg:px-20 sticky "
              style={{
                top:`calc(64px + ${index *40}px)`
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 md:text-base text-sm text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} className="">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:mb-0 lg:mt-0
                    lg:absolute lg:h-full lg:w-auto lg:max-w-none
                    "
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
