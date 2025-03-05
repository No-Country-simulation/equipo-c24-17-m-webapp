import Link from "next/link"
import Image from "next/image"
import {
    Card,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { Footer } from "@/components/Footer"
import Header from "@/components/Header";


type LinksT = {
    title: string,
    src: string,
    href: string
}

const links: LinksT[] = [
    { title: 'AUTISMO Y SUS DERECHOS', src: '/cardComunidad1.svg', href:'discapacidadyderechos.org.ar' },
    { title: 'HABLEMOS DE AUTISMO', src: '/cardComunidad2.svg', href:'https://diaazul.wordpress.com/' },
    { title: 'TRIBU PEQUES CON TEA', src: '/cardComunidad3.svg', href:'https://chat.whatsapp.com/' },
    { title: 'PADRES DE NENES CON AUTISMO', src: '/cardComunidad4.svg', href:'https://www.facebook.com/' },
    { title: 'ASOCIACIÓN ARGENTINA DE PADRES DE AUTISTAS', src: '/cardComunidad5.svg', href:'https://apadea.org.ar/' },
    { title: 'AUTISMO EN VIVO', src: '/cardComunidad6.svg', href:'https://x.com/EnvivoAutismo' }
];

export default function Guia() {

    return (
        <div className="bg-bgSoftCl w-[100dvw] min-h-[100dvh] max-h-[max-content] overflow-hidden" id="guias">
            <Header />
            <section className="flex flex-col justify-center items-center m-auto p-[3rem] gap-4" >
                    {
                        links.map((link, index) => {
                            return (
                                <Card className="w-[100%] md:w-[80%] h-[150px] relative" key={index} >
                                    <CardHeader className="flex flex-row gap-4">
                                        <Image src={link.src} height={0} width={160} alt="Tarjeta Comunidad" />
                                        <CardTitle className="text-md">
                                            {link.title}
                                        </CardTitle>
                                        <Link href={'/'} target="_blank">
                                            <small className="absolute bottom-1 right-5 text-gray-500 hover:underline cursor-pointer">{link.href}</small>
                                        </Link>
                                    </CardHeader>
                                </Card>
                            )}
                        )
                    }
            </section >

            <Footer />
        </div >
    )
}
