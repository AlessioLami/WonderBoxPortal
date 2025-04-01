"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ThemeButton from "@/components/ThemeButton";
import LoginForm from "@/components/LoginForm";

import { useLoginMutation } from "../services/backendApi";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {toast, Toaster} from "sonner";



export default function Login() {

	const [ login, {isLoading, error: loginError }] = useLoginMutation()

	const [ formData, setFormData ] = useState({email: "", password: ""})
	
	const router = useRouter()

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({...formData, [e.target.name]: e.target.value})
	}



	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		try{
			await login(formData).unwrap()
			router.replace("/")
		} catch(error){
			toast.dismiss()
			toast("Incorrect username or password.", {style: {border:"none", backgroundColor: "rgba(255, 69, 69)",  fontWeight: "bold", fontSize: "15px"}})
		}
	}

  return <div className="flex min-h-svh items-center justify-center p-5 md:p-10">
	  <Toaster theme="system" position="top-center" />
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
						<LoginForm formData={formData} handleChange={handleChange}/>
					</form>	
				</CardContent>
			</Card>
		</div>	  
}
