import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import ShowPlan from "./ShowPlan";
import ShowSave from "./ShowSave";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-black">
      <div className="navbar mx-auto container">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 space-y-1 shadow"
            >
              <NavLinks />
            </ul>
          </div>
          <Link href={`/`} className="flex gap-2 font-bold btn-ghost text-xl">
            <Image src={Logo} width={24} height={24} alt="Fitlog" />
            <span className="text-white">FITLOG</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-2 menu menu-horizontal px-1">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <ShowPlan />
          <ShowSave />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
