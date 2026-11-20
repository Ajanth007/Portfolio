import React from "react";
import Image from "../assets/landingpage/img6.png";

const Landingpage = () => {
  return (
    <>
      {/* Main Container */}
      <div className="relative min-h-screen w-full flex flex-row items-center justify-between px-12 overflow-hidden">
        {/* Left Vertical Sidebar */}
        <div className="absolute left-15 top-0 h-screen flex flex-col items-center py-10">
          {/* Top Text */}
          <span className="text-sm tracking-[4px] font-medium [writing-mode:vertical-rl] rotate-180">
            SOFTWARE ENGINEER
          </span>

          {/* Vertical Line */}
          <div className="flex-1  w-px bg-gray-400 mt-6 mb-[-50px]"></div>

          {/* Bottom Text */}
          <span className="text-sm tracking-widest [writing-mode:vertical-rl] rotate-180 translate-y-20">
            2026
          </span>
        </div>

        {/* Left Side */}
        <div className="flex flex-col w-[55%] shrink-0 mt-[-120px]">
          {/* Statistics */}
          <div className="ml-20 ">
            <div className="flex flex-row gap-16">
              <div className="flex flex-col">
                <span className="text-6xl">200+</span>
                <h2 className="text-2xl">Project completed</h2>
              </div>

              <div className="flex flex-col">
                <span className="text-6xl">55+</span>
                <h2 className="text-2xl">Startup raised</h2>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="ml-32 mt-10">
            <h1 className="text-[180px] xl:text-[225px] leading-none">Hello</h1>

            <p className="text-2xl ml-10 mt-4 whitespace-nowrap">
              -- It's Ajanth, a developer
            </p>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-[45%] flex justify-end items-center ">
          <img
            src={Image}
            alt="Ajanth"
            className="w-[800px] max-w-none h-auto object-contain rounded-xl mt-[-250px]"
          />
        </div>
      </div>

      <div className="mt-[-25px] ml-75">
        <h1>Scroll down</h1>
      </div>
    </>
  );
};

export default Landingpage;
