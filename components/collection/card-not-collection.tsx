import Image from "next/image";

export const CardNotCollection = () =>{
    return (
        <div className="w-44 h-full flex flex-col gap-3 px-2 py-2 bg-[#16161E] rounded-lg self-start">
            <div
                className="w-full h-[162.55px] bg-gradient-to-b from-gray-950 to-gray-400 px-2 py-2 rounded-lg border-2 border-gray-500 min-h-24">
            </div>
            <div>
                <div className="w-full text-center text-red-600">No encontrado</div>
            </div>
        </div>
    )
}