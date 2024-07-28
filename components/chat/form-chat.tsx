'use client'
import {KeyboardEvent} from "react";
import {MessageUser} from "@/components/chat/message-user";
import {ScrollBotton} from "@/components/ui/scroll-botton";
import {useMessage} from "@/hooks";
import {InputChat} from "@/components/chat/input-chat";
import {MessageBot} from "@/components/chat/message-bot";

export const FormChat = () => {
    const {conversation,message,setMessage, handleOnSubmit} = useMessage()

    const handleOnEnter= async (event:KeyboardEvent<HTMLInputElement>)=>{
        if(event.key === "Enter"){
            await handleOnSubmit()
        }
    }

    return (
        <div className="relative h-full flex flex-col justify-end items-center z-10 py-5 px-2 md:px-10 w-full">
            <div className="md:w-[40rem] w-full">
                <ScrollBotton className="max-h-[calc(100vh-14rem)]">
                    {conversation && conversation.map(messageChat =>
                        messageChat.role == 'user' ?
                            <MessageUser key={messageChat.id.toString()} message={messageChat} variant="warning"/>
                            : <MessageBot key={messageChat.id.toString()} message={messageChat}/>
                    )}
                </ScrollBotton>
                <div className="py-5">
                    <InputChat onKeyDown={handleOnEnter} value={message} onClick={handleOnSubmit} disabled={false}
                               onChange={event => setMessage(event.target.value)}></InputChat>
                </div>
            </div>
        </div>
    )
}