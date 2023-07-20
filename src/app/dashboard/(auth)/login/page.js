"use client";
import React from 'react';
import {signIn} from "next-auth/react";

const Login = () => {
    return (
        <div onClick={()=>signIn('google')}>
            Login with Google
        </div>
    );
};

export default Login;