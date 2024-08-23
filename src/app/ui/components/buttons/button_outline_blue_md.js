import Link from "next/link";

export default function Button_outline_blue_md ({href, text}){

    return(
        <>
        <Link href={href}>
            <button className={`rounded-full w-full py-2 px-5 border border-blue-crea-500 text-blue-crea-500 hover:bg-blue-crea-500 hover:text-white hover:border-transparent transition-all`}>
                <p>{text}</p>
            </button>
        </Link>
        
        </>
    )
}