import React from "react";
import style from './page.module.css';
import Link from "next/link";

export const metadata = {
    title: 'Блог',
    description: 'Описание блога',
}

async function getData() {
    const res = await fetch('http://localhost:3000/api/posts', {cache: 'no-store'})
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
                return <Link href={`blog/${item._id}`} key={item._id}>
                    <div>{item.title}</div>
                </Link>
            })
            }

        </div>

    )
}

export default Blog;