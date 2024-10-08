"use client";

import AuthForm from "@/app/components/AuthForm";


export default function LoginForm(){
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
    };

    return (
        <AuthForm formType="login" onSubmit={handleSubmit} />
    );
}