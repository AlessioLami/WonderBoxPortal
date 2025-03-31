"use client"

import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "@radix-ui/react-dropdown-menu"
import {Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"

const NavProfile = () => {
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
				<DropdownMenuContent>TEST</DropdownMenuContent>
			</DropdownMenu>
}

export default NavProfile
