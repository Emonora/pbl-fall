import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl">Promoting Mental Health</h1>
      <p className="text-center text-sm mt-4 w-1/4 t-40 italic">This is our pbl, created by august, ryan, and con. You can find any necessary information about our project on the sub pages of this website.</p>
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <p className="text-sm">Made with Next.js, and love from <a href="https://github.com/Emonora">Emonora</a></p>
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={25}
          height={10}
        />
      </div>
      <Link href="/propo">
      <button className="menu__button absolute bottom-0 left-50 p-4 text-white">
        <span>Amendment Proposal</span>
      </button>
      </Link>
    </main>
    </>
  );
}