"use client";
import { useState } from "react";
import { EarthIcon, Menu, X } from "lucide-react";
import Image from "next/image";

export default function ClaimNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="bg-green-700 p-4">
                <div className="flex justify-between items-center">
                    
                    <div className="flex items-center gap-3">
                        <Image
                            src="/VanadhikarLogo.jpeg"
                            className="rounded-full"
                            width={50}
                            height={50}
                            alt="logo"
                        />
                        <p className="text-white font-bold text-lg">Vanadhikar Atlas</p>
                    </div>

                    
                    <div className="hidden md:flex gap-10 items-center">
                        <select className="text-white font-bold text-lg bg-transparent">
                            <option>Services</option>
                        </select>
                        <p className="text-white font-bold text-lg">How to Claim?</p>
                        <p className="text-white font-bold text-lg">Contact Us</p>
                    </div>

                    
                    <div className="hidden md:flex text-white bg-green-700 items-center gap-2">
                        <EarthIcon className="text-white text-lg" />
                        <select className="text-shadow-black font-bold text-xs bg-transparent">
                            <option className="bg-black">Hindi</option>
                            <option className="bg-black">English</option>
                        </select>
                    </div>

                    
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                
                {isOpen && (
                    <div className="flex flex-col mt-4 gap-4 md:hidden">
                        <select className="text-white font-bold text-lg bg-transparent">
                            <option>Services</option>
                        </select>
                        <p className="text-white font-bold text-lg ">How to Claim?</p>
                        <p className="text-white font-bold text-lg">Contact Us</p>

                        <div className="flex text-white bg-green-700 items-center gap-2">
                            <EarthIcon className="text-white text-lg" />
                            <select className="text-shadow-black font-bold text-xs bg-transparent">
                                <option className="bg-black">Hindi</option>
                                <option className="bg-black">English</option>
                            </select>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
