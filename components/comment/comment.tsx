import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Reaction, ReactionProps} from "@/components/comment/reaction";
import React from "react";


export interface CommentProps {
    id: number,
    title: string,
    subtitle: string,
    content: string,
    countLikes: number,
    reactions: Array<ReactionProps>
}


export const Comment: React.FC<CommentProps> = ({title, subtitle, content, countLikes, reactions}: CommentProps) =>
{
    return (
        <div
            className={`border-solid border-4 border-[#E5E4F9]/80 p-8 rounded-2xl bg-gradient-to-b from-[#16161E] to-gray-400/60 text-[#e5e4f9] max-w-xs sm:p-10 sm:max-w-lg md:p-6 md:max-w-[432px] 2xl:p-10 2xl:max-w-lg`}>
            <div className="flex flex-row gap-3 items-end">
                <Avatar className="w-14 h-14">
                    <AvatarImage src="https://github.com/shadcn.png"/>
                    <AvatarFallback>CN</AvatarFallback>
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
                <div className="box-content px-3 py-1 border-2 border-gray-50 rounded-full">👍🏻 {countLikes}</div>
                {reactions.map(reaction =>
                    <Reaction key={reaction.id} {...reaction} />)}
            </div>
        </div>
    )
}