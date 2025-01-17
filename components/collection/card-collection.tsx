import Image from "next/image";

export interface CardCollectionProps {
    url: string,
    name?: string,
    isAchievement?: boolean
}

export const CardCollection = ({url, name, isAchievement = false}: CardCollectionProps) => {
    return (
        <div className="w-44 flex flex-col gap-2 px-2 py-2 bg-[#16161E] rounded-lg self-start">
            <div className="w-full bg-gradient-to-t from-red-950 to-black px-2 py-2 rounded-lg border-2 border-gray-500 hover:animate-tada">
                <Image alt="Imagen del logro encontrado"
                       src={url}
                       sizes="100vw"
                       width={0}
                       height={0}
                       style={{width: '100vw', height: 'auto'}}
                />
            </div>
            <div>
                {isAchievement && <div className="text-white w-full text-center">Has conseguido:</div>}
                <div className="text-yellow-400 w-full text-center whitespace-nowrap">{name}</div>
            </div>
        </div>
    )
}