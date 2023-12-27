"use client"
//every route inside (main) is protected so u cant access it without login
import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import Navigation from "./_components/navigation";

const MainLayout = ({children}:{children:React.ReactNode}) => {
    const {isAuthenticated,isLoading} = useConvexAuth()

    if(isLoading){
        return (<div className="h-full flex items-center justify-center">
            <Spinner size='lg'/>
        </div>)
    }

    if(!isAuthenticated){
        return redirect('/')
    }

    return ( <div className="h-full flex dark:bg-[#1f1f1f]">
        <Navigation/>
        <main className="flex-1 h-full overflow-auto">
        {children}
        </main>
    </div> );
}
 
export default MainLayout;