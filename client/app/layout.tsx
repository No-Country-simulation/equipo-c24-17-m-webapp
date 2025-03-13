import type { Metadata } from "next";
import { Rowdies, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["400", "700"],
});

const rowdies = Rowdies({
	variable: "--font-rowdies",
	subsets: ["latin"],
	weight: ["400", "700"],
});

export const metadata: Metadata = {
	title: "TEAcompaño",
	description: "A cada paso junto a vos",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body
				className={`${poppins.variable} ${rowdies.variable} antialiased font-poppins overflow-x-hidden`}
			>
				{children}
				<Toaster richColors />
			</body>
		</html>
	);
}
