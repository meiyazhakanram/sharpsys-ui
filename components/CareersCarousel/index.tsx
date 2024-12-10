"use client";
import SectionHeader from "../Common/SectionHeader";

import {Pagination,Autoplay,Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const images = [
    "/images/career/team/team_3.jpg",
    "/images/career/team/team_4.jpg",
    "/images/career/team/team_5.jpg",
    "/images/career/team/team_6.jpg",
    "/images/career/team/team_7.jpg",
    "/images/career/team/team_8.jpg",
    "/images/career/team/team_9.jpg",
    "/images/career/team/team_10.jpg",
    "/images/career/team/team_11.jpg",
];

const CareersCarousel = () => {

    return (
        <>
            <section>
                <div id="userStories" className="swiper h-full">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={3}
                        centeredSlides={true}
                        centeredSlidesBounds={true}
                        watchSlidesProgress
                        loop={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: true,
                            // reverseDirection:true,
                            pauseOnMouseEnter: true
                        }}

                        modules={[Autoplay, Pagination, Thumbs]}
                        breakpoints={{
                            // when window width is >= 640px
                            0: {
                                slidesPerView: 2,
                            },
                            // when window width is >= 848px
                            848: {
                                slidesPerView: 3,
                            },
                            // when window width is >= 988px
                            988: {
                                slidesPerView: 5,
                            },
                        }}
                    >
                        {images.map((src, index) => (
                            <SwiperSlide key={index}>
                                
                                <div className="flex justify-center">
                                    <img
                                        src={src}
                                        alt={"Sliders"}
                                        className="h-45 w-auto object-cover rounded-lg"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default CareersCarousel;
