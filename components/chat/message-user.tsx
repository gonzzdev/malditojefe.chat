'use client'
import {clsx} from "clsx";
import {Message} from "@/actions/chat";

interface MessageUserProps {
    message: Message,
    variant: 'explotando' | 'moderado' | 'aliviado'
}

export const MessageUser = ({message, variant = 'aliviado'}: MessageUserProps) => {
    const variants = {
        aliviado: 'bg-gradient-to-b from-gray-950 to-gray-500 text-white border-gray-400',
        moderado: 'bg-gradient-to-b from-yellow-500 to-orange-400 text-black border-gray-400',
        explotando: 'bg-gradient-to-b from-red-600 to-red-500 text-black border-red-400'
    }

    return (
        <div className="nap-center flex justify-end items-start w-full">
            <div
                className={clsx(variants[variant], "border-2 rounded-lg px-5 py-5 text-xl font-semibold")}>
                {message.content}
            </div>
        </div>
    )
}