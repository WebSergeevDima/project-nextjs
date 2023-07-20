"use client";
import React, {useState} from 'react';
import Link from "next/link";
import {useRouter} from "next/navigation";

const Register = () => {

    const [error, setError] = useState(null);
    const routerNavigation = useRouter();

    const handlerRegister = async (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;


        try {
            const res = await fetch('/api/auth/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            });

            res.status === 201 && routerNavigation.push('/dashboard/login?success=Аккаунт создан');

        } catch (error) {
            setError(error);
        }
    }


    return (
        <div>
            <h1>Создать новый аккаунт</h1>

            <form action="" onSubmit={handlerRegister}>
                <input type="text" placeholder={'Имя пользователя'}/>
                <input type="email" placeholder={'Email'}/>
                <input type="password" placeholder={'password'}/>
                <button>Зарегистрироваться!</button>
                {error && 'Что-то пошло не так('}
            </form>
            <span> - или - </span>
            <Link href={'/dashboard/login'}>Войти в аккаунт</Link>
        </div>
    );
};

export default Register;