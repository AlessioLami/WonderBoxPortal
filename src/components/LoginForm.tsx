"use client"

import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

const LoginForm = () => {
	return(
		<div className="flex flex-col gap-6">
			<div className="grid gap-2">
				<Label htmlFor="email">Email</Label>
				<Input id="email" name="email" type="email" placeholder="iotalab@gmail.com" required/>
			</div>
			<div className="grid gap-2">
				<Label htmlFor="password">Password</Label>
				<Input id="password" name="password" type="password" required/>		
			</div>
			<Button>Login</Button>
		</div>
	)
}

export default LoginForm

