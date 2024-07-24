import React from "react";

export interface ReactionProps {
    id: number,
    type: "funny" | "sad" | "surprise"
    amount: number
}

export const Reaction: React.FC<ReactionProps> = ({id, type, amount}: ReactionProps) => {

    const emoji = (): string => {
        switch (type) {
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
        <div className="flex flex-row gap-1 bg-[#16161E] py-1 px-3 rounded-full border border-[#16161E]">
            <div>{emoji()}</div>
            <div>{amount}</div>
        </div>
    )
}