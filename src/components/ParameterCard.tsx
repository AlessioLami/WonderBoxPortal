"use client"

import  Limit  from "@/app/page"
import { Button } from "./ui/button";
import Link from "next/link";
import { ChartNoAxesCombined, Smile, Frown, Thermometer, Droplets, Lightbulb, Volume2} from "lucide-react";
import { GaugeComponent } from "react-gauge-component"
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

	const formatName = (name: string) => {
		switch(name.toLowerCase()){
			case "temp":
				return "TEMPERATURE"
			case "hum":
				return "HUMIDITY"
			case "pm1":
				return "PM 1"
			case "pm2_5":
				return "PM 2.5"
			case "pm4":
				return "PM 4"
			case "pm10":
				return "PM 10"
			case "spl":
				return "NOISE"
			case "lux":
				return "LIGHT INTENSITY"
			case "voc":
				return "VOX"
			case "nox":
				return "NOX"
			default: 
				return null
		}	
	}

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

	const getGaugeEnds = (value, limit) => {


		switch(limit.type){
			case "range": 
				return {min: limit.min, max: value*1.5}
			case "greatherThan":
				return {min: limit.value, max: value*1.5}
			case "lessThan":
				return {min: 0, max: value*1.5}
		}

	}

	const { min, max } = getGaugeEnds(props.value, props.limit)





	
	return (
		<>
			<div className="-mx-[1px] p-5 bg-white border-2 border-zinc-800  
				dark:bg-zinc-900 rounded-sm m-5 flex flex-col justify-center 
				items-center max-w-120 w-80 h-70 sm:w-50 sm:h-60 md:w-60 md:h-60 lg:w-55 2xl:w-70 
				2xl:h-70 truncate leading-tight">

				<Button onClick={() => console.log(props.name)} className="absolute max-w-120 w-80 h-70 sm:w-50 sm:h-60 md:w-60 md:h-60 lg:w-55 2xl:w-70 
				2xl:h-70 z-100 hidden sm:block bg-trasparent hover:bg-zinc-600 opacity-0 hover:opacity-20 transition-opacity transition-colors"></Button>
				<h1 className="font-bold text-xl flex items-center gap-2">{formatName(props.name)} {formatSymbol(props.name)}</h1>
				<div className="relative">
					<GaugeComponent  type="radial" pointer={{type: "arrow", color: "white", width: 20}} value={props.value} arc={{
					width: 0.2,
					padding: 0.05,
					cornerRadius: 5,
					subArcs: [
						{limit: 0},
						{limit: 1},
					]
				}} minValue={min} maxValue={max}/>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/5">
						{isHappy ? <Smile color={"green"} size={60}/> : <Frown color="red" size={60}/>}
					</div>
	
				</div>
				<div className="flex mt-3 sm:mt-5 justify-center items-center w-full">
					<Button className="flex sm:hidden h-10 w-1/2"><Link className="flex items-center gap-2 font-bold text-md"  href={props.path}>Graph <span><ChartNoAxesCombined/></span></Link></Button>
			    </div>
			</div>
		</>	
	)

}

export default ParameterCard;
