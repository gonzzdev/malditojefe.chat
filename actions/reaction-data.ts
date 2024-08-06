'use client'
import {dataReactions} from "@/data/reactions";

export const findReactionByName = (name: string) => {
    const reactions = dataReactions();
    return reactions.find(r => r.name === name)?.emoji ?? '😂'
}

export const getReactions = () => {
    return dataReactions()
}