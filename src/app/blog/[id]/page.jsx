import React from "react";
import style from './page.module.css';

async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {cache: 'no-store' })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function generateMetadata({ params}){
    const data = await getData(params.id);
    return {
        title: data.title,
    }
}

const BlogId = async ({params}) => {

    const data = await getData(params.id);

    return (
        <div>
            <h1>{data.title}</h1>
            <p>
                {data.body}
            </p>
        </div>
    )
}

export default BlogId;