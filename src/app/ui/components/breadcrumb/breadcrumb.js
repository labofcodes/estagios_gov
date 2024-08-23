import Link from 'next/link'

export default function Breadcrumb ( {item1, url1, item2, url2, item3, url3, item4, url4, item5, url5,} ) {

  return (
    <div className="font-light text-sm text-gray-400 capitalize peer-[crumb]::hover:text-blue-500 *:transition-all">
        {item1 && <Link for='crumb' href={url1} className='hover:text-blue-crea-500 transition-all'>{item1}</Link>}
        {item2 && <Link for='crumb' href={url2 ? url2 : '#'} className='hover:text-blue-crea-500 transition-all'> {'>'} {item2}</Link>}
        {item3 && <Link for='crumb' href={url3 ? url3 : '#'} className='hover:text-blue-crea-500 transition-all'> {'>'} {item3}</Link>}
        {item4 && <Link for='crumb' href={url4 ? url4 : '#'} className='hover:text-blue-crea-500 transition-all'> {'>'} {item4}</Link>}
        {item5 && <Link for='crumb' href={url5 ? url5 : '#'} className='hover:text-blue-crea-500 transition-all'> {'>'} {item5}</Link>}
          
    </div>
  );
}