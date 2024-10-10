// the route is /api/auth/login
import { NextRequest, NextResponse} from "next/server";
import { LoginValidation } from "@/app/lib/validations/LoginValidation";


export async function POST(request: NextRequest){
    try {
        const {email, password} = LoginValidation.parse(await request.json());
        console.log(email + " - " + password);

        return new NextResponse("It works");
    } catch(error: any){
        console.log(error.message);

        return new NextResponse(error.message, {status: 400});
    }
}