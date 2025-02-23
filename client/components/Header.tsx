"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import TEAcompaña from "@/public/TEAcompaña.png";
import IMGLogo from "@/public/Group.png";
import LOGIN from "@/public/Login.png";
import CASA from "@/public/home.png";
import HI from "@/public/sayHi.png";
import MANITO from "@/public/manito.png";
import MANOS from "@/public/manos.png"
import FAQS from "@/public/faqs.png";
import CLOSE from "@/public/close.png";
import BARS from "@/public/bars.png";

export default function Header() {

    return (
        <header className="absolute top-0 w-[100dvw] flex justify-around items-center p-[.5rem_2rem] gap-4 bg-[#FAEDDA]">
            <div className="flex gap-2 justify-center items-center">
                <Link href={"/#"}>
                    <Image src={IMGLogo} alt="Logo TEA" width={80} height={70} />
                </Link>
                <Link href="/#">
                    <Image src={TEAcompaña} alt="Web Name - TEAcompania" width={150} />
                </Link>
            </div>

            <nav className="hidden min-[1000px]:flex">
                <ul className="grid grid-cols-5 gap-3">
                    <li className="flex justify-center items-center ">
                        <Button variant={"TDA"} className="w-full">
                            <Link href={"/"} className="text-[12px] font-bold">Inicio</Link>
                        </Button>
                    </li>
                    <li className="flex justify-center items-center">
                        <Button variant={"TDA"} className="w-full">
                            <Link href={"/"} className="text-[12px] font-bold">Quienes Somos</Link>
                        </Button>
                    </li>
                    <li className="flex justify-center items-center">
                        <Button variant={"TDA"} className="w-full">
                            <Link href={"/"} className="text-[12px] font-bold leading-none">Contenido <br />de Apoyo</Link>
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


            <nav className="fixed right-0 top-0 h-[100dvh] w-[40%] bg-[#44D3B5] hidden">
                <Image src={CLOSE} alt="Close-Menu" width={50} className="absolute m-[2rem_0_0_80%]"></Image>
                <ul className="flex flex-col justify-start mt-[12rem] items-start gap-3 h-full">
                    <li className="">
                        <Button variant={"TDAMobile"} className="flex justify-center items-center">
                            <Image src={CASA} alt="Home" width={35}></Image>
                            <Link href={"/"} className="text-[12px] font-bold w-full text-2xl">
                                Inicio
                            </Link>
                        </Button>
                    </li>
                    <li className="">
                        <Button variant={"TDAMobile"}>
                            <Image src={HI} alt="Hi" width={35}></Image>
                            <Link href={"/"} className="text-[12px] font-bold text-2xl">Quienes Somos</Link>
                        </Button>
                    </li>
                    <li className="">
                        <Button variant={"TDAMobile"} >
                            <Image src={MANITO} alt="Hand" width={35}></Image>
                            <Link href={"/"} className="text-[12px] font-bold leading-none text-2xl">Contenido <br />de Apoyo</Link>
                        </Button>
                    </li>
                    <li className="">
                        <Button variant={"TDAMobile"}>
                            <Image src={MANOS} alt="Hands" width={35}></Image>
                            <Link href={"/"} className="text-[12px] font-bold text-2xl">Comunidad</Link>
                        </Button>
                    </li>
                    <li className="">
                        <Button variant={"TDAMobile"}>
                            <Image src={FAQS} alt="Question" width={35}></Image>
                            <Link href={"/"} className="text-[12px] font-bold text-2xl">FAQs</Link>
                        </Button>
                    </li>
                </ul>
                <Button className="absolute left-[35%] bottom-[6rem]">
                    Iniciar Sesión
                </Button>
            </nav>

            <div>
                <Button className="bg-[#3662C1] hover:bg-[#294a91] flex justify-center items-center">
                    <Image src={LOGIN} alt="login-logo" width={16} />
                    <Link href={"/login"}>
                        Iniciar Sesión</Link>
                </Button>
            </div>

            <button className="absolute right-[20px] w-[50px] h-[50px] rounded-full bg-[#3662C1] hover:bg-[#4377e9] flex justify-center items-center min-[1000px]:hidden" onClick={() =>  console.log("Menu") }>
                <Image src={BARS} alt="Menu" width={25} ></Image>
            </button>
        </header>
    )
}