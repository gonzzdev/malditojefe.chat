import Image from "next/image";
import {Input} from "@/components/ui/input";
import {InputChat} from "@/components/chat/input-chat";

export default function GamePage() {
    return (
        <main className="relative w-full h-[calc(100vh-4rem)]">
            <div className="absolute bottom-0 max-w-[500px] md:w-full">
                <Image alt="image del jefe la ilustracion" src="/static/images/game/jefe.png"
                       width={0} height={0} sizes="100vw"
                       style={{width: 'auto', height: 'auto'}}
                />
            </div>
            <div className="relative w-full h-full flex justify-center items-end z-10 py-10">
                <div>

                </div>
                <div>
                    <InputChat disabled={false}></InputChat>
                </div>
            </div>
            <div className="absolute bottom-0 flex justify-center w-full">
                <div className="max-w-[60rem] md:w-full flex justify-center">
                    <Image alt="Imagen de flama" src="/static/images/game/fuego.png"
                           width={0} height={0} sizes="100vw"
                           className="align-middle"
                           style={{width: 'auto', height: 'auto'}}
                    />
                </div>
            </div>
        </main>
    )
}