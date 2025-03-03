import Link from "next/link"
import Image from "next/image"
import {
    Card,
    CardHeader, 
    CardTitle
} from "@/components/ui/card"

export const links = [
    { name: "¿Qué terapias pueden ayudar?", src: "/cardGuia1.svg" },
    { name: "Berrinches y autismo infantil", src: "/cardGuia2.svg" },
    { name: "Recursos Pictogramas", src: "/cardGuia3.svg" },
    { name: "Cómo ayudar a controlar sus emociones", src: "/cardGuia4.svg" },
    { name: "Autismo con el entorno escolar", src: "/cardGuia5.svg" },
    { name: "¿Qué es la neurodiversidad y la neurodivergencia?", src: "/cardGuia6.svg" },
    { name: "¿Cómo se gestiona el Cud?", src: "/cardGuia7.svg" },
    { name: "Guía para celebrar un cumpleaños de peques autistas", src: "/cardGuia8.svg" },
    { name: "¿Cómo elegir al terapeuta de tu peque?", src: "/cardGuia9.svg" }
];

export default function Guia() {

    return (
        <div className="bg-bgSoftCl w-[100dvw] min-h-[100dvh] max-h-[max-content] overflow-hidden">
            <header className="bg-bgSoftCl pt-[4rem] gap-4 relative z-50">
                <div className="container mx-auto max-w-[90%] xl:max-w-[1100px] flex justify-between items-center">
                    <div className="flex gap-2 justify-center items-center">
                        <Link href={"/#"}>
                            <Image src={"/logo.svg"} alt="Logo TEA" width={240} height={60} />
                        </Link>
                    </div>

                </div>
            </header>
            <section className="flex flex-col justify-center items-start m-auto p-[3rem]">
                <h1 className="text-xl custom-sm:text-3xl w-full font-bold text-center pb-4">Guías Informativas</h1>
                <div className="grid grid-cols-1 custom-sm:grid-cols-2 custom-md:grid-cols-3 m-auto gap-6 sm:gap-12 h-[max-content] max-w-[1200px] place-items-center">
                    {links.map((link, index) => {
                        return (
                            <Card className="relative m-auto w-[90%] h-[120px] min-[500px]:min-h-[300px] sm:min-w-[290px] flex justify-center items-center text-center rounded-[3rem] shadow-[0_6px_6px_#0000005a] bg-transparent border-none  cursor-pointer hover:opacity-[.9] overflow-hidden" key={index}
                            >
                                <div className="absolute inset-0 bg-cover bg-center rounded-[3rem]"
                                    style={{
                                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${link.src})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }} />
                                <CardHeader className="relative z-10 ">
                                    <CardTitle className="text-xl min-[500px]:text-3xl text-white ">{link.name}</CardTitle>
                                </CardHeader>
                            </Card>
                            )
                        })
                    }
                </div>
            </section >
        </div >
    )
}
