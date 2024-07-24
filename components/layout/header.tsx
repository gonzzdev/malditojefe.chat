import Image from "next/image";
import Link from "next/link";

export function Header() {

    return (

        <nav className="bg-[#F4222D] w-full px-10 py-5">
            <div className="container flex flex-row justify-between items-center">
                <div>
                    <Image alt="logo principal" src="/static/images/logo_principal.png" width="50" height="50"/>
                </div>
                <ul className="flex flex-row gap-3 text-lg">
                    <li>
                        <Link href="/home">
                            Juego
                        </Link>
                    </li>
                    <li>
                        <Link href="/home">
                            Coleccion
                        </Link>
                    </li>
                    <li>
                        <Link href="/home">
                            Top 100
                        </Link>
                    </li>
                    <li>
                        <Link href="/home">
                            Comparte
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}