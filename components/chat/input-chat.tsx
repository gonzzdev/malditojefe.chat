import {Input} from "@/components/ui/input";
import {SendHorizontal} from "lucide-react";

export const InputChat = ({disabled}: { disabled: boolean }) => {
    return (
        <div
            className="bg-[rgb(22,22,30)]/70 w-full flex flex-row items-center shadow-sm rounded-full focus-within:border-red-600 border border-red-900 pr-5 cursor-pointer">
            {disabled ?
                <p className="text-2xl px-5 py-4 text-gray-400 w-full">Escribe en el chat para comenzar el juego</p> :
                <Input
                    className="w-full placeholder:text-gray-300 text-gray-300 border-0 bg-transparent focus:border-transparent focus:ring-0 text-2xl px-5 py-8 italic"
                    placeholder="Escribe en el chat para comenzar el juego"/>}
            <SendHorizontal color="red"/>
        </div>
    )
}