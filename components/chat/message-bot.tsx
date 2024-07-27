interface MessageUserProps {
    message: string
}

export const MessageBot = ({message}: MessageUserProps) => {
    return (
        <div className="flex justify-end items-end w-full">
            <div className="bg-gradient-to-b from-gray-950 to-gray-500 border-2 border-gray-400 rounded-lg px-5 py-5 text-white">
                {message}
            </div>
        </div>

    );
}