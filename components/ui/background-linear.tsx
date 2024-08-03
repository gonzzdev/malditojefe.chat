import React from "react";

export const BackgroundLinear: React.FC = () => {
    return (
        <>
            <div className="z-20 absolute bottom-0 w-full h-96 bg-gradient-to-t from-black"></div>
            <div className="z-20 absolute top-0 w-full h-32 bg-gradient-to-b from-black from-0%"></div>
        </>)
}