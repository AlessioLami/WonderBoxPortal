
import "./globals.css";
import type { Metadata } from "next";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar"
import AppSidebar from "@/components/Sidebar"
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Wonderbox Portal",
};

export default function Layout({ children }: {children: React.ReactNode}) {
	return <html suppressHydrationWarning>
				<body>
							<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>											{children}
							</ThemeProvider>
				</body>
			</html>
}

