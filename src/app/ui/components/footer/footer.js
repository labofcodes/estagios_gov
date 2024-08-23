'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../../../../public/brand/Estagios";
import Text_footer from "../text/text-footer";

export default function Footer() {
  const pathName = usePathname();
  return (
    <>
      <footer className={`text-blue-crea-400 w-full`}>
        <div className="border-t border-blue-crea-400 mx-auto max-w-screen-xl flex flex-col md:flex-row gap-4 items-center justify-center py-10">
            <Link href={"/"}>
              <div className="w-28 animate-fade-down animate-duration-300">
                <Logo/>
              </div>
            </Link>

            <div>
              <Text_footer>Todos os direitos reservados</Text_footer>
            </div>
        </div>
      </footer>
    </>
  );
}
