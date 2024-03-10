import Link from "next/link";

export default function NavBar() {

    return (
        <nav className={"sp_evenly h-14 border-2"}>
            <Link href={"/"}>home</Link>|
            <Link href={"/page1"}>page 1</Link>|
            <Link href={"/page2"}>page 2</Link>
        </nav>
        )
}