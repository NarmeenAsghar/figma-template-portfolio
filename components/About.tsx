import React from "react";
import Image from "next/image";
import about from "@/public/about.png";

export default function About() {
  return (
    <div id="about" className="h-screen w-screen m-0 flex items-center justify-around bg-gray-100 overflow-hidden">
      <div className="w-[588px] h-[313px] gap-32">
        <h1 className="font-[Playfair] text-[48px] font-bold leading-[62.4px] text-left decoration-transparent text-[#333333]">
          About me
        </h1>
        <p className="font-[Nunito] mt-6 text-[24px] leading-9 text-left decoration-transparent text-[#828282]">
          Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor
          neque auctor dis ipsum. Pretium cras amet odio amet eleifend id sed
          cras sed. Aliquet risus posuere aliquet imperdiet sit.
        </p>
        <button className="w-[115px] h-[43px] px-6 py-2 rounded-lg mt-10 bg-[#fdc435] font-[Roboto] text-[#25282b] font-semibold">
          Resume
        </button>
      </div>

      <div className="w-[524px] h-[524px] hidden sm:block">
        <Image src={about} alt="image" width={524} height={524} />
      </div>
    </div>
  );
}
