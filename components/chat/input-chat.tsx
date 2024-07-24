import {Input} from "@/components/ui/input";
import {SendHorizontal} from "lucide-react";

export const InputChat = ({disabled}: { disabled: boolean }) => {
    return (
        <div
            className="w-2/4 flex flex-row items-center shadow-sm rounded-full focus-within:border-red-600 border border-red-900 pr-5 cursor-pointer">
            {disabled ?
                <p className="text-2xl px-5 py-4 text-gray-400 w-full">Escribe en el chat para comenzar el juego</p> :
                <Input
                    className="placeholder:text-gray-400 text-gray-400 border-0 bg-transparent focus:border-transparent focus:ring-0 text-2xl px-5 py-8 italic"
                    placeholder="Escribe en el chat para comenzar el juego"/>}
            <SendHorizontal color="red"/>
        </div>
    )
}