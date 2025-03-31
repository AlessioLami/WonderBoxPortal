"use client"

import { Limit } from "@/app/page"
import { Button } from "./ui/button";
import Link from "next/link";
import { ChartNoAxesCombined, Smile, Frown, Thermometer, Droplets, Lightbulb, Volume2} from "lucide-react";


const isValueWithinLimits = (value: number, limit: Limit): boolean => {
		switch(limit.type){
			case "range":
				return value >= limit.min && value <= limit.max;
			case "greatherThan":
				return value > limit.value;
			case "lessThan":
				return value < limit.value;
			default:
				return false;

	}
}

type ParameterProps = {
	name: string,
	value: number,
	unit: string,
	path: string,
	limit: Limit
}



const ParameterCard = (props: ParameterProps) => {

	const isWithinLimits = isValueWithinLimits(props.value, props.limit);
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
			<div className="-mx-[1px] p-5 bg-white border-2 border-zinc-800  dark:bg-zinc-900 rounded-sm m-5 flex flex-col justify-center items-center max-w-120 w-80 h-70 sm:w-60 sm:h-60 md:h-60 2xl:w-70 2xl:h-70 truncate leading-tight">
				<h1 className="mb-[10px] font-bold text-xl flex items-center gap-2">{props.name} {formatSymbol(props.name)}</h1>
				{isWithinLimits ? <Smile color={"green"} size={90}/> : <Frown color="red" size={90}/>}
				<h1 className="mt-[10px] font-bold text-4xl">{props.value}{props.unit}</h1>
				<div className="flex mt-3 justify-between items-center w-full">
					<p className="font-bold text-xl">{formatLimit(props.limit)}{props.unit}</p>
					<Button className="h-6"><Link className="flex items-center gap-2 font-bold text-md"  href={props.path}>Graph <span><ChartNoAxesCombined/></span></Link></Button>
			    </div>
			</div>
		</>	
	)

}

export default ParameterCard;
