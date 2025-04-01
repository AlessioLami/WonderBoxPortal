import {AreaChart, Area, CartesianGrid, ResponsiveContainer, XAxis} from "recharts"
import {ChartContainer, ChartTooltip, ChartTooltipContent} from "./ui/chart"

export type ChartConfig = [
	temperature: { label: string },
	humidity: { label: string }
]

export type ChartData = {
		day: string
		value: number
	
}[]

const ParameterChart = ({chartConfig, chartData}) => {
	return <div className="hidden sm:flex flex-col items-start dark:bg-zinc-900 border-2 border-zinc-800 w-full my-5 rounded-sm p-5 ">
					<h1 className="font-semibold text-xl">Monthly {chartConfig.temperature.label}</h1>
					<ResponsiveContainer height="100%" width="100%">
						<ChartContainer config={chartConfig}>
							<AreaChart  accessibilityLayer data={chartData}  margin={{top: 30, left: 5, right: 5}}>
								<CartesianGrid  vertical={true}/>
								<XAxis  dataKey="day" tickLine={false} axisLine={false} tickMargin={0}/>
								<ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" hideLabel/>}/>
								<Area dataKey="value" type="linear" fill="gray" fillOpacity={0.3} stroke=""/>
						</AreaChart>
					</ChartContainer>
					</ResponsiveContainer>
				
				</div>

}

export default ParameterChart
