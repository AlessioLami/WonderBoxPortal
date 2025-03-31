"use client"

import {store} from "@/app/store"
import {ThemeProvider} from "next-themes"
import {Provider} from "react-redux"

const Providers = ({children}: {children: React.ReactNode}) => {
	return <Provider store={store}>
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
			{children}
		</ThemeProvider>
	</Provider>
}

export default Providers
