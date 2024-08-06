import Image from "next/image";

export const BackgroundFuego = () => {
    return (
        <div className="absolute bottom-0 flex justify-center w-full">
            <div className="max-w-[60rem] md:w-full flex justify-center">
                <Image alt="image del jefe la ilustracion" src="/static/images/game/fuego.png"
                       width={0} height={0} sizes="100vw"
                       style={{width: 'auto', height: 'auto'}}
                />
            </div>
        </div>
    )
}