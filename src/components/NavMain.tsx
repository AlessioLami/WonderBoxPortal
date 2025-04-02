"use client"

import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "./ui/sidebar"
import { ChartColumn, LayoutDashboard, Settings } from "lucide-react"

const NavMain = () => {

	const items = [
		{name: "Dashboard", icon: LayoutDashboard, path: "/"},
		{name: "Statistics", icon: ChartColumn, path: "/statistics"},
		{name: "Settings", icon: Settings, path: "/settings"}
	]

	return <SidebarGroup>
			<SidebarGroupContent>
				<SidebarMenu>
					{items.map((item) => (
						<SidebarMenuItem key={item.name}>
							<a href={item.path}>
							<SidebarMenuButton >
									<item.icon/>
									<span className="font-semibold">{item.name}</span>
							</SidebarMenuButton>
							</a>
						</SidebarMenuItem>
						))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
}

export default NavMain
