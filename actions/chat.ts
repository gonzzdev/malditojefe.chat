'use server'
import {openai} from "@ai-sdk/openai";
import {createStreamableValue} from "ai/rsc";
import {generateText, streamText} from "ai";
import {z} from "zod";

export interface Message {
    id: string,
    role: 'user' | 'assistant';
    content: string;
    state?: 'explotando' | 'moderado' | 'aliviado'
}

export const analizedFurious = async (history: Message[]) => {
    'use server'
    const {toolResults} = await generateText({
        model: openai('gpt-3.5-turbo'),
        system: 'Examinaras la respuesta si te hace si no te hace caso devolveras la palabra explotando si estas medio molesto moderado, y si no te molesta mucho la respuesta sera alividado',
        messages: history,
        tools: {
            analizedFurious: {
                description: 'Extraes si es moderado, explotando, aliviado',
                parameters: z.object({
                    value: z.enum(['moderado', 'explotando', 'aliviado']).describe('Si es moderado, explotando, aliviado'),
                }),
                execute: async ({value}) => {
                    return value
                },
            }
        }
    })
    return toolResults.map(toolResult => toolResult.result).join('\n')
}

export const chattingBoss = async (history: Message[]) => {
    'use server';

    const stream = createStreamableValue();

    (async () => {
        const {textStream, toolResults} = await streamText({
            model: openai('gpt-3.5-turbo'),
            system:
                "Tu eres un jefe molesto que si no te hacen caso te molestas",
            messages: history
        });
        for await (const text of textStream) {
            stream.update(text);
        }
        stream.done();
    })();

    return {
        messages: history,
        newMessage: stream.value,
    };
}