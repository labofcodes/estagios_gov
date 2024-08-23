import Link from "next/link";
import Text_body from "../text/text-body";

export default function Button_outline ({href, text}){

    return(
        <>
        <Link href={href}>
            <button className={`rounded-full w-full min-w-32 md:min-w-40 py-2 px-5 border border-blue-crea-500 text-blue-crea-500 hover:bg-blue-crea-500 hover:text-white hover:border-transparent transition-all`}>
                <Text_body>{text}</Text_body>
            </button>
        </Link>
        
        </>
    )
}