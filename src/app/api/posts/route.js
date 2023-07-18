import Post from "@/models/Post";
import connect from "@/utils/db";
import {NextResponse} from "next/server";

export const GET = async (request) => {
    try {
        await connect();
        const post = await Post.find();
        return new NextResponse(JSON.stringify(post), {status:200});

    } catch (error) {
        return new NextResponse('Error in response of DB', {status:500});
    }
}