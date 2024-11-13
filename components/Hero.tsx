import React from "react";
import Image from "next/image";
import main from "@/public/main.png";

export default function Hero() {
  return (
    <div className="h-screen w-screen m-0 flex bg-gray-100 items-center justify-between overflow-hidden">
      <div className="max-w-[486px] px-8 ml-6 mt-0">
        <h3 className="font-[nunito] text-[20px] font-bold leading-7 text-left text-[#fdc435] underline decoration-transparent">
          UI/UX Designer
        </h3>
        <h1 className="font-[Playfair] text-[#333333] text-[64px] font-bold text-left leading-[76.8px]">
          Hello, my name is Madelyn Torff
        </h1>
        <p className="font-[nunito] text-[24px] mt-4 leading-9 decoration-transparent text-left">
          Short text with details about you, what you do or your professional
          career. You can add more information on the about page.
        </p>

        <div className="flex gap-6 mt-8">
          <button className="w-[115px] h-[43px] font-[Roboto] px-6 py-2 rounded-lg bg-[#fdc435] text-[#25282b] font-semibold">
            Projects
          </button>
          <button className="w-[115px] h-[43px] font-[Roboto] px-6 py-2 rounded-lg border border-[#25282b] text-[325282b] font-semibold">
            LinkedIn
          </button>
        </div>
      </div>

      <div className="absolute right-0 top-0 h-[629px] w-[720px] hidden lg:block">
        <Image
          src={main}
          alt="hero image"
          layout="fill"
          objectFit="cover"
          className="opacity-100"
        />
      </div>
    </div>
  );
}
