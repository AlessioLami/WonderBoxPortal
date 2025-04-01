"use client"

import { Limit } from "@/app/page"
import { Button } from "./ui/button";
import Link from "next/link";
import { ChartNoAxesCombined, Smile, Frown, Thermometer, Droplets, Lightbulb, Volume2} from "lucide-react";


type Limit = 
	| { type: "range"; min: number; max: number}
	| { type: "greatherThan"; value: number }
	| { type: "lessThan"; value: number };

export type ParameterProps = {
	name: string,
	value: number,
	limitResponse: string,
	unit: string,
	path: string,
	limit: Limit
}



const ParameterCard = (props: ParameterProps) => {

	const isHappy = props.limitResponse === "OK";
	const formatLimit = (limit) => {
		switch(limit.type){
			case "range":
				return `${limit.min}-${limit.max}`
			case "greatherThan":
				return `>${limit.value}`
			case "lessThan":
				return`<${limit.value}`
			default:
				return "null"
		}
	}

	const formatSymbol = (name: string) => {
		switch(name){
			case "Temperature":
				return <Thermometer/>
			case "Humidity":
				return <Droplets/>
			case "Light Intensity":
				return <Lightbulb/>
			case "Noise":
				return <Volume2/>
		}
	}
	
	return (
		<>
			<div className="-mx-[1px] p-5 bg-white border-2 border-zinc-800  
				dark:bg-zinc-900 rounded-sm m-5 flex flex-col justify-center 
				items-center max-w-120 w-80 h-70 sm:w-50 sm:h-60 md:w-60 md:h-60 lg:w-55 2xl:w-70 
				2xl:h-70 truncate leading-tight">

				<Button onClick={() => console.log(props.name)} className="absolute  max-w-120 w-80 h-70 sm:w-60 sm:h-60 md:h-60 2xl:w-70 2xl:h-70 z-100 hidden sm:block bg-trasparent hover:bg-zinc-600 opacity-0 hover:opacity-20 transition-opacity transition-colors"></Button>
				<h1 className="mb-[10px] font-bold text-xl flex items-center gap-2">{props.name} {formatSymbol(props.name)}</h1>
				{isHappy ? <Smile color={"green"} size={90}/> : <Frown color="red" size={90}/>}
				<h1 className="mt-[10px] font-bold text-4xl sm:text-5xl">{props.value}{props.unit}</h1>
				<div className="flex mt-3 sm:mt-5 justify-between sm:justify-center items-center w-full">
					<p className="font-bold text-xl">{formatLimit(props.limit)}{props.unit}</p>
					<Button className="flex sm:hidden h-6"><Link className="flex items-center gap-2 font-bold text-md"  href={props.path}>Graph <span><ChartNoAxesCombined/></span></Link></Button>
			    </div>
			</div>
		</>	
	)

}

export default ParameterCard;
