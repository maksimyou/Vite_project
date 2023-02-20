import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "./Banner.scss";
import "swiper/css";
import "swiper/css/navigation";
import BannerAdvertising from "../../UI/BannerAdvertising/BannerAdvertising";
import "swiper/scss";
import "swiper/scss/navigation";
function Banner() {
    return (
        <Swiper
            className='container_banner_swaiper'
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <BannerAdvertising />
            </SwiperSlide>
            <SwiperSlide>
                <BannerAdvertising />
            </SwiperSlide>
            <SwiperSlide>
                <BannerAdvertising />
            </SwiperSlide>
            <SwiperSlide>
                <BannerAdvertising />
            </SwiperSlide>
        </Swiper>
    );
}

export default Banner;
