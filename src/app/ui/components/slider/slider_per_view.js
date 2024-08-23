import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation, Keyboard} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function Slider_per_view ( { setArray, desktop, tablet, mobile } ) {

    return(

        <Swiper 
          
          breakpoints={{
            576: {
              // width: 576,
              slidesPerView: mobile,
            },
            768: {
              // width: 768,
              slidesPerView: tablet,
            },
            1080: {
              // width: 1080,
              slidesPerView: desktop,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }} 
          modules={[Pagination, Autoplay]} 
          className="mySwiperPerView" 
          autoplay={{disableOnInteraction: false,
          delay: 2500,
          pauseOnMouseEnter: true,}}>
          
          {/* render array */}
          {setArray.map( item => (
            <SwiperSlide key={item.key}>
              {item.slide}
            </SwiperSlide>
          ))}

        </Swiper>
    )
    
}