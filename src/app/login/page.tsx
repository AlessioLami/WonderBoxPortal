"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ThemeButton from "@/components/ThemeButton";
import LoginForm from "@/components/LoginForm";



export default function Login() {

	const handleSubmit = () => {
		alert("lol")
	}

  return <div className="flex min-h-svh items-center justify-center p-5 md:p-10">
			<Card className="w-full max-w-sm">
				<CardHeader>
					<CardTitle className="text-2xl flex justify-between truncate leading-tight font-bold">
						Login
						<ThemeButton/>
					</CardTitle>
					<CardDescription className="mt-3">
						Enter your email below to login to your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit}>
						<LoginForm/>
					</form>	
				</CardContent>
			</Card>
		</div>	  
}
