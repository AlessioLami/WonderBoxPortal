"use client"

import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "./ui/sidebar"
import { ChartColumn, LayoutDashboard } from "lucide-react"

const NavMain = () => {

	const items = [
		{name: "Dashboard", icon: LayoutDashboard, path: "/"},
		{name: "Statistics", icon: ChartColumn, path: "/statistics"},
	]

	return <SidebarGroup>
			<SidebarGroupContent>
				<SidebarMenu>
					{items.map((item) => (
						<SidebarMenuItem key={item.name}>
							<SidebarMenuButton >
								<a href={item.path} className="flex truncate leading-tight gap-2 items-center">
									<item.icon/>
									<span className="font-semibold">{item.name}</span>
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
						))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
}

export default NavMain
