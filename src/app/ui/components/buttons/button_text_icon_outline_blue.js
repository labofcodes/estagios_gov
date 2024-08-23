import Link from "next/link";

export default function Button_text_icon_outline_blue ({ href, text, icon }){

    return(
        <>
        <Link 
            href={href} 
            target="blank"
            className='flex justify-between items-center rounded-full w-full py-2 px-5 border border-blue-crea-500 text-blue-crea-500 hover:bg-blue-crea-500 hover:text-white hover:border-transparent hover:translate-x-1 transition-all'>
            <p>{text}</p>
            {icon}
        </Link>
        </>
    )
}