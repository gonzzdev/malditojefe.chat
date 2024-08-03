import {analizedFurious, chattingBoss, Message} from "@/actions";
import {generateId} from "ai";
import {readStreamableValue} from "ai/rsc";
import {useContext, useEffect, useState} from "react";
import {AwardsContext} from "@/contexts/awardsContext";
import {saveMessageFurious} from "@/actions/chat";

const mapStringToState = (stateString: string): 'explotando' | 'moderado' | 'aliviado' | undefined => {
    switch (stateString.toLowerCase()) {
        case 'explotando':
            return 'explotando';
        case 'moderado':
            return 'moderado';
        case 'aliviado':
            return 'aliviado';
        default:
            return undefined;
    }
};

export const useMessage = () => {
    const [conversation, setConversation] = useState<Message[]>([])
    const [message, setMessage] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const {increment} = useContext(AwardsContext);

    // Agrega primera interacion con el jefe
    useEffect(() => {
        setConversation([{
            id: generateId(), role: 'assistant',
            content: 'hola este un chat de bienvenida al juego del maldito jefe'
        }])
    }, [])
    const handleOnSubmit = async () => {
        setLoading(true)
        const estadoBot = await analizedFurious([
            ...conversation,
            {id: generateId(), role: 'user', content: message},
        ])
        if (estadoBot === 'explotando') {
            increment()
            await saveMessageFurious(message)
        }

        const {messages, newMessage} = await chattingBoss([
            ...conversation,
            {id: generateId(), role: 'user', content: message, state: mapStringToState(estadoBot)},
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
        setLoading(false)
    }

    return {
        conversation,
        message,
        loading,
        setMessage,
        handleOnSubmit
    }
}