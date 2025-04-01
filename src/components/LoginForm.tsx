"use client"

import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

interface LoginFormProps {
  formData: {
    email: string;
    password: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({formData, handleChange}) => {
	return(
		<div className="flex flex-col gap-6">
			<div className="grid gap-2">
				<Label htmlFor="email">Email</Label>
				<Input id="email" name="email" type="email" placeholder="iotalab@gmail.com" value={formData.email} onChange={handleChange} required/>
			</div>
			<div className="grid gap-2">
				<Label htmlFor="password">Password</Label>
				<Input id="password" name="password" type="password" value={formData.password} onChange={handleChange} required/>		
			</div>
			<Button>Login</Button>
		</div>
	)
}

export default LoginForm

