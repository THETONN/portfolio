"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import mikelopster from "@/assets/images/mikelopster.webp";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import Tailwindcss from "@/assets/icons/tailwind.svg";
import GithubIcon from "@/assets/icons/github.svg";
import GoogleCloud from "@/assets/icons/google-cloud.svg";
import Angular from "@/assets/icons/angular.svg";
import Docker from "@/assets/icons/docker.svg";
import Fastapi from "@/assets/icons/fastapi.svg";
import Nodejs from "@/assets/icons/nodejs.svg";
import Golang from "@/assets/icons/go.svg";
import Python from "@/assets/icons/python.svg";
import Chatgpt from "@/assets/icons/chatgpt.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "Python",
    iconType: Python,
  },
  {
    title: "Go",
    iconType: Golang,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "NodeJS",
    iconType: Nodejs,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "ChatGPT",
    iconType: Chatgpt,
  },
];
const toolboxItems2 = [
  {
    title: "Docker",
    iconType: Docker,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "Tailwindcss",
    iconType: Tailwindcss,
  },
  {
    title: "Angular",
    iconType: Angular,
  },
  {
    title: "Google Cloud",
    iconType: GoogleCloud,
  },
  {
    title: "FastAPI",
    iconType: Fastapi,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "🏕️",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },

  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "🏋️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📖",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          title={"Navigating the Digital Frontier"}
          eyebrow={"About Me"}
          description={
            "Discover my journey as a budding developer, my passions, and what drives me to innovate in the world of technology."
          }
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5  lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title={"Tech Muses"}
                description={
                  "Exploring ideas that shape my tech journey and fuel my passion for innovation."
                }
              ></CardHeader>
              <div className="flex">
                <div className="w-60 mx-auto mt-2 md:mt-0 inline-flex items-center gap-4 py-2 px-3">
                  <Image src={mikelopster} alt="Book Cover" className="rounded-md"/>
                  <p className="text-sm lg:text-base max-w-xs text-white/60 mt-2">Mikelopster&#39;s Tech Blog</p>
                </div>
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title={"My Skills"}
                description={
                  "Explore the technologies nad tools I use to create digital experiences."
                }
                className=""
              ></CardHeader>
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:15s]"
              />
              <ToolboxItems
                items={toolboxItems2}
                className="mt-6 "
                itemsWrapperClassName="animate-move-right [animation-duration:30s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title={"Beyound the Code"}
                description={
                  "Explore my interest and hobbies beyound the digital realm."
                }
                className="px-6 py-6"
              ></CardHeader>
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute hover:cursor-pointer"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="smiling memoji"
                  className="size-20 "
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
