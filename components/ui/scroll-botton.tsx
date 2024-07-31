'use client'
import {ReactNode, useEffect, useRef} from "react";
import {clsx} from "clsx";

export interface ScrollBottonProps {
    children: ReactNode,
    className?: string
}

export const ScrollBotton = ({children, className}: ScrollBottonProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [children]);

    return (
        <div
            ref={containerRef}
            className={clsx(className, "px-5 flex flex-col gap-4 overflow-y-auto")}
        >
            {children}
        </div>
    );
}