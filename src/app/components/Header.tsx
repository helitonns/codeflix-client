"use client";

import React from "react";
import UserProfile from "./UserProfile";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import useScroll from "../hooks/useScroll";
import SearchForm from "./SearchForm";
import { useRouter, useSearchParams } from "next/navigation";

export default function Header(){

    const router = useRouter();
    const params = useSearchParams();
    const initialSearchTerm = params.get("title") || "";

    const isScrolled = useScroll();
    const [searchTerm, setSearchTerm] = React.useState<string>(initialSearchTerm);
    const onSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setSearchTerm(event.target.value);
    }

    const onSearch = (event: React.FormEvent<HTMLFormElement>)=> {
        event.preventDefault();

        const newParams = new URLSearchParams(params.toString());
        newParams.set("title", searchTerm);
        router.push(`/search?${newParams.toString()}`);
    }


    return (
        <header className={`${isScrolled && 'bg-black'} 
            fixed top-0 z-50 
            flex w-full items-center justify-between  bg-gradient-to-t from-transparent to-black p-2 px-4  transition-all lg:px-16 lg:py-4`}>
            <div className="flex items-center space-x-2 md:space-x-8">
                <Logo />
                <NavLinks />
            </div>

            <div className="flex items-center space-x-2 md:space-x-8">
                <SearchForm searchTerm={searchTerm} onSearchTermChange={onSearchTermChange} onSearch={onSearch} />
                <UserProfile />
            </div>
        </header>
    );
}