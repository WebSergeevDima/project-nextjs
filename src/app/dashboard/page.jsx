"use client";

import React, {useEffect, useState} from "react";
import useSWR from 'swr';
import style from './page.module.css';

const Dashboard = () => {

    // const [data, setData] = useState([]);
    // const [error, setError] = useState(false);
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //
    //     const getData = async () => {
    //         const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {cache: 'no-store'})
    //         if (!res.ok) {
    //             setError(true);
    //         }
    //
    //         const data = await res.json();
    //
    //         console.log(data)
    //
    //         setData(data);
    //         setIsLoading(false);
    //     }
    //
    //     getData();
    //
    //
    // }, [])

    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);
    console.log(data)

    return (
        <div>Dashboard</div>
    )
}

export default Dashboard;