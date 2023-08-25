import Link from "next/link";

export default function NavBar({ active }) {
    return (
        <nav className="flex justify-between items-center bg-violet-900 p-6">
            <ul className="flex items-end gap-12 text-slate-400">
                <li>
                    <Link href="/">
                        <h1 className="text-2xl text-slate-100">
                            OpenCode
                        </h1>
                    </Link>
                </li>
                <li>
                    <Link className={active=="codigos" && "text-slate-100"} href="/codigos">
                        codigos
                    </Link>
                </li>
                <li>
                    <Link className={active=="portfolios" && "text-slate-100"} href="/portfolios">
                        portfolios
                    </Link>
                </li>
            </ul>

           
            <div className="h-12 w-12 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/100" alt="avatar do usuário" />
            </div>

        </nav>
    )
}