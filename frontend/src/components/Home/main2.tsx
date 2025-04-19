import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../css/main2.css";

interface Card {
  title: string;
  content: string;
}

function main2() {
  const cards: Card[] = [
    {
      title: "Book online appointments for veterinary clinics",
      content:
        "Find nearby veterinary clinics, read reviews, explore clinic details, and book an online appointment with your chosen clinic.",
    },
    {
      title: "View important dates with the calendar",
      content:
        "Use the calendar to track past and upcoming check-ups, vaccination dates, and appointments.",
    },
    {
      title: "Read reviews & share your feedback",
      content:
        "Browse clinic reviews and share your own experiences by leaving a comment.",
    },
    {
      title: "Pet health tips",
      content: "Get daily tips to keep your pet healthy and happy.",
    },
    {
      title: "Emergency contact numbers",
      content: "Quick access to nearby veterinary emergency numbers.",
    },
  ];

  return (
    <div className=" mt-5 px-10 py-10 lg:px-20 sm:px-8 bg-gray-100  ">
      <p className="text-center font-bold text-3xl mb-8 lg:mg-12">
        Features we offer
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }} // Altta noktalar
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Otomatik kaydırma
        modules={[Pagination, Autoplay, Navigation]}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
          800: { slidesPerView: 2 },
        }}
        className="w-full"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-50 bg-white shadow-lg border border-purple-400 rounded-lg p-6 transition-all duration-300 ease-in-out">
              <p className="font-bold text-lg text-purple-600">{card.title}</p>
              <p className="text-gray-700">{card.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default main2;
