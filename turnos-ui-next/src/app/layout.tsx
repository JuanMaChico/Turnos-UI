import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Turnos Online",
	description: "App de Turnos Online",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="es">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
