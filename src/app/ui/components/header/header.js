"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../../../../../public/brand/Estagios";
import Button_outline from "../buttons/button_outline";


export default function Header() {

  const [headerStiky, setheaderStiky] = useState({});

  useEffect(()=>{
    
    const activeStiky = () => {
      
      if (window.scrollY > 200) {
        
        setheaderStiky(true);
        
      } else {
        
        setheaderStiky(false);
      }
    };

    
    window.addEventListener("scroll", activeStiky);

    return () => {
      window.removeEventListener("scroll", activeStiky);
    };

  }, []);

  return (
    <>
      <div className={`text-blue-700 text-lg w-full sticky top-0 z-50 `}>
        <nav className={headerStiky ? 'bg-gray-50':'bg-white'}>

              <div className="mx-auto max-w-screen-lg flex flex-row items-center justify-center py-5 px-4 xl:px-0 sm:px-6 lg:px-8">
                  <Link href={"/"}>
                    <div className="w-44 md:w-56">
                      <Logo/>
                    </div>
                  </Link>

                  <div className="hidden">
                    <Button_outline href={'#'}  text={'Entrar'}/>
                  </div>

              </div>

        </nav>
      </div>
    </>
  );
}
