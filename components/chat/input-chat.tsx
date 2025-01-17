import {Input} from "@/components/ui/input";
import {Loader, Loader2, SendHorizontal} from "lucide-react";
import {ChangeEvent, MouseEvent, KeyboardEvent} from "react";

export const InputChat = ({value, onChange, onClick, onKeyDown, disabled}: {
    value: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    onClick: (event: MouseEvent<HTMLButtonElement>) => void,
    onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void
    disabled: boolean
}) => {
    return (
        <div
            className="bg-[rgb(22,22,30)]/70 w-full flex flex-row items-center shadow-sm rounded-full focus-within:border-[#F4222D] border border-[#8b141a] pr-5 cursor-pointer">
            {disabled ?
                <p className="text-2xl px-5 py-4 text-gray-400 w-full">{value}</p> :
                <Input
                    onKeyDown={onKeyDown}
                    value={value}
                    onChange={onChange}
                    className="w-full placeholder:text-gray-300 text-gray-300 border-0 bg-transparent focus:border-transparent focus:ring-0 text-xl px-5 py-8 italic md:text-2xl"
                    placeholder="Escribe en el chat para comenzar >:)"/>}
            <button onClick={onClick}>
                {disabled ? <Loader className="animate-spin" color="#F4222D"/> : <SendHorizontal color="#F4222D"/>}
            </button>
        </div>
    )
}