import Link from "next/link";

export default function Button_text_icon_outline_white_md ( { href, text, icon } ){

    return(
        <>
        <Link 
            href={href} 
            className='px-5 py-2 rounded-full border border-white flex max-w-48 justify-between items-center hover:bg-white group-hover:bg-white bg-white/20 text-white group-hover:text-blue-crea-500 hover:translate-x-1 right-5 bottom-5 transition-all'>
            {text}
            {icon}
        </Link>
        </>
    )
}