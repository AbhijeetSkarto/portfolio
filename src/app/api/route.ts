import axios from "axios";
import { NextRequest, NextResponse } from "next/server";


const API_URI=process.env.API_URI ?? ""
export async function POST(req:NextRequest) {
    try{
        console.log("api",API_URI)
        const body=await req.json();
        const res=await axios.post(API_URI,body);
        // console.log("rs",res);
        const {data}=res
        return NextResponse.json(data);
    }catch(error){
        return NextResponse.json(error)
    }
}