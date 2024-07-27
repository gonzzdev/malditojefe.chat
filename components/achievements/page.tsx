import Image from "next/image";

export default function EmptyAchievementComponent() {
    return (
        <main className="mt-8">
            <div className="flex flex-col items-center mb-8">
                <div className="flex items-center justify-center bg-gradient-to-b from-[#16161E] to-[#F4222D]/40 w-[300px] h-[300px] border-solid border-4 border-[#E5E4F9]/80 rounded-2xl">

                <Image alt="logo" src="/static/images/collection/playera.svg" width="250" height="250" />

                </div>
                <div className="h-10 w-full mt-2">
                    <p className="text-center text-[#EAD82A] text-xl font-bold">
                        La camisa de la empresa
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <div className="flex items-center justify-center bg-gradient-to-b from-[#16161E] to-gray-400/60 w-[300px] h-[300px] border-solid border-4 border-[#E5E4F9]/80 rounded-2xl">

                <Image alt="logo" src="/static/images/collection/playera-no.svg" width="250" height="250" className="blur" />

                </div>
                <div className="h-10 w-1/6 mt-2">
                    <p className="text-center text-[#F4222D] text-xl font-medium">
                        Logro no encontrado
                    </p>
                </div>
            </div>
        </main>
    );
}