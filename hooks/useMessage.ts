import {analizeText, Message} from "@/actions";
import {generateId} from "ai";
import {readStreamableValue} from "ai/rsc";
import {useState} from "react";
import {set} from "zod";

export const useMessage = () => {
    const [conversation, setConversation] = useState<Message[]>([])
    const [message, setMessage] = useState<string>("")
    const handleOnSubmit = async () => {
        const {messages, newMessage} = await analizeText([
            ...conversation,
            {id: generateId(), role: 'user', content: message},
        ]);
        let textContent = '';

        for await (const delta of readStreamableValue(newMessage)) {
            textContent = `${textContent}${delta}`;

            setConversation([
                ...messages,
                {id: generateId(), role: 'assistant', content: textContent},
            ]);
        }
        setMessage("")
    }

    return {
        conversation,
        message,
        setMessage,
        handleOnSubmit
    }
}