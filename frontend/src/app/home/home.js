'use client';
import { useActivePage } from "@/context/activePage";
import { useEffect } from "react";

function HomePage(){

    const { activePage, setActivePage } = useActivePage();

    document.title = 'Twitter';

    useEffect(() => {
        setActivePage('/');
    })
    return (
        <>
        <p style={{color:'white'}}>Home Page</p>
        </>
    );
}

export default HomePage;