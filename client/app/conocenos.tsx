import React from "react";
import Image from "next/image";
export default function Conocenos() {
	return (
		<section className="my-20">
			<div className="container w-[90%] mx-auto  lg:max-w-[1000px] ">
				<h1 className=" text-start text-3xl ">Conocenos</h1>

				<div className="flex  flex-col items-center justify-center gap-8 mt-8 md:flex-row ">
					<div className="md:w-[50%]">
						<Image
							src={"/conocenos-image.svg"}
							alt="nene abrazandose"
							className=" "
							height={500}
							width={400}
						/>
					</div>

					<div className="flex flex-col md:w-[50%]">
						<Image
							src={"/logo.svg"}
							alt="nene abrazandose"
							className=""
							height={100}
							width={250}
						/>
						<p className="mt-4 text-darkCl leading-6">
							TEAcompaña es una plataforma digital gratuita que, mediante un
							sistema de herramientas reúne en un solo lugar a familias,
							profesionales y recursos especializados en autismo. Regístrate y
							crea tu perfil para formar parte de una comunidad que acompaña,
							informa y apoya en cada etapa del desarrollo.
						</p>
						<p className="font-bold text-darkCl">
							TODO EN UN MISMO ESPACIO PARA VOS.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
