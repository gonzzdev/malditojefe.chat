'use server'
import {getDataMessagesBoss} from "@/data/comments";
import {CommentProps} from "@/components/comment/comment";
import {supabase} from "@/configs/supabase";
import {dataReactions, Reaction} from "@/data/reactions";
import {generateUsername} from "unique-username-generator";
import {AvatarGenerator} from "random-avatar-generator";

export interface Paginacion<T> {
    data: T[],
    currentPage: number,
    totalPage: number,
    total: number
}


export const getMessagesBoss = async (currentPage: number, size: number) => {
    const dataTotal = getDataMessagesBoss()
    const totalPage = Math.round(dataTotal.length / size);
    const total = dataTotal.length
    const inicioPaginacion = currentPage * size;
    const finalPaginacion = (currentPage + 1) * size
    if (inicioPaginacion > total)
        return {
            data: [],
            currentPage,
            totalPage,
            total
        }
    const data = dataTotal.slice(inicioPaginacion, finalPaginacion)
    return {
        data,
        currentPage,
        totalPage,
        total
    }
}

export const saveMessageUser = async (message: string, nameAwwards: string) => {
    'use server'
    const username = generateUsername();
    const generator = new AvatarGenerator();
    await supabase.from("messages")
        .insert([{
            content: message,
            awards: nameAwwards,
            username,
            avatar: generator.generateRandomAvatar()
        }])
}

const mapStringToTypeReaction = (stateString: string): 'fire' | 'baddy' | 'cry' | 'funny' | 'sad' | 'surprise' => {
    switch (stateString.toLowerCase()) {
        case 'fire':
            return 'fire';
        case 'baddy':
            return 'baddy';
        case 'cry':
            return 'cry';
        case 'funny':
            return 'funny';
        case 'sad':
            return 'sad';
        case 'surprise':
            return 'surprise';
        default:
            return 'funny';
    }
};

export const getMessagesUserRecent = async (): Promise<CommentProps[]> => {
    'use server'
    const reactionsData = dataReactions();
    const {data: messages, error: errorMessage} = await supabase.from("messages").select()
        .order('created_at', {ascending: false})
        .limit(100)

    if (errorMessage) {
        throw Error("Ocurrio un error al consultar mensajes")
    }

    const idsMessages = messages.map(message => message.id);

    const {data: reactions, error: errorReactions} = await supabase.from("reactions")
        .select()
        .in("id_message", idsMessages);

    if (errorReactions) {
        throw Error("Ocurrio un error al consultar reactions")
    }

    const reactionsGroup = Map.groupBy(reactions, reaction => reaction.id_message)

    return messages.map(message => {
        return {
            id: message.id,
            title: message.username,
            subtitle: message.awards,
            content: message.content,
            image: message.avatar,
            reactions: reactionsData.map(reactionData => {
                const value = reactionsGroup.get(message.id)?.filter(r => r.type == reactionData.name)?.length ?? 0
                return {
                    type: mapStringToTypeReaction(reactionData.name),
                    amount: value
                }
            }),
        }
    })

}

export const getMessagesUserTop = async (): Promise<CommentProps[]> => {
    'use server'
    const reactionsData = dataReactions();
    const {data: groupReaction, error: groupReactionError} = await supabase
        .from('group_reactions')
        .select()
        .order('count', {ascending: false})
        .limit(100);

    if (groupReactionError) {
        throw Error("Ocurrio un error al consultar grupo de reacciones")
    }

    const idsMessages = groupReaction.map(group => group.id_message);

    const {data: reactions, error: errorReactions} = await supabase.from("reactions")
        .select()
        .in("id_message", idsMessages);

    if (errorReactions) {
        throw Error("Ocurrio un error al consultar reacciones")
    }

    const {data: messages, error: messagesError} = await supabase.from("messages")
        .select()
        .in("id", idsMessages);

    if (messagesError) {
        throw Error("Ocurrio un error al consultar mensajes")
    }
    const reactionsGroup = Map.groupBy(reactions, reaction => reaction.id_message)

    return messages.map(message => {
        return {
            id: message.id,
            title: message.username,
            subtitle: message.awards,
            content: message.content,
            image: message.avatar,
            reactions: reactionsData.map(reactionData => {
                const value = reactionsGroup.get(message.id)?.filter(r => r.type == reactionData.name)?.length ?? 0
                return {
                    type: mapStringToTypeReaction(reactionData.name),
                    amount: value
                }
            }),
        }
    })

}