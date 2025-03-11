"use client";
import { MapPin, Mail, ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
	return (
		<footer className="relative transition-all bg-no-repeat bg-[#4F73CE] pt-[2rem] pb-8 z-[50]">
			<div className="absolute bg-[url('/footerWave.svg')] bg-cover bg-no-repeat top-[-50px] w-[100dvw] h-[250px] z-[1]"></div>

			<div className="flex flex-col min-[1065px]:flex-row items-center justify-start gap-8 mx-auto px-8 max-w-[1100px] lg:py-14">
				<section className=" m-auto z-[100]">
					<Link href={"/"}>
						<Image
							src={"/logoFooter.png"}
							alt="Logo TEA"
							width={240}
							height={60}
						/>
					</Link>
				</section>

				<div className="flex flex-wrap m-auto justify-center pb-8 min-[800px]:gap-12 text-center sm:text-left z-[100]">
					<section className="flex flex-col gap-8 p-8 text-[#fff]">
						<h2 className="font-bold">RECURSOS</h2>

						<div className="flex flex-col gap-2">
							<small className="hover:underline cursor-pointer">
								Comunidad
							</small>
							<small className="hover:underline cursor-pointer">
								Guías de apoyo
							</small>
							<small className="hover:underline cursor-pointer">
								Crea tu perfil
							</small>
							<small className="hover:underline cursor-pointer">FAQs</small>
						</div>
					</section>

					<section className="flex flex-col gap-8 p-8 text-[#fff] ">
						<h2 className="font-bold">NOSOTROS</h2>
						<div className="flex flex-col gap-2">
							<small className="hover:underline cursor-pointer">
								Quiénes Somos
							</small>
							<small className="hover:underline cursor-pointer">
								Información útil
							</small>
							<small className="hover:underline cursor-pointer">Contacto</small>
						</div>
					</section>

					<section className="flex flex-col gap-8 p-8 text-[#fff]">
						<h3 className="font-bold">CONTACTO</h3>
						<div className="flex flex-col gap-4">
							<small className="hover:underline cursor-pointer flex gap-2">
								<MapPin />
								Buenos Aires, Argentina
							</small>
							<small className="hover:underline cursor-pointer flex gap-2">
								<Mail />
								teacompsoporte@gmail.com
							</small>
						</div>
					</section>
				</div>
			</div>
			<button
				onClick={(e) => {
					e.preventDefault();
					window.scrollTo({ top: 0, behavior: "smooth" });
				}}
				className="absolute right-10 bottom-10 text-[#5881C1] bg-[#fff] p-1.5 rounded-full hover:shadow-[0_0_12px_#000] transition-all"
			>
				<ArrowUp />
			</button>
			<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 text-white">
				<span className=" font-bold">TEACOMPAÑO &copy;</span>
				{
					//<div className="h-[10px] w-[10px] border border-white bg-[#7d98dd5b] rounded-full p-1 translate-y-[-1px]"></div>
				}
				<small>2025</small>
			</div>
		</footer>
	);
}
