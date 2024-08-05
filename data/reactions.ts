import {ReactionProps} from "@/components/comment/reaction";

export interface Reaction{
    id: number,
    name: string,
    emoji: string
}

export const dataReactions = ()=> [
    {
        "id": 1,
        "name": "funny",
        "emoji": "😂"
    },
    {
        "id": 2,
        "name": "sad",
        "emoji": "🥲"
    },
    {
        "id": 3,
        "name": "surprise",
        "emoji": "😮"
    },
    {
        "id": 4,
        "name": "fire",
        "emoji": "🔥"
    },
    {
        "id": 5,
        "name": "baddy",
        "emoji": "😈"
    },
    {
        "id": 6,
        "name": "cry",
        "emoji": "🥹"
    }
]