'use server'
import {supabase} from "@/configs/supabase";

export const saveReaction = async (idMessage: number, typeReaction: string) => {
    const {data, error} = await supabase
        .from("reactions")
        .insert([{
            id_message: idMessage,
            type: typeReaction
        }])
    if(error){
        throw Error("No se inserto una reaccion");
    }
}