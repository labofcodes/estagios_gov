import Link from "next/link";

export default function Button_outline_white ({href, text, target}){

    return(
        <>
        <Link href={href} target={target ? "_blank" : undefined}>
            <button className={`rounded-full w-full py-2 px-5 border border-white text-white bg-white/20 hover:bg-white hover:text-blue-crea-500 hover:border-transparent transition-all`}>
                <p>{text}</p>
            </button>
        </Link>
        
        </>
    )
}