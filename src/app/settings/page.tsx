import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import AppSidebar from "@/components/Sidebar"
import Navbar from "@/components/Navbar"

const Settings = () => {
	return (<SidebarProvider>
			  <AppSidebar/>
			  <SidebarInset>
				<Navbar title="Settings"/>
			  </SidebarInset>
		  </SidebarProvider>)
}

export default Settings
