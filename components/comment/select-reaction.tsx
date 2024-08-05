import {getReactions, saveReaction} from "@/actions";
import {Reaction} from "@/data/reactions";

export const SelectReaction = ({idComment = 1, onReaction}: {
    idComment: number,
    onReaction: (nameReaction: string) => void
}) => {
    const reactions = getReactions();
    const handleOnClick = async (reaction: Reaction) => {
        onReaction(reaction.name)
        await saveReaction(idComment, reaction.name)
    }

    return (
        <div className="flex flex-row gap-1 bg-white py-2 px-4 rounded-full">
            {reactions.map(r => <div onClick={() => handleOnClick(r)}
                                     className="cursor-pointer px-2 py-1 rounded-full hover:bg-gray-400"
                                     key={r.id}>{r.emoji}</div>)}
        </div>
    )
}