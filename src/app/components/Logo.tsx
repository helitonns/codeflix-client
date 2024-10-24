import Image from "next/image";
import Link from "next/link";


export default function Logo() {
    return (
        <Link href="/">
            <Image src="/logo.svg" alt="Netflix" width={90} height={90} className="cursor-pointer" />
        </Link>
    );
};