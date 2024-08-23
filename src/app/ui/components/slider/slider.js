import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation, Keyboard} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function Slider({ setArray, setNavegation, setAutoplay }) {

  const autoplayConfig = setAutoplay ? {
    disableOnInteraction: false,
    delay: 2500,
    pauseOnMouseEnter: true,
  } : false;

  return (
    <Swiper
      modules={[Pagination, Autoplay, Navigation]}
      className="mySwiper"
      autoplay={autoplayConfig}
      navigation={setNavegation}
      pagination={{ clickable: true }}
    >
      {/* render array */}
      {setArray.map((item, index) => (
        <SwiperSlide key={index}>
          {item.slide}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}