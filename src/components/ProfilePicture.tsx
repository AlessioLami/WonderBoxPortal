"use client"

import {AvatarFallback} from "@radix-ui/react-avatar"
import { Avatar, AvatarImage } from "./ui/avatar"

const ProfilePicture = () => {

	return(
		<>
			<Avatar className="rounded-lg h-full">
				<AvatarImage src="https://github.com/shadcn.png"/>
				<AvatarFallback>AL</AvatarFallback>
			</Avatar>
		</>
	)
}

export default ProfilePicture
