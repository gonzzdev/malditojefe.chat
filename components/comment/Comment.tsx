import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Reaction, ReactionProps} from "@/components/comment/Reaction";


export interface CommentProps {
    id: number,
    title: string,
    subtitle: string,
    content: string,
    countLikes: number,
    reactions: Array<ReactionProps>
}


export function Comment({title, subtitle, content, countLikes, reactions}: CommentProps) {
    return (
        <div
            className={`border-solid border-4 border-[#E5E4F9]/80 p-10 rounded-2xl bg-gradient-to-b from-[#16161E] to-gray-400/60 text-[#e5e4f9] max-w-lg`}>
            <div className="flex flex-row gap-3 items-end">
                <Avatar className="w-20 h-20">
                    <AvatarImage src="https://github.com/shadcn.png"/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                    <div className="text-3xl">
                        {title}
                    </div>
                    <div className="text-[#E5E4F9]">
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