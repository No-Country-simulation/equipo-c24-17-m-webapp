import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import TEAcompaña from "@/public/TEAcompaña.png";
import IMGLogo from "@/public/Group.png";
import {
	NavigationMenu,
	// NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	// NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import {
	// Card,
	// CardContent,
	// CardDescription,
	// CardFooter,
	// CardHeader,
	// CardTitle,
} from "@/components/ui/card"


export default async function Home() {
	return (
		<div>
			<header className="absolute top-0 w-[100dvw] gap-12 flex justify-center p-[.5rem_2rem]">

				<div className="flex gap-2 justify-center items-center border border-solid border-black">
					<Image src={IMGLogo} alt="Logo TEA" width={80} height={70}></Image>
					<Image src={TEAcompaña} alt="Web Name" width={150}></Image>

				</div>
				<NavigationMenu className="w-[100%] flex justify-center items-center"> 
					<NavigationMenuList className="flex gap-4 justify-center items-center">
						<NavigationMenuItem>
							<Link href="/#" legacyBehavior passHref>
								<Button variant={"destructive"}>
									<NavigationMenuLink >
										Inicio
									</NavigationMenuLink>
								</Button>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="/#" legacyBehavior passHref>
								<Button variant={"destructive"}>
									<NavigationMenuLink >
										Quienes Somos
									</NavigationMenuLink>
								</Button>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="/#" legacyBehavior passHref>
								<Button variant={"destructive"}>
									<NavigationMenuLink>
										Contenido de Apoyo
									</NavigationMenuLink>
								</Button>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="/#" legacyBehavior passHref>
								<Button variant={"destructive"}>
									<NavigationMenuLink>
										Comunidad
									</NavigationMenuLink>
								</Button>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="/#" legacyBehavior passHref>
								<Button variant={"destructive"}>
									<NavigationMenuLink>
										FAQs
									</NavigationMenuLink>
								</Button>
							</Link>
						</NavigationMenuItem>
					</NavigationMenuList>
					<Button>
						<Link href={"/login"}>Iniciar Sesión</Link>
					</Button>
				</NavigationMenu>
			</header>
			<main className="flex flex-col gap-8 row-start-2 items-center mt-40">

				<h1 className="text-3xl">Te acompaño</h1>
				<Button>
				</Button>
			</main>
		</div>
	);
}
