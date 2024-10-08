"use client";

import InputField from "./InputField";

export type AuthFormProps = {
    formType: "login" | "register";
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function AuthForm({formType, onSubmit} : AuthFormProps){
    return (
        <form 
            onSubmit={onSubmit}
            className="flex flex-col space-y-4 w-full max-w-md rounded bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg"
        >
            <div className="flex flex-col items-center space-y-4">
                <h1 className="text-3xl font-bold">
                    {formType === "login" ? "Login" : "Register"}
                </h1>
                <p className="text-sm text-gray-500">
                    {formType === "login" ? "New to the app? " : "Already have an account? "}
                    <a href={formType === "login" ? "/login" : "/register"} className="text-red-500 hover:underline">
                        {formType === "login" ? "Register" : "Login"}
                    </a>
                </p>
            </div>

            <div className="flex flex-col mt-8 space-y-4">
                <InputField id="email" label="E-mail" type="email" name="email" placeholder="Enter your name" />
                <InputField id="password" label="Password" type="password" name="password" placeholder="Enter your password" />
                {formType === "register" &&
                    <InputField id="confirmPassword" label="Confirm Password" type="password" name="confirmPassword" placeholder="Confirm your password" />
                }
            </div>

            <div className="flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                <button className="flex w-full items-center justify-center rounded-lg bg-red-500 hover:bg-red-600 px-4 py-2 
                    space-x-2 text-sm text-semibold text-white sm:w-auto sm:px-8" 
                    type="submit">
                        {formType === "login" ? "Login" : "Register"}
                </button>
            </div>

        </form>
    );
}