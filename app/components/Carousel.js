"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import home2 from "../../public/maninstall.webp";
import home1 from "../../public/new-boiler.jpg";
import home3 from "../../public/seven.png";
import home4 from "../../public/black-style.webp";
import home5 from "../../public/hflow.png";
import home6 from "../../public/four.png";

const images = [home1, home3, home2, home4, home5, home6];

const ImageCarousel = () => {
  return (
    <div className="w-full mt-18 ml-8 max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full h-[300px]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="relative w-full h-[300px]">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;

// const images = [home2, home1, home3];
// const Carousel = () => {
//   return (
//     <div className="w-full max-w-4xl mx-auto">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={20}
//         slidesPerView={1}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         className="w-full h-[300px]"
//       >
//         {images.map((num) => (
//           <SwiperSlide key={} className="flex justify-center items-center">
//             <div className="bg-blue-500 text-white text-2xl font-bold p-10 rounded-lg">
//               Slide {num}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Carousel;

// import Image from "next/image";
// import home1 from "../../public/IMG_9019.jpg";
// // import home2 from "../../public/IMG_9027.jpg";
// // import home3 from "../../public/IMG_9019.jpg";
// import Link from "next/link";

// function Carousel() {
//   return (
//     <div className="carousel w-full">
//       <div id="slide1" className="carousel-item relative w-full">
//         <Image src={home1} className="w-full" />
//         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//           <Link href="#slide4" className="btn btn-circle">
//             ❮
//           </Link>
//           <Link href="#slide2" className="btn btn-circle">
//             ❯
//           </Link>
//         </div>
//       </div>
//       <div id="slide2" className="carousel-item relative w-full">
//         <Image src={home1} className="w-full" alt={""} />
//         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//           <a href="#slide1" className="btn btn-circle">
//             ❮
//           </a>
//           <a href="#slide3" className="btn btn-circle">
//             ❯
//           </a>
//         </div>
//       </div>
//       <div id="slide3" className="carousel-item relative w-full">
//         <Image src={home1} className="w-full" alt="" />
//         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//           <Link href="#slide2" className="btn btn-circle">
//             ❮
//           </Link>
//           <Link href="#slide4" className="btn btn-circle">
//             ❯
//           </Link>
//         </div>
//       </div>
//       <div id="slide4" className="carousel-item relative w-full">
//         <Image
//           src={home1}
//           height={10}
//           width={20}
//           alt="Logo Of Homeland Ghana"
//         />

//         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//           <Link href="#slide3" className="btn btn-circle">
//             ❮
//           </Link>
//           <Link href="#slide1" className="btn btn-circle">
//             ❯
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Carousel;
