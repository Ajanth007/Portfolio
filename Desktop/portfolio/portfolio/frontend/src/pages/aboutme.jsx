import React from "react";
import Image1 from "../assets/landingpage/img4.jpeg";

import { Sparkles,Globe } from 'lucide-react';

const aboutme = () => {
  return (
    <>
      <div className="flex flex-row">
        {/* About me  */}
        <div className=" ml-28 mt-30">
          <label className="text-6xl ">About Me</label>
          <p className="text-xl max-w-[500px] mt-4">
            I specialize in building modern, user-focused web applications that
            turn ideas into practical digital experiences. Blending creativity
            with problem-solving, I create clean, responsive, and functional
            solutions. Ready to bring your next idea to life?
          </p>
        </div>

        {/* first  box */}

        <div className="flex flex-col w-2xs mt-20 gap-6 ml-6">
          <Globe className="w-6" />
          <num className="text-6xl">320%</num>
          <label className="text-2xl p-2">
            Average increase in client engagement in the first 6 months
          </label>

          <img src={Image1} alt="aboutme first image" className=" p-2 rounded-2xl" />
        </div>

        {/* Second box */}

        <div className="flex flex-col w-150 ml-10  mt-20">
          <img
            src={Image1}
            alt="aboutme first image"
            className="w-65 rounded-2xl mx-auto"
          />

          <div className="flex flex-col gap-8 mt-6">
            <div className="flex flex-row ">
            <Sparkles className="w-16" />
            <p>
              {/* <Icon/> */}
              As a Computer Science graduate, I specialize in building modern,
              responsive web applications that solve real-world problems through
              clean code, thoughtful functionality, and user-focused
              development.
            </p>
            </div>

            {/* <Icon/> */}
                 <div className="flex flex-row">
            <Sparkles className="w-16" />
            <p>
              I enjoy turning ideas into meaningful digital experiences,
              combining creativity with technical problem-solving to develop
              seamless applications using React, Node.js, Express, and MySQL.
              I'm always exploring new technologies and improving my skills to
              build better solutions.
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default aboutme;
