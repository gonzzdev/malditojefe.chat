import Image from "next/image";
import {obtenerCommentarios, Paginacion} from "@/actions/comments";
import {Comment, CommentProps} from "@/components/comment";
import {Input} from "@/components/ui/input";
import type {Metadata} from "next";
import {Boton} from "@/components/ui/boton"

export const metadata: Metadata = {
    title: "malditojefe.chat 🔥 | El chat del trabajo que sí quieres responder en tu día libre",
    description: "Proyecto open-source creado para la participación en SDK Vercel Hackathon 2024 | Juego de chat",
}
export default function Home() {
    const commentsLeft: Paginacion<CommentProps> = obtenerCommentarios(0, 3);
    const commentsMiddle: Paginacion<CommentProps> = obtenerCommentarios(1, 3);
    const commentsRight: Paginacion<CommentProps> = obtenerCommentarios(2, 3);
    return (
        <main>
            <div className="relative w-full h-[calc(100vh-8rem)] overflow-hidden">
                <div className="z-20 absolute -top-32 flex items-center justify-center w-full">
                    <div className="grid gap-4 min-w-max lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
                        <div className="grid gap-4">
                            {commentsLeft.data.map((comments) => {
                                return <Comment key={comments.id.toString()} {...comments}/>
                            })}
                        </div>
                        <div className="grid gap-4 mt-32">
                            {commentsMiddle.data.map((comments) => {
                                return <Comment key={comments.id.toString()} {...comments}/>
                            })}
                        </div>
                        <div className="grid gap-4">
                            {commentsRight.data.map((comments) => {
                                return <Comment key={comments.id.toString()} {...comments}/>
                            })}
                        </div>
                    </div>
                </div>
                <div
                    className="z-20 absolute top-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#16161E] from-0% to-transparent to-70% "></div>
                <div className="z-20 absolute bottom-0 w-full h-96 bg-gradient-to-t from-[#16161E]"></div>
                <div className="z-20 absolute top-0 w-full h-32 bg-gradient-to-b from-[#16161E] from-0%%"></div>
                <div className="absolute h-full flex items-center justify-center w-full mb-40 z-50">
                    <Image alt="logo" src="/static/images/logo.png" width="250" height="250"/>
                </div>
                <div className="absolute bottom-0 w-full z-50">
                    <div className="flex justify-center w-full">
                        {/* <Input
                            className="placeholder:text-gray-400 shadow-sm rounded-full focus-visible:ring-0 border border-red-900 text-[#E5E4F9]/80 bg-[#16161E] w-2/4 text-2xl px-5 py-8 italic"
                            placeholder="Escribe en el chat para comenzar el juego"/> */}
                            <Boton />
                    </div>
                </div>
            </div>
        </main>
    );
}
