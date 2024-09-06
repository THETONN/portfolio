/* eslint-disable react/no-unescaped-entities */
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="relative z-10">
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&#39;s build innovative solutions together
              </h2>
              <p className="text-sm md:text-base mt-2 ">
                Let&#39;s connect and
                discuss how my skills in software development can add value to
                your team and help achieve your company&#39;s goals.
              </p>
            </div>
            <div className="">
              <a
                href="mailto:thanyathon.kr@gmail.com"
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
