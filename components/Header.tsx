import Image from "next/image";
import Link from "next/link";
import { FaComment } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b pb-7 sm:px-4 px-2">
      <Link href="/" className="flex gap-3 items-baseline">
        <FaComment className="text-[1.6rem]" />
        <h1 className="sm:text-4xl text-2xl font-bold tracking-tight">
          Cee Chat
        </h1>
      </Link>
      <a
        href="https://vercel.com/templates/next.js/twitter-bio"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          alt="Vercel Icon"
          src="/vercelLogo.png"
          className="sm:w-8 sm:h-[27px] w-8 h-[28px]"
          width={32}
          height={28}
        />
      </a>
    </header>
  );
}
