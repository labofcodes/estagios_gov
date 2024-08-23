import Link from "next/link";

export default function Button_text_icon_fill_blue ( { href, text, icon } ){

    return(
        <>
        <Link 
            href={href} 
            target='_blank'
            className='px-5 py-2 w-full rounded-full border border-blue-crea-500 flex justify-between items-center hover:bg-blue-crea-400 group-hover:bg-blue-crea-400 bg-blue-crea-500 text-white group-hover:text-white hover:translate-x-1 right-5 bottom-5 transition-all'>
            {text}
            {icon}
        </Link>
        </>
    )
}