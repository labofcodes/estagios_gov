import Link from "next/link";

export default function Button_icon ( { href, icon } ){

    return(
        <>
        <Link 
            href={href} 
            className='p-1 max-w-7 group-hover:bg-white text-white group-hover:text-black right-5 bottom-5 rounded-md transition-all'>
            {icon}
        </Link>
        </>
    )
}