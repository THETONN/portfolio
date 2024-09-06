/* eslint-disable react/no-unescaped-entities */
import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDowm from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import React, { useState, useEffect } from "react";
import proFile from "@/assets/images/79e1b842-271e-4d8f-bf05-ea32aabf37f9.jpg";
import { TypeAnimation } from "react-type-animation";
import resume from "@/assets/images/Resume_Thanyathon_Kingrat.webp";

export const HeroSection = () => {
  const scrollToSection = (sectionId: any) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -60; // ปรับตามความสูงของ header ถ้ามี
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-20 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="relative z-10">
        <div className="container">
          <div className="flex flex-col items-center ">
            <Image
              src={proFile}
              className=" h-[200px] w-[200px] mx-auto  rounded-full object-cover mb-3"
              alt="I am peejing from behind labtop"
            />
            <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
              <div className="bg-green-500 size-2.5 rounded-full relative">
                <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
              </div>
              <div className="text-sm font-medium">Open to Opportunities</div>
            </div>
          </div>
          <div className="max-w-lg mx-auto">
            {/* <h1 className="font-serif text-3xl md:text-5xl text-center mt-2 tracking-wide animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-white">
              Thanyathon Kingrat
            </h1> */}
            <div className="text-center mt-4">
              <TypeAnimation
                className="font-serif text-3xl md:text-5xl text-center mt-2 tracking-wide items-center"
                sequence={[
                  "Thanyathon Kingrat",
                  12000,
                  "A Programic Frontend Developer",
                  12000,
                  "I build things for the web",
                  12000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
            <p className="mt-4 text-center text-white/60 md:text-lg ">
              Passionate about crafting digital experiences through code
            </p>
          </div>
          <div className="flex flex-col md:flex-row  justify-center items-center mt-4 gap-4">
            {/* <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl
             bg-transparent text-white
             transition-all duration-300 ease-in-out
             hover:bg-white/10 hover:border-white/30
             focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <span className="font-semibold">Explore My Work</span>
              <ArrowDowm className="size-4" />
            </button> */}
            <button
              className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl
             bg-transparent text-white
             transition-all duration-300 ease-in-out
             hover:bg-white/10 hover:border-white/30
             focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <a
                href="https://drive.google.com/file/d/1evETK_k_wqtAhr1KQKJLWlxZSMO8BslD/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold"
              >
                My Resume
              </a>
              <ArrowDowm className="size-4" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="relative flex gap-2 h-12 px-6 items-center justify-center overflow-hidden bg-white text-gray-900 shadow-2xl  rounded-xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-emerald-500 before:duration-500 before:ease-out hover:shadow-emerald-500 hover:text-white hover:before:h-56 hover:before:w-56"
            >
              <span className="relative z-10">👋</span>
              <span className="font-semibold relative z-10">Let's Connect</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
