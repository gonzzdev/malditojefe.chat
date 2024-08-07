import {analizedFurious, chattingBoss, Message, saveMessageUser} from "@/actions";
import {generateId} from "ai";
import {readStreamableValue} from "ai/rsc";
import {useContext, useEffect, useState} from "react";
import {AwardsContext} from "@/contexts/awardsContext";
import {getDataAchievement} from "@/data/achievement";

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
    const {counter, increment} = useContext(AwardsContext);
    const achievements = getDataAchievement();

    // Agrega primera interacion con el jefe
    useEffect(() => {
        setConversation([{
            id: generateId(), role: 'assistant',
            content: 'Hola Godinez. Venga a mi oficina por favor. 😡'
        }])
    }, [])
    const handleOnSubmit = async () => {
        setLoading(true)
        const estadoBot = await analizedFurious([
            ...conversation,
            {id: generateId(), role: 'user', content: message},
        ])
        if (estadoBot === 'explotando') {
            const incrementado = counter + 1
            const achievement = achievements
                .find(data => data.range === incrementado)
            await saveMessageUser(message, achievement!!.name)
            increment()
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