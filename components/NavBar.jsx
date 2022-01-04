import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-white">
      {/* Nextjs Tailwind Navbar */}
      <div className="flex items-center justify-between flex-wrap p-6 max-w-4xl mx-16">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
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
        <div className=" text-cyan-700">
          <ul className="flex flex-row justify-between flex-wrap">
            <li>
              <Link href="/buscar">Buscar inmuebles</Link>
            </li>
            <li>
              <Link href="/contacto">Yantrana Seguros</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
