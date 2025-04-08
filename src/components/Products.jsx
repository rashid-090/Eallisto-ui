import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { products } from "../components/data";
import { Link } from "react-router-dom";

const ProductCarousel = () => {
  return (
    <div className="product-carousel-container relative w-11/12 xl:w-10/12 mx-auto py-12">
      <h2 className="text-3xl xl:text-5xl font-semibold text-center pb-5">
        Our <span className="text-main">Products</span>
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide
            key={product.id}
            className="bg-white border overflow-hidden"
          >
            <div className="h-full flex flex-col">
              <div className="h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 flex-grow">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 truncate text-sm">
                  {product.description}
                </p>
                <Link
                  to={`/product/${product.slug}`}
                  className="text-main hover:text-main-hover"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows with React Icons */}
      <div className="custom-swiper-button-prev absolute -left-3 md:!-left-5 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition">
        <FaChevronLeft className="h-5 w-5 text-main" />
      </div>
      <div className="custom-swiper-button-next absolute -right-3 md:!-right-5 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition">
        <FaChevronRight className="h-5 w-5 text-main" />
      </div>

      {/* Custom Pagination Dots */}
      <div className="swiper-pagination flex justify-center mt-0 xl:mt-3 space-x-2"></div>

      <style jsx global>{`
        /* Hide default Swiper arrows */
        .swiper-button-next,
        .swiper-button-prev {
          display: none !important;
        }

        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: #cbd5e0;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background-color: #23a639;
        }
        .swiper-button-disabled {
          opacity: 0.5;
          cursor: not-allowed;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default ProductCarousel;
