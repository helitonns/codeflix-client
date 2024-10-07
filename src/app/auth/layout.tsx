import React from "react";

export default function Layout({children} : {children: React.ReactNode}){
    return (
        <div className="bg-cover bg-center bg-no-repeat text-white opacity-80" style={{backgroundImage: `url(/background.jpg)`}}>
            <div className="flex flex-col min-h-screen items-center justify-center py-2">
                {children}
            </div>
        </div>
    );
}