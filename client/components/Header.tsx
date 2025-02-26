"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import TEAcompaña from "@/public/TEAcompaña.png";
import IMGLogo from "@/public/Group.png";
import BARS from "@/public/bars.png";
import { useState } from "react";
import { CircleX, Hand, House, LogIn, MessageCircleQuestion } from "lucide-react";

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleOpenMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <header className="absolute top-0 w-[100dvw] flex md:justify-between  items-center p-[.5rem_2rem] gap-4 bg-[#FAEDDA">
            <div className="flex gap-2 justify-center items-center">
                <Link href={"/#"}>
                    <Image src={IMGLogo} alt="Logo TEA" width={80} height={70} />
                </Link>
                <Link href="/#">
                    <Image src={TEAcompaña} alt="Web Name - TEAcompania" width={150} className="hidden md:block" />
                </Link>
            </div>

            <div className="flex ">
                <nav className=" transition-all hidden md:flex">
                    <ul className="grid grid-cols-3 gap-3">
                        <li className="flex justify-center items-center ">
                            <Button variant={"TDA"} className="w-full">
                                <Link href={"/"} className="text-[12px] font-bold">Conocenos</Link>
                            </Button>
                        </li>
                        <li className="flex justify-center items-center">
                            <Button variant={"TDA"} className="w-full">
                                <Link href={"/"} className="text-[12px] font-bold">Comunidad</Link>
                            </Button>
                        </li>
                        <li className="flex justify-center items-center">
                            <Button variant={"TDA"} className="w-full">
                                <Link href={"/"} className="text-[12px] font-bold">FAQs</Link>
                            </Button>
                        </li>
                    </ul>
                </nav>


                {
                    menuOpen ? (
                        <nav className={`fixed right-0 top-0 h-[100dvh] w-[70%] bg-[#5F77B3] z-100 sm:w-[50%] md:hidden`}>
                            <CircleX className="absolute m-[2rem_0_0_70%] text-white" size={50} onClick={() => {
                                setMenuOpen(!menuOpen);
                            }}/>
                            <ul className="flex flex-col justify-start mt-[12rem] items-center gap-4 h-full text-2xl">
                                <li className="">
                                    <Button variant={"TDAMobile"}>
                                        <Hand size={35} />
                                        <Link href={"/"} className=" font-bold">Conocenos</Link>
                                    </Button>
                                </li>
                                <li className="">
                                    <Button variant={"TDAMobile"}>
                                        <House size={35} />
                                        <Link href={"/"} className="font-bold">Comunidad</Link>
                                    </Button>
                                </li>
                                <li className="">
                                    <Button variant={"TDAMobile"}>
                                        <MessageCircleQuestion size={35} />
                                        <Link href={"/"} className="font-bold">FAQs</Link>
                                    </Button>
                                </li>
                            </ul>
                            <Button className="absolute bottom-20 w-[70%] left-[15%] bg-[#fff] text-[#3662C1]">
                                Iniciar Sesión
                            </Button>
                        </nav>
                    )
                        : null
                }

                <div>
                    <Button className="bg-[#3662C1] hover:bg-[#294a91] justify-center items-center hidden md:flex">
                        <LogIn size={16} />
                        <Link href={"/login"}>
                            Iniciar Sesión</Link>
                    </Button>
                </div>
            </div>

            <button className={`absolute right-[20px] w-[50px] h-[50px] rounded-full bg-[#3662C1] hover:bg-[#4377e9] flex justify-center items-center md:hidden z-[0] ${menuOpen ? "hidden" : "flex"}`} onClick={() => handleOpenMenu()}>
                <Image src={BARS} alt="Menu" width={25} ></Image>
            </button>
        </header>
    )
}