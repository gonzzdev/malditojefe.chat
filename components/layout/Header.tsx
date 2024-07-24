import Image from "next/image";
import Link from "next/link";

export function  Header(){

    return(

        <div className="bg-[#F4222D] w-full px-10 py-4 flex flex-row justify-between items-center">
            <div>
                <a href="/#index">
                    <Image alt="logo principal" src="/static/images/logo_principal.png" width="30" height="30"/>
                </a>
            </div>
            <ul className="hidden sm:flex flex-row gap-4 text-[#16161E] text-lg font-semibold">
                <li className="hover:text-[#EAD82A] transition duration-200">
                    <Link href="/home">
                        Juego
                    </Link>
                </li>
                <li>
                    <Link href="/home" className="hover:text-[#EAD82A] transition duration-200">
                        Colección
                    </Link>
                </li>
                <li>
                    <Link href="/home" className="hover:text-[#EAD82A] transition duration-200">
                        Top 100
                    </Link>
                </li>
                <li>
                    <Link href="/home" className="hover:text-[#EAD82A] transition duration-200">
                        Compartir
                    </Link>
                </li>
            </ul>
        </div>
    )
}