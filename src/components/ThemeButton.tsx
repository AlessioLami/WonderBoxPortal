
import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { Sun, Moon } from "lucide-react"

const ThemeButton = () => {

	const { theme, setTheme } = useTheme()

	return (
		<Button className={`${theme==="light" ? "bg-black": "bg-white"}`}  onClick={() => setTheme(theme=="light"? "dark": "light")}>{theme==="light"? <Moon/> : <Sun/>}</Button>
	)
}

export default ThemeButton
