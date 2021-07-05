import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, page }) {
  return (
    <div className="bg-blue-50 pt-5 text-center min-h-screen">
      <Head>
        <title>{page}</title>
      </Head>
      <header className="container-lg">
        <h1 className="text-5xl mb-2">Crypto watch</h1>
        <div className="inline-grid grid-cols-2 gap-x-10 p-4">
          <Link href="/">
            <button className="bg-blue p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">
              Accueil
            </button>
          </Link>
          <Link href="/about">
            <button className="bg-blue p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">
              À propos
            </button>
          </Link>
        </div>
        <div>
          <Image
            src="/blockchain.jpg"
            alt="crypto image"
            height="25"
            width="400"
            className="rounded-3xl object-cover "
          />
        </div>
      </header>
      <main className="pt-4 mx-20">{children}</main>

      <footer className="p-10">
        <div>
          <Image
            src="/blockchain.jpg"
            alt="crypto image"
            height="30"
            width="1000"
            className="rounded-3xl object-cover "
          />
          <ul className="pt-10 pb-4 flex justify-around">
              <li>À propos</li>
              <li>Qui sommes-nous</li>
              <li>Mina mina - 2020</li>
          </ul>
          <p>Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem 
              ipsumLorem ipsum Lorem ipsum Lorem ipsum v Lorem ipsum
               Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
               Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
        </div>
      </footer>
    </div>
  );
}
