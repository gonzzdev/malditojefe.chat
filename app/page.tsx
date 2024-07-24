import Image from "next/image";
import {InputChat, BackgroundRadial, BackgroundLinear, BackgroundComment} from "@/components/exports";
import type {Metadata} from "next";
import {Boton} from "@/components/ui/boton"

export const metadata: Metadata = {
    title: "malditojefe.chat 🔥 | El chat del trabajo que sí quieres responder en tu día libre",
    description: "Proyecto open-source creado para la participación en SDK Vercel Hackathon 2024 | Juego de chat",
}
export default function Home() {
    return (
        <main className="relative w-full h-[calc(100vh-8rem)] overflow-hidden">
            <BackgroundComment/>
            <BackgroundRadial/>
            <BackgroundLinear/>
            <div className="absolute h-full flex items-center justify-center w-full mb-40 z-50">
                <Image alt="logo" src="/static/images/logo.png" width="250" height="250"/>
            </div>
            <div className="absolute bottom-0 w-full z-50 flex justify-center italic">
                {/* <InputChat disabled={true}/> */}
                <Boton />
            </div>
        </main>
    );
}
