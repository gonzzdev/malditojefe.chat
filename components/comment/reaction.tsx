'use client'
import {findReactionByName} from "@/actions";

export interface ReactionProps {
    type: "funny" | "sad" | "surprise" | "fire" | "baddy" | "cry"
    amount: number
}

export const Reaction = ({type, amount}: ReactionProps) => {
    const emoji = findReactionByName(type)
    return (
        <div className="flex flex-row gap-1 sm:bg-[#16161E] rounded-full sm:border sm:border-[#16161E] sm:py-1 sm:px-3">
            <div>{emoji}</div>
            <div>{amount}</div>
        </div>
    )
}