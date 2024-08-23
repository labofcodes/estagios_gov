import Link from "next/link";

export default function Button_text_icon_outline_white ({ href, text, icon, target }){

    return(
        <>
        <Link 
            href={href} 
            target={target ? "_blank" : undefined}
            className='flex justify-between items-center rounded-full w-full py-2 px-5 border border-white text-white bg-white/20 hover:bg-white hover:text-blue-crea-500 hover:border-transparent transition-all'>
            {text}
            {icon}
        </Link>
        </>
    )
}