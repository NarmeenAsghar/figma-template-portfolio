import React from "react";

export default function Header() {
    return (
        <div className="w-full h-[56px] flex items-center justify-between px-8 bg-gray-100 overflow-hidden">
            <div className="font-[Comfortaa] text-[18px] text-[#25282b] ml-6 font-bold">
                Madelyn Torff
            </div>

            <div className="flex space-x-8 mr-6">
                <a href="#about" className="font-[Raleway] z-10 text-[#25282b] text-[18px] font-semibold">
                    About
                </a>
                <a href="#projects" className="font-[Raleway] z-10 text-[#25282b] text-[18px] font-semibold">
                    Projects
                </a>
                <a href="#contact" className="font-[Raleway] z-10 text-[#25282b] text-[18px] font-semibold">
                    Contact
                </a>
            </div>
        </div>
    );
}
