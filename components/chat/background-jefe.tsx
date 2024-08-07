import Image from "next/image";

export const BackgroundJefe = () => {
    return (
        <div className="absolute bottom-0 max-w-[620px] md:h-[calc(100vh-3rem)] z-10 flex justify-end animate-fade-in-right">
            <Image alt="image del jefe la ilustracion" src="/static/images/game/jefe.png"
                    className="animate-pulsing"
                    width={0} height={0} sizes="100vh"
                    style={{width: 'auto', height: 'auto'}}
            />
        </div>
    )
}