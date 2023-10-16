'use client'

import { createContext, useContext, useState } from "react";

const ActivePageContext = createContext();

export function ActivePageProvider({ children }) {
    const [activePage, setActivePage] = useState("/");

    return (
        <ActivePageContext.Provider value={{ activePage, setActivePage }}>
            {children}
        </ActivePageContext.Provider>
    );
}

export function useActivePage() {
    const context = useContext(ActivePageContext);
    if (!context) {
        throw new Error('useActivePage must be used within an ActivePageProvider')
    }
    return context;
}