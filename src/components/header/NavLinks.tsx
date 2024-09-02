import Link from "next/link";
import { usePathname } from "next/navigation";

const links = ["00 home", "01 destination", "02 crew", "03 technology"];

const NavLinks = ({ closeDrawer }: { closeDrawer?: () => void }) => {
  const pathname = usePathname();
  return (
    <menu className="space-y-8 font-headings uppercase tracking-widest text-slate-50 lg:flex lg:justify-center lg:gap-12 lg:space-y-0">
      {links.map((link) => (
        <li key={link}>
          <Link
            href={`/${link.includes("00") ? "" : link.slice(3)}`}
            aria-label={`Navigate to ${link.slice(3)} page`}
            onClick={closeDrawer}
            className={`relative transform transition duration-500 after:absolute after:left-1/2 after:top-8 after:block after:h-1 after:-translate-x-1/2 after:rounded after:bg-[#BCC4D8] after:transition-all after:duration-500 hover:opacity-100 after:hover:w-full md:after:top-10 ${
              pathname === `/${link.includes("00") ? "" : link.slice(3)}`
                ? "opacity-100 after:w-full"
                : "opacity-50 after:w-0"
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
