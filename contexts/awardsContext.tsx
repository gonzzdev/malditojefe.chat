'use client'
import {createContext, ReactNode, useState} from "react";

export type AwardsProps = {
    counter: number,
    increment: () => void
}

export const AwardsContext = createContext<AwardsProps>({
    counter: 0,
    increment: () => {}
});

export const AwardsProvider = ({children}: { children: ReactNode }) => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1)
    }

    return (
        <AwardsContext.Provider value={{counter, increment}}>
            {children}
        </AwardsContext.Provider>
    )
}