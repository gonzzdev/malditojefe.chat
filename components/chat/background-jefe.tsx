import Image from "next/image";

export const BackgroundJefe = () => {
    return (
        <div className="absolute bottom-0 max-w-[620px] md:h-[calc(100vh-3rem)] z-10 flex justify-end">
            <Image alt="image del jefe la ilustracion" src="/static/images/game/jefe.png"
                   width={0} height={0} sizes="100vh"
                   style={{width: 'auto', height: 'auto'}}
            />
        </div>
    )
}