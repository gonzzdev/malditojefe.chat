import React from "react";

export interface ReactionProps {
    id: number,
    type: "funny" | "sad" | "surprise" | "fire" | "baddy" | "cry"
    amount: number
}

export const Reaction: React.FC<ReactionProps> = ({id, type, amount}: ReactionProps) => {

    const emoji = (): string => {
        switch (type) {
            case "fire":
                return '🔥';
            case "baddy":
                return '😈';
            case "cry":
                return '🥹';
            case "funny":
                return '😂';
            case "sad":
                return '🥲';
            case "surprise":
                return '😮';
            default:
                return '😂';
        }
    }
    return (
        <div className="flex flex-row gap-1 sm:bg-[#16161E] rounded-full sm:border sm:border-[#16161E] sm:py-1 sm:px-3">
            <div>{emoji()}</div>
            <div>{amount}</div>
        </div>
    )
}