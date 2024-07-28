import {BackgroundJefe, FormChat, BackgroundFuego} from "@/components/exports";


export default function GamePage() {

    return (
        <main className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
            <BackgroundJefe/>
            <FormChat/>
            <BackgroundFuego/>
        </main>
    )
}