"use client"

import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroup } from "@/components/ui/sidebar"
import {LayoutDashboardIcon} from "lucide-react"
import  NavMain  from "@/components/NavMain"
import NavProfile from "./NavProfile"

const data = {
	navMain: [
		{
			title: "Dashboard", 
			url: "/",
			icon: LayoutDashboardIcon,
		}
	]
}

const AppSidebar = () => {

	return (
		<div className="border-r-1 border-zinc-900">
		<Sidebar collapsible="offcanvas" className="border-zinc-900">
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton>
							<a href="/">
								<span className="text-base font-semibold">Wonderbox</span>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent className="flex justify-start items-center justify-between">
				<SidebarGroup>
					<NavMain items={data.navMain}></NavMain>
				</SidebarGroup>
				<SidebarGroup>
					<NavProfile/>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
		</div>
		
	)
}

export default AppSidebar
