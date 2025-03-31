"use client"

import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/Sidebar";
import {Separator} from "@/components/ui/separator";
import ParameterCard from "@/components/ParameterCard";
import ThemeButton from "@/components/ThemeButton";
import ProfilePicture from "@/components/ProfilePicture"
import StatsBar from "@/components/StatsBar";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis } from "recharts"
import {ChartContainer, ChartTooltip, ChartTooltipContent} from "@/components/ui/chart";

import { useGetMeasurementsQuery } from "./services/backendApi";


const chartConfig = {
	temperature: {
		label: "Temperature"
	}
}

const chartData = [
	{ month: "Jan", temperature: 40 },
	{ month: "Feb", temperature: 30 },
	{ month: "Mar", temperature: 32 },
	{ month: "Apr", temperature: 38 }
]



export type Limit = 
	| { type: "range"; min: number; max: number}
	| { type: "greatherThan"; value: number }
	| { type: "lessThan"; value: number };

export default function Home() {

	const {data, error, isLoading } = useGetMeasurementsQuery()

	if(error) console.log(error)
	console.log(data)

	const parameters = [
		{ name: "Temperature", value: 35, unit: "°C", path: "/temperature", limit: {type: "range", min: 20, max: 45}},
		{ name: "Humidity", value: 90, unit: "%", path: "/humidity", limit: {type: "range", min: 30, max: 60}},
		{ name: "Light Intensity", value: 200, unit: "lux", path: "/light_intensity", limit: {type: "greatherThan", value: 100} },
		{ name: "Noise", value: 50, unit: "dB", path: "/noise", limit: {type: "lessThan", value: 70} },
	]	

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

			<div className="p-5 flex flex-col">
				<StatsBar/>
				<div className="flex justify-center items-start sm:justify-start gap-30">
					<div className=" grid  grid-cols-1 w-80 sm:w-60 2xl:w-70">
						{parameters.map((param) => (<ParameterCard key={param.name} {...param}/>))}
					</div>
				<div className="hidden sm:block dark:bg-zinc-900 border-2 border-zinc-800 w-full my-5 rounded-sm p-2 ">
					<ResponsiveContainer>
						<ChartContainer config={chartConfig}>
							<AreaChart  accessibilityLayer data={chartData}  margin={{top: 30,  left: 12, right: 12}}>
								<CartesianGrid  vertical={true}/>
								<XAxis  dataKey="month" tickLine={false} axisLine={false} tickMargin={2}/>
								<ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" hideLabel/>}/>
								<Area dataKey="temperature" type="linear" fill="gray" fillOpacity={0.3} stroke=""/>
						</AreaChart>
					</ChartContainer>
					</ResponsiveContainer>
				
					<h1 className="font-semibold text-xl">Temperature</h1>
				</div>
			</div>

		</div>	
			  </SidebarInset>
		  </SidebarProvider>
}
