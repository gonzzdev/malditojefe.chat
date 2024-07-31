import Image from "next/image";

export interface CardCollectionProps {
    url: string,
    name?: string,
    isAchievement?: boolean
}

export const CardCollection = ({url, name, isAchievement = false}: CardCollectionProps) => {
    return (
        <div className="max-w-44 flex flex-col gap-2">
            <div className="w-full bg-gradient-to-t from-red-950 to-black px-2 py-2 rounded-lg border-2 border-gray-500">
                <Image alt="imagen de la camiseta"
                       src={url}
                       sizes="100vw"
                       width={0}
                       height={0}
                       style={{width: 'auto', height: 'auto'}}
                />
            </div>
            <div>
                {isAchievement && <div className="text-white w-full text-center">Has conseguido:</div>}
                <div className="text-yellow-400 w-full text-center">{name}</div>
            </div>
        </div>
    )
}