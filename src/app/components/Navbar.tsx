import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="flex p-4 bg-slate-950 shadow-lg fixed top-0 left-0 right-0 z-20 justify-between">
        <Link
          href={"#home"}
          className="lg:ml-10 md:ml-8 sm:ml-5 ml-2 lg:text-xl2 md:text-xl sm:text-lg text-sm font-extrabold text-blue-800 hover:text-blue-400 transition duration-300"
        >
          I D S H Y
        </Link>
        <ul className="flex lg:gap-5 md:gap-4 sm:gap-3 gap-2 lg:mr-10 md:mr-8 sm:mr-4 mr-0 text-blue-800 lg:text-lg md:text-lg sm:text-md text-sm">
          <li className="hover:text-blue-400 transition duration-300">
            <Link href="#home">Home</Link>
          </li>
          <li className="hover:text-blue-400 transition duration-300">
            <Link href="#gallery">Gallery</Link>
          </li>
          <li className="hover:text-blue-400 transition duration-300">About</li>
          <li className="hover:text-blue-400 transition duration-300">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}
