"use client"

import { Separator } from "@radix-ui/react-separator";
import { MapPin, Mail, ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export function Footer() {

    return (
        <footer className="bg-[#BED2FA] relative">
            <div className="container h-[max-content] w-[100dvw] py-12 flex flex-col justify-center items-center md:flex-row md:pl-12 md:justify-around">
                <section className="pl-4 flex gap-8">
                    <div>
                        <div className="pr-4 py-4">
                            <Link href={"/"}>
                                <Image src={"/logo.svg"} alt="Logo TEA" width={240} height={60} />
                            </Link>
                        </div>

                        <div className="w-[250px] h-[1px] bg-black" />

                        <div className="flex flex-col gap-8 pb-12">
                            <h3 className="font-bold pt-4 text-[#5881C1] text-xl">Contacto</h3>
                            <span className="flex gap-2 text-sm"><MapPin />Buenos Aires, Argentina</span>
                            <span className="flex gap-2 text-sm"><Mail />teacompsoporte@gmail.com</span>
                        </div>
                    </div>

                    <div className="w-[1px] h-[300px] bg-black hidden md:block" />

                </section>

                <div className="flex">
                    <section className="flex flex-col gap-8 p-8 min-[850px]:mx-12">

                        <h2 className="text-[#FA4A0C] text-2xl">Recursos</h2>

                        <div className="flex flex-col gap-2">
                            <small className="hover:underline cursor-pointer">Comunidad</small>
                            <small className="hover:underline cursor-pointer">Guías de apoyo</small>
                            <small className="hover:underline cursor-pointer">Crea tu perfil</small>
                            <small className="hover:underline cursor-pointer">FAQ's</small>
                        </div>

                    </section>

                    <section className="flex flex-col gap-8 p-8 min-[850px]:mx-12">

                        <h2 className="text-[#FA4A0C] text-2xl">Nosotros</h2>
                        <div className="flex flex-col gap-2">
                            <small className="hover:underline cursor-pointer">Quiénes Somos</small>
                            <small className="hover:underline cursor-pointer">Información útil</small>
                            <small className="hover:underline cursor-pointer">Contacto</small>
                        </div>

                    </section>
                </div>
            </div>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="absolute right-10 bottom-10 text-[#FA4A0C] bg-[#00000085] p-1.5 rounded-full hover:shadow-[0_0_12px_#000] transition-all">
                <ArrowUp />
            </button>
        </footer>
    )
}