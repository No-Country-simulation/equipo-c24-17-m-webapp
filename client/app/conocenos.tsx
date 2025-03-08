import React from "react";
import Image from "next/image";
export default function Conocenos() {
	return (
		<section className="py-20 bg-white">
			<div className="container w-[90%] mx-auto  lg:max-w-[1000px] ">
				<h1 className=" text-start text-3xl font-semibold md:hidden">
					Conocenos
				</h1>
				<div className="flex  flex-col items-center justify-center gap-14 mt-8 md:flex-row  ">
					<div className="md:w-[50%]">
						<Image
							src={"/conocenos-image.svg"}
							alt="nene abrazandose"
							className=" "
							height={500}
							width={400}
						/>
					</div>

					<div className="flex flex-col gap-6 md:w-[50%] relative">
						<h1 className="hidden md:block text-start text-3xl font-semibold">
							Conocenos
						</h1>
						<p className=" text-darkCl leading-6">
							TEAcompaña es una plataforma digital gratuita que, mediante un
							sistema de herramientas reúne en un solo lugar a familias,
							profesionales y recursos especializados en autismo. Regístrate y
							crea tu perfil para formar parte de una comunidad que acompaña,
							informa y apoya en cada etapa del desarrollo.
						</p>
						<p className="font-bold text-darkCl">
							TODO EN UN MISMO ESPACIO PARA VOS.
						</p>
						<Image
							src={"/piezas.svg"}
							alt="piezas rompe cabezas"
							height={400}
							width={200}
							className="absolute -top-20 -right-10 xl:-right-20  hidden lg:block"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
