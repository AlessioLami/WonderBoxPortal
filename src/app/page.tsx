"use client"

import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/Sidebar";
import {Separator} from "@/components/ui/separator";
import ParameterCard from "@/components/ParameterCard";
import ThemeButton from "@/components/ThemeButton";
import ProfilePicture from "@/components/ProfilePicture"
import StatsBar from "@/components/StatsBar";
import ParameterChart, {ChartData, ChartConfig} from "@/components/ParameterChart";

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
		limit: {type: "range", min: 30, max: 60} 
	})) ?? []



	/*const parameters = [
		{ name: "Temperature", value: 35, unit: "°C", path: "/temperature", limit: {type: "range", min: 20, max: 45}},
		{ name: "Humidity", value: 90, unit: "%", path: "/humidity", limit: {type: "range", min: 30, max: 60}},
		{ name: "Light Intensity", value: 200, unit: "lux", path: "/light_intensity", limit: {type: "greatherThan", value: 100} },
		{ name: "Noise", value: 50, unit: "dB", path: "/noise", limit: {type: "lessThan", value: 70} },
		]	*/

  return <SidebarProvider>
			  <AppSidebar/>
			  <SidebarInset>

				<div className="p-2 text-3xl font-bold h-12 flex items-center border-b-2 border-zinc-900">
					<SidebarTrigger/>
					<Separator orientation="vertical" className="mx-2 border-[0.1px] border-zinc-900"/>
						<div className="flex justify-between w-full">
							<h1 className="text-xl">Dashboard</h1>
							<div className="flex gap-2 justify-center items-center text-[20px] text-center">
								<ThemeButton/>
								<ProfilePicture/>
						    </div>
						</div> 
				</div>


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
								<div className=" grid  sm:gap-3 md:gap-5 lg:gap-10 2xl:gap-20 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 justify-between items-center w-full">
									{parameters.map((param) => (<ParameterCard key={param.name} {...param}/>))}
								</div>
							<ParameterChart chartConfig={chartConfig} chartData={chartData}/>
							</div>
						</>
				)}
				
		</div>	
			  </SidebarInset>
		  </SidebarProvider>
}
