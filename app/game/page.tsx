import Image from "next/image";
import {InputChat} from "@/components/chat/input-chat";
import {MessageBot} from "@/components/chat/message-bot";

export default function GamePage() {
    return (
        <main className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
            <div className="absolute bottom-0 max-w-[620px] md:w-full max-h-screen">
                <Image alt="image del jefe la ilustracion" src="/static/images/game/jefe.png"
                       width={0} height={0} sizes="100vh"
                       style={{width: 'auto', height: 'auto'}}
                />
            </div>
            <div className="relative h-full flex flex-col justify-end items-center z-10 py-5 px-2 md:px-10 w-full">
                <div className="md:w-[40rem] w-full">
                    <div className="px-5">
                        <MessageBot message="Hola Mundo"/>
                    </div>
                    <div className="py-5">
                        <InputChat disabled={false}></InputChat>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 flex justify-center w-full">
                <div className="max-w-[60rem] md:w-full flex justify-center">
                    <Image alt="image del jefe la ilustracion" src="/static/images/game/fuego.png"
                           width={0} height={0} sizes="100vw"
                           style={{width: 'auto', height: 'auto'}}
                    />
                </div>
            </div>
        </main>
    )
}