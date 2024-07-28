import {Message} from "ai";

interface MessageUserProps {
    message: Message
}

export const MessageBot = ({message}: MessageUserProps) => {
    return (
        <div className="flex justify-start items-end w-full">
            <div
                className="bg-gradient-to-b from-gray-950 to-gray-500 border-2 border-gray-400 rounded-lg px-5 py-5 text-white text-xl">
                {message.content}
            </div>
        </div>
    );
}