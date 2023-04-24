import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Autoplay } from "swiper";
import { Navigation } from "swiper";

function AboutUs() {
  SwiperCore.use([Autoplay]);

  const [populars, setPopulars] = useState([]);

  //automatically works on page reload
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/populars/popular")
      .then((res) => {
        setPopulars(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
  
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Popular Courses</h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Some of Our Popular and trending courses at a glance.</p>
    </div>
    <div className=" flex flex-wrap sm:justify-end mr-2 mb-2 justify-center gap-4 z-50">
          <button className="btn btn-primary  rounded-full hover:bg-blue-600 text-blue text-xs font-semibold py-2 px-2 testimonial-swiper-button-prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button className=" btn btn-primary rounded-full hover:bg-blue-600 text-blue text-xs font-semibold py-2 px-2 testimonial-swiper-button-next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>

    <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={10}
          grabCursor={true}
          effect={"creative"}
          navigation={{
            nextEl: ".testimonial-swiper-button-next",
            prevEl: ".testimonial-swiper-button-prev",
          }}
          autoplay={{
            delay: 3000,
          }}
          loop={true}
          modules={[Navigation]}
          className="mySwiper mt-8"
        >

    <div class="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
    {populars.map((popular, index) => (
     <SwiperSlide>
      <div>
        <a href="#" class="group relative block h-96  overflow-hidden rounded-lg  shadow-lg lg:mb-3">
          <img src={popular.imageUrl} 
          alt="Photo by Nick Karvounis"
          class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

         
        </a>

        <div class="flex items-start justify-between gap-2 px-2">
          <div class="flex flex-col">
            <a href="#" class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">{popular.courseName}</a>
            <span class="text-gray-500">by {popular.userName}</span>
          </div>

          <div class="flex flex-col items-end">
            <span class="font-bold text-gray-600 lg:text-lg">Rs {popular.price}</span>
            <span class="text-sm text-red-500 line-through">Rs6000</span>
          </div>
        </div>
      </div>
      </SwiperSlide>
    ))};
     
    </div>
    </Swiper>
  </div>
</div>
    </div>
  )
}

export default AboutUs
