
// import {
// NavigationMenu,
// NavigationMenuContent,
// NavigationMenuItem,
// NavigationMenuLink,
// NavigationMenuList,
// NavigationMenuTrigger,
// navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu"

//import {
	// Card,
	// CardContent,
	// CardDescription,
	// CardFooter,
	// CardHeader,
	// CardTitle,
//} from "@/components/ui/card"

import Header from "@/components/Header";


export default async function Home() {

	return (
		<div className="">
			<Header />
			<main className="flex flex-col gap-8 row-start-2 items-center mt-40">

				<h1 className="text-3xl">Te acompaño</h1>

			</main>
		</div>
	);
}


// <NavigationMenu>-
// 	<NavigationMenuList className=" grid-cols-6 gap-2">
// 		<NavigationMenuItem>
// 			<Link href="/#" legacyBehavior passHref>
// 				<Button  variant={"TDA"} className="w">
// 					<NavigationMenuLink className="">
// 						Inicio
// 					</NavigationMenuLink>
// 				</Button>
// 			</Link>
// 		</NavigationMenuItem>
// 		<NavigationMenuItem>
// 			<Link href="/#" legacyBehavior passHref>
// 				<Button variant={"TDA"} className="w">
// 					<NavigationMenuLink className="">
// 						Quienes Somos
// 					</NavigationMenuLink>
// 				</Button>
// 			</Link>
// 		</NavigationMenuItem>
// 		<NavigationMenuItem className="translate-y-[-2px]">
// 			<Link href="/#" legacyBehavior passHref>
// 				<Button variant={"TDA"} className="w">
// 					<NavigationMenuLink className="text-xs ">
// 						Contenido <br />de Apoyo
// 					</NavigationMenuLink>
// 				</Button>
// 			</Link>
// 		</NavigationMenuItem>
// 		<NavigationMenuItem>
// 			<Link href="/#" legacyBehavior passHref>
// 				<Button variant={"TDA"} className="">
// 					<NavigationMenuLink className="">
// 						Comunidad
// 					</NavigationMenuLink>
// 				</Button>
// 			</Link>
// 		</NavigationMenuItem>
// 		<NavigationMenuItem>
// 			<Link href="/#" legacyBehavior passHref>
// 				<Button variant={"TDA"} className="">
// 					<NavigationMenuLink className="">
// 						FAQs
// 					</NavigationMenuLink>
// 				</Button>
// 			</Link>
// 		</NavigationMenuItem>
// 	</NavigationMenuList>

// </NavigationMenu>