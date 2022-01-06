import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-center px-24 bg-white backdrop-filter backdrop-blur-md bg-opacity-80 w-full shadow-xl h-[90px] fixed z-50">
      {/* Nextjs Tailwind Navbar */}
      <div className="flex items-center justify-between flex-wrap text-slate-700 font-bold flex-1">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link href="/" passHref>
            <Image
              src="/img/logo.svg"
              alt="logo"
              className="h-8 hover:cursor-pointer"
              width={225}
              height={53}
            />
          </Link>
        </div>
        <div>
          <ul className="flex flex-row justify-center gap-6 flex-wrap">
            <li>
              <Link href="/buscar">Buscar inmuebles</Link>
            </li>
            <li>
              <Link href="/seguros">Yantrana Seguros</Link>
            </li>
            <li>Recibir asesoría</li>
          </ul>
        </div>
        <div>Iniciar sesión</div>
      </div>
    </nav>
  );
};

export default NavBar;
