import {BackgroundJefe, BackgroundFuego,FormChat} from "@/components/exports";
import {ContentGame} from "@/components/chat/content-game";

export default function GamePage() {
    return (
        <main className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
            <BackgroundJefe/>
            <ContentGame/>
            <BackgroundFuego/>
        </main>
    )
}