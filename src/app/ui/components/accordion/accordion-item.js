'use client'

import Text_head_3 from "../text/text-head-3";

export default function Accordion_item ( { title, description, img, index, onClick, isActive} ) {

  return (
    <>
    
      <div className={`rounded-lg border-2 transition-all text-blue-crea-400/80 ${isActive === index ? 'bg-blue-crea-400/10 border-blue-crea-400' : 'border-blue-crea-400/80'}`}>

        {/* Title */}
        <div className="p-4 relative h-20 md:h-auto overflow-y-hidden flex gap-3 items-center rounded-md cursor-pointer" onClick={onClick}>
          
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={`transition-all ${isActive === index && 'rotate-90'}`}
        >
          <path
            d="M18.723 12.8384L4.76537 18.723C4.46411 18.8435 4.1779 18.8176 3.90675 18.6451C3.63558 18.4727 3.5 18.2224 3.5 17.8941V6.10579C3.5 5.77758 3.63558 5.52725 3.90675 5.35482C4.1779 5.18239 4.46411 5.15643 4.76537 5.27694L18.723 11.1615C19.0948 11.3256 19.2806 11.6051 19.2806 12C19.2806 12.3948 19.0948 12.6743 18.723 12.8384ZM4.99997 17L16.85 12L4.99997 6.99997V10.6923L10.423 12L4.99997 13.3076V17Z"
            fill="#394BD3"
            fillOpacity="0.8"
          />
        </svg>


          <Text_head_3 className={'font-bold'}>{title}</Text_head_3>
        </div>
        

        {/* Information content */}
        <div className={`${isActive === index ? '':'hidden'}`}>

          <div className="p-4 mb-5 min-h-14 md:min-h-24" dangerouslySetInnerHTML={{ __html: description }} />

          <img src={img} className="w-5/6 mx-auto mb-5 md:hidden"></img>

        </div>
          
      </div>
    </>
  );
}