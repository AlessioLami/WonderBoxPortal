
import "./globals.css";
import type { Metadata } from "next";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Wonderbox Portal",
};

export default function Layout({ children }: {children: React.ReactNode}) {
	return <html suppressHydrationWarning>
				<body>
					<Providers>{children}</Providers>
				</body>
			</html>
}

