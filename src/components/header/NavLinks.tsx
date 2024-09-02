import Link from "next/link";
import { usePathname } from "next/navigation";

const links = ["00 home", "01 destination", "02 crew", "03 technology"];

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <menu className="space-y-8 font-headings uppercase tracking-widest text-slate-50 md:flex md:justify-center md:gap-12 md:space-y-0">
      {links.map((link) => (
        <li key={link}>
          <Link
            href={`/${link.includes("00") ? "" : link.slice(3)}`}
            aria-label={`Navigate to ${link.slice(3)} page`}
            className={`relative opacity-50 transition duration-500 after:absolute after:top-12 after:block after:h-1 after:w-full after:scale-0 after:rounded after:bg-[#D0D6F9] after:transition after:duration-500 hover:opacity-100 after:hover:scale-100 ${
              pathname === `/${link.includes("00") ? "" : link.slice(3)}`
                ? "opacity-100 after:scale-100"
                : ""
            }`}
          >
            {link}
          </Link>
        </li>
      ))}
    </menu>
  );
};
export default NavLinks;
