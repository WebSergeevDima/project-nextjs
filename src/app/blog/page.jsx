import React from "react";
import style from './page.module.css';
import Link from "next/link";

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const Blog = async () => {

    const data = await getData();

    return (
        <div>
            {
            data.map(item => {
                return <Link href={`blog/${item.id}`}>
                    <div>{item.title}</div>
                </Link>
            })
            }

        </div>

    )
}

export default Blog;