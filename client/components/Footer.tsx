"use client"

import { Separator } from "@radix-ui/react-separator";
import { MapPin, Mail, ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export function Footer() {
    
    return (
        <footer className="bg-[#BED2FA] relative">
            <div className="container h-[max-content] w-[100dvw] py-12 pl-12 flex gap-[4rem]">
                <section className="pl-4 flex gap-8">
                    <div>
                        <div className="pr-4 py-4">
                            <Link href={"/#"}>
                                <Image src={"/logo.svg"} alt="Logo TEA" width={240} height={60} />
                            </Link>
                        </div>

                        <div className="w-[250px] h-[1px] bg-black" />

                        <div className="flex flex-col gap-8 pb-12">
                            <h3 className="font-bold pt-4 text-[#5881C1] text-2xl">Contacto</h3>
                            <span className="flex gap-2"><MapPin />Buenos Aires, Argentina</span>
                            <span className="flex gap-2"><Mail />teacompsoporte@gmail.com</span>
                        </div>
                    </div>

                    <div className="w-[1px] h-[300px] bg-black" />

                </section>

                <section className="flex flex-col gap-8 p-8 mx-12">

                    <h2 className="text-[#FA4A0C] text-2xl">Recursos</h2>

                    <div className="flex flex-col gap-2">
                        <h3>Comunidad</h3>
                        <h3>Guías de apoyo</h3>
                        <h3>Crea tu perfil</h3>
                        <h3>FAQ's</h3>
                    </div>

                </section>

                <section className="flex flex-col gap-8 p-8 mx-12">

                    <h2 className="text-[#FA4A0C] text-2xl">Recursos</h2>
                    <div className="flex flex-col gap-2">
                        <h3>Comunidad</h3>
                        <h3>Guías de apoyo</h3>
                        <h3>Crea tu perfil</h3>
                        <h3>FAQ's</h3>
                    </div>

                </section>
            </div>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="absolute right-10 bottom-10 text-[#FA4A0C] bg-[#00000085] p-1.5 rounded-full">
                <ArrowUp />
            </button>
        </footer>
    )
}