"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { images } from "./helpers/data";
import HeroOverlay from "./HeroOverlay";



export default function SliderComponent() {
    console.log(images[0].imageUrl)
    return (
        <div className="-z-10 md:relative">
          <HeroOverlay />
          <Swiper
            style={{
            //   "--swiper-navigation-color": "#fff",
            //   "--swiper-pagination-color": "#fff",
            }}
            speed={600}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  slot="container-start"
                  className={`parallax-bg bg-[url('${image.imageUrl}')]`}
                ></div>
                <div className="title" data-swiper-parallax="-300">
                  {image.title}
                </div>
                <div className="subtitle" data-swiper-parallax="-200">
                  {image.subtitle}
                </div>
                <div className="text" data-swiper-parallax="-100">
                  <p>{image.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
    }
    