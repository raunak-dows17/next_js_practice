import Link from "next/link";

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <Link className="" href="/albums">
          <button className="p-5 bg-teal-500 border-2 rounded-lg border-teal-500 hover:bg-transparent transition-ease-in-out duration-500">
            Albums
          </button>
        </Link>
    </main>
  )
}
