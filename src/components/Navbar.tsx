"use client"
import { SidebarTrigger } from "./ui/sidebar"
import { Separator } from "./ui/separator"
import ThemeButton from "./ThemeButton"
import ProfilePicture from "./ProfilePicture"

const Navbar = ({title}) => {
	return <div className="p-2 text-3xl font-bold h-12 flex items-center border-b-2 border-zinc-900">
					<SidebarTrigger/>
					<Separator orientation="vertical" className="mx-2 border-[0.1px] border-zinc-900"/>
						<div className="flex justify-between w-full">
							<h1 className="text-xl">{title}</h1>
							<div className="flex gap-2 justify-center items-center text-[20px] text-center">
								<ThemeButton/>
								<ProfilePicture/>
						    </div>
						</div> 
				</div>
}

export default Navbar
