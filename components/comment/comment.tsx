'use client'
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Reaction, ReactionProps} from "@/components/comment/reaction";
import React, {useState} from "react";
import {generateId} from "ai";
import {SmilePlus} from "lucide-react";
import {SelectReaction} from "@/components/comment/select-reaction";

export interface CommentProps {
    id: number,
    title: string,
    subtitle: string,
    content: string,
    image: string,
    reactions: Array<ReactionProps>
}

export const Comment: React.FC<CommentProps> = ({
                                                    id,
                                                    image,
                                                    title,
                                                    subtitle,
                                                    content,
                                                    reactions
                                                }: CommentProps) => {
    const [reactionsUse, setReactions] = useState<ReactionProps[]>(reactions)
    const [isShow, setIsShow] = useState<boolean>(false);
    const handleOnClickEvent = (nameReaction: string = "") => {
        setIsShow(isShow => !isShow)
        const reactionFind = reactionsUse.map(r => {
            if (r.type === nameReaction) {
                r.amount = r.amount + 1
            }
            return r;
        });
        setReactions(r => [...reactionFind])
    }

    const handleOnMouseDown =()=>{
        setIsShow(true)
    }

    const handleOnMouseUp =()=>{
        setIsShow(false)
    }

    return (
        <div
            className={`border-solid border-4 border-[#E5E4F9]/80 p-8 rounded-2xl bg-gradient-to-b from-[#16161E] to-gray-400/60 text-[#e5e4f9] w-full sm:p-10 sm:max-w-lg md:p-6 max-w-[340px] md:max-w-[432px] 2xl:p-10 2xl:max-w-lg`}>
            <div className="flex flex-row gap-3 items-end">
                <Avatar className="w-14 h-14">
                    <AvatarImage src={image}/>
                    <AvatarFallback className="bg-gray-900">CN</AvatarFallback>
                </Avatar>
                <div>
                    <div className="text-xl">
                        {title}
                    </div>
                    <div className="text-[#EAD82A] text-xs">
                        {subtitle}
                    </div>
                </div>
            </div>
            <div className="py-4">
                {content}
            </div>
            <div className="flex flex-row gap-2 items-center">
                <div className="flex flex-wrap flex-row gap-2">
                    {reactionsUse.map(reaction =>
                        <Reaction key={generateId()} {...reaction} />)}
                </div>
                <div className="relative flex justify-center" onMouseOut={handleOnMouseDown} onMouseLeave={handleOnMouseUp}>
                    <button>
                        <SmilePlus/>
                    </button>
                    {isShow &&
                        <div className="absolute left-0 -bottom-12"><SelectReaction onReaction={handleOnClickEvent}
                                                                         idComment={id}/>
                        </div>}
                </div>
            </div>
        </div>
    )
}