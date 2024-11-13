import React from "react";
import Image from "next/image";
import projectline from "@/public/projectline.png";
import project1 from "@/public/project1.png";
import project2 from "@/public/project2.png";
import project3 from "@/public/project3.png";

export default function Projects() {
  return (
    <div
      id="projects"
      className="w-screen flex items-center justify-center bg-gray-100 pt-2 overflow-hidden md:w-screen"
    >
      <div className="w-[992px] h-[1892px] flex flex-col items-center justify-center">
        <h2 className="font-[Playfair] text-[#25282b] text-[48px] leading-[72px] font-bold text-center">
          Projects
        </h2>
        <div className="w-[100px] mb-16">
          <Image
            src={projectline}
            alt="Underline"
            width={100}
            height={4}
            className="mx-auto"
          />
        </div>

        <div className="w-[992px] h-[522px] bg-white gap-0 flex mb-10 rounded-r-[24px]">
          <div className="w-[406.68px] flex flex-col justify-center pl-10 mr-24">
            <h1 className="font-[Playfair] text-[40px] font-bold pb-4 leading-[60px] text-[#25282b]">
              Project Name
            </h1>
            <p className="font-[Nunito] text-[18px] pb-2 leading-6 font-normal text-[#828282]">
              I created this personal project in order to show how to create an
              interface in Figma using a portfolio as an example.
            </p>
            <button className="w-[150px] h-[43px] font-[Roboto] px-6 py-2 border border-[#25282b] rounded-[24px] text-[#25282b] font-semibold mt-4">
              View Project
            </button>
          </div>
          <div className="w-[496px] h-[524px] relative rounded-r-[24px] overflow-hidden">
            <Image src={project1} alt="Project 1 image" objectFit="cover" />
          </div>
        </div>

        <div className="w-[992px] h-[522px] bg-white gap-0 flex mb-10 mt-4 rounded-l-[24px]">
          <div className="w-[496px] h-[524px] relative rounded-l-[24px] overflow-hidden">
            <Image src={project2} alt="Project 2 image" objectFit="cover" />
          </div>
          <div className="w-[406.68px] flex flex-col justify-center pl-10 mr-24">
            <h1 className="font-[Playfair] text-[40px] font-bold pb-4 leading-[60px] text-[#25282b]">
              Project Name
            </h1>
            <p className="font-[Nunito] text-[18px] pb-2 leading-6 font-normal text-[#828282]">
              What was your role, your deliverables, if the project was
              personal, freelancing.
            </p>
            <button className="w-[150px] h-[43px] font-[Roboto] px-6 py-2 border border-[#25282b] rounded-[24px] text-[#25282b] font-semibold mt-4">
              View Project
            </button>
          </div>
        </div>

        <div className="w-[992px] h-[522px] bg-white gap-0 flex mb-10 mt-4 rounded-r-[24px]">
          <div className="w-[406.68px] flex flex-col justify-center pl-10 mr-24">
            <h1 className="font-[Playfair] text-[40px] font-bold pb-4 leading-[60px] text-[#25282b]">
              Project Name
            </h1>
            <p className="font-[Nunito] text-[18px] pb-2 leading-6 font-normal text-[#828282]">
              You can also add in this description the type of the project, if
              it was for web, mobile, electron.
            </p>
            <button className="w-[150px] h-[43px] font-[Roboto] px-6 py-2 border border-[#25282b] rounded-[24px] text-[#25282b] font-semibold mt-4">
              View Project
            </button>
          </div>
          <div className="w-[496px] h-[524px] relative rounded-r-[24px] overflow-hidden">
            <Image src={project3} alt="Project 3 image" objectFit="cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
