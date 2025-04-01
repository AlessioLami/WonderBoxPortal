"use client"

import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "@radix-ui/react-dropdown-menu"
import {Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import {Button} from "./ui/button"
import {useLogoutMutation} from "@/app/services/backendApi"
import {redirect} from "next/navigation"


const NavProfile = () => {

	const [ logout ] = useLogoutMutation()
	const logoutRedirect = () => {
		logout("")
		redirect("/login")
	}

	return <DropdownMenu>
				<DropdownMenuTrigger>
				<div className="flex items-center gap-3">
				<Avatar className="h-8 w-8 rounded-lg grayscale">
					<AvatarImage/>
					<AvatarFallback className="rounded-lg">AL</AvatarFallback>
				</Avatar>
				<div className="text-left text-sm truncate leading-tight">
					<h1>Iotalab</h1>
					<p className="text-muted-foreground">iotalab@gmail.com</p>
				</div>
			</div>
				</DropdownMenuTrigger>	
				<DropdownMenuContent>
					<Button onClick={() => logoutRedirect()}>Logout</Button>
				</DropdownMenuContent>
			</DropdownMenu>
}

export default NavProfile
