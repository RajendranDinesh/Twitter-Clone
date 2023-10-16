'use client'
import { useActivePage } from "@/context/activePage";
import { useEffect } from "react";

export default function Login() {

    const { activePage, setActivePage } = useActivePage();

    useEffect(() => {
        setActivePage('login');
    });

    return (
        <p style={{color: "white"}}>{activePage}</p>
    );
};