"use client"

import {Activity, CloudAlert, SquareActivity, Timer} from "lucide-react";
import {Button} from "./ui/button";
import Link from "next/link";


const StatsBar = () => {

	const stats =  [
		{name: "Up Time", value: "22d 7h 22m", icon: Activity},
		{name: "Next Update", value: "9m 30s", icon: Timer},
		{name: "Packet Loss", value: "0%", icon: CloudAlert}
	]


	return(
		
		<>
			<div className="p-5 border-2 border-zinc-800 dark:bg-zinc-900 w-full h-20 rounded-md flex justify-between items-center">
				<div className="flex">
				{stats.map((stat) => (
					<div className="p-2 mr-0 md:mr-5 flex items-center justify-center gap-2" key={stat.name}>
						<stat.icon className="hidden sm:block" size={36}/>	
					<div className="leading-tight">
						<h1 className="font-bold text-md sm:text-[13px] md:text-lg">{stat.name}</h1>
						<p className="font-semibold text-green-500 text-sm">{stat.value}</p>
					</div>
					</div>

				))}

			</div>	
				<Button className="h-10 w-10 sm:h-auto sm:w-auto">
					<Link  className="flex justify-center items-center gap-2 font-bold" href="/activity">
						<SquareActivity/> <span className="hidden sm:block">Activity Graph</span>
					</Link>
				</Button>

			</div>
			
		</>


	);
}

export default StatsBar


