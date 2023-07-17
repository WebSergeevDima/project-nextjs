import React from "react";
import {items} from "@/app/portfolio/[category]/data";
import style from './page.module.css';
import {notFound} from "next/navigation";

const getData = (categoryId) => {
    const data = items[categoryId];

    if(data) {
        return data;
    }

    return notFound();
}

const PortfolioId = ({params}) => {

    const data = getData(params.category);

    return (
        <div>
            {data.map(item => {
                return (
                    <div>
                        <div>{item.title}</div>
                        <div>{item.desc}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default PortfolioId;