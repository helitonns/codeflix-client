"use client";

import AuthForm from "@/app/components/AuthForm";
import { useRouter } from "next/navigation";
import React from "react";


type ServerError = {
    message: string;
}

export default function LoginForm(){
    const router = useRouter();
    const [errors, setErrors] = React.useState<string[]>([]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email, password})
            });

            if(response.ok){
                router.push("/");
                return;
            }

            const payload:ServerError[]  = await response.json();
            setErrors(payload.map((er) => er.message));

        } catch (error) {
            console.error(error);

            setErrors(["An unknown error occurred"]);
        }
    };

    return (
        <AuthForm formType="login" onSubmit={handleSubmit} />
    );
}