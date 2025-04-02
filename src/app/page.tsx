"use client"

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/Sidebar";
import ParameterCard from "@/components/ParameterCard";
import StatsBar from "@/components/StatsBar";
import ParameterChart, {ChartData, ChartConfig} from "@/components/ParameterChart";
import Navbar from "@/components/Navbar";

import { useGetMeasurementsQuery } from "./services/backendApi";
import {Loader2} from "lucide-react";


const chartConfig: ChartConfig = {
	temperature: {
		label: "Temperature"
	},
	humidity: {
		label: "Humidity"
	}
}

const chartData: ChartData = [
	{ day: 1, value: 40 },
	{ day: 2, value: 30 },
	{ day: 3, value: 32 },
	{ day: 4, value: 38 },
	{ day: 5, value: 36 },
	{ day: 6, value: 35 },
	{ day: 7, value: 31 },
]

export default function Home() {

	const deviceId = "WXFSTURL00.00030"
	const dateStart = "2025-01-23T09:00:00Z"


	const {data, error, isLoading } = useGetMeasurementsQuery({deviceId, dateStart})
	
	const parameters = data?.data?.logDispo[0]?.measurament?.map(parameter => ({
		name: parameter.parameter,
		value: parameter.value,
		limitResponse: parameter.limitResponse,
		unit: parameter.unit,
		path: `/${parameter.parameter}`,
		limit: {type: "range", min: 0, max: 120} 
	})) ?? []


  return(<SidebarProvider>
			  <AppSidebar/>
			  <SidebarInset>

			 <Navbar title="Dashboard"/>	

			<div className="p-5 flex flex-col items-center">
				{isLoading ? 
					(
					<div className="flex justify-center items-center flex-col h-64">
						<Loader2 className="w-12 h-12 animate-spin text-zinc-600"></Loader2>
					</div>
				) : 
					(
						<>
							<StatsBar/>
							<div className="flex flex-col justify-center items-">
								<div className=" grid  sm:gap-x-3 md:gap-x-5 lg:gap-x-10 2xl:gap-20 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 justify-between items-center w-full">
									{parameters.map((param) => (<ParameterCard key={param.name} {...param}/>))}
								</div>
							<ParameterChart chartConfig={chartConfig} chartData={chartData}/>
							</div>
						</>
				)}
				
		</div>	
			  </SidebarInset>
		  </SidebarProvider>
		)
}
