"use client";
import React from 'react';
import {signIn, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import style from "./page.module.css";

const Login = () => {
    const session = useSession();
    const router = useRouter()

    if (session.status == 'authenticated') {
        router.push('/dashboard');
    }

    const handlerSubmit = (e) => {
        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value;

        signIn('credentials', {email, password});
    }

    return (
        <div>
            <form onSubmit={handlerSubmit} className={style.form}>
                <input
                    type="email"
                    placeholder="Email"
                    required
                    className={style.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    className={style.input}
                />
                <button className={style.button}>Войти</button>
            </form>
            <br/>
            <div className={style.btn} onClick={() => signIn('google')}>
                Войти через Google
            </div>
        </div>
    );
};

export default Login;