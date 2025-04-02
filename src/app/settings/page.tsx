import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import AppSidebar from "@/components/Sidebar"

const Settings = () => {
	return <SidebarProvider>
			  <AppSidebar/>
			  <SidebarInset>

			  </SidebarInset>
		  </SidebarProvider>
}

export default Settings
