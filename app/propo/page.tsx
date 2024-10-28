import Image from 'next/image'

export default function Home () {
    return (
        <main className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-3xl'>Amendment Proposal</h1>
            <p className="text-center text-sm mt-4 w-1/4 t-40 italic">This is the amendment proposal written and drafted by con, and ryan.</p>
            <div className="absolute bottom-0 left-0 p-4 text-white">
                <p className="text-sm">Made with Next.js, and love from <a href="https://github.com/Emonora">Emonora</a></p>
                <Image
                    src="/next.svg"
                    alt="Next.js logo"
                    width={25}
                    height={10}
                />
        </div>
        </main>
    );
}