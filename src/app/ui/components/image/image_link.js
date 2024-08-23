import Link from 'next/link'
import Image from "next/image"

export default function Image_link ( { href, src } ) {
  return (
    <Link href={href} target='blank'>
        <Image src={src} width={400} height={400} className='hover:scale-95 transition-all rounded-md'/>
    </Link>
  );
}