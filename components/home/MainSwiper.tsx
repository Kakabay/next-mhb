"use client";
import Image from "next/dist/client/image";
import Carousel from "react-multi-carousel";

const MainSwiper = () => {
  return (
    <Carousel
      responsive={{ all: { items: 1, breakpoint: { max: 4000, min: 0 } } }}
      autoPlay={true}
      autoPlaySpeed={3000}
      draggable
      showDots
      ssr
      infinite
      swipeable
    >
      <div>
        <Image
          src={"/home_banner.jpg"}
          alt="banner"
          height={100}
          width={100}
          unoptimized
          unselectable="off"
          className="w-full h-screen object-cover"
        />
      </div>
      <div>
        <Image
          src={"/home_banner.jpg"}
          alt="banner"
          height={100}
          width={100}
          unoptimized
          unselectable="off"
          className="w-full h-screen object-cover"
        />
      </div>
      <div>
        <Image
          src={"/home_banner.jpg"}
          alt="banner"
          height={100}
          width={100}
          unoptimized
          unselectable="off"
          className="w-full h-screen object-cover"
        />
      </div>
    </Carousel>
  );
};

export default MainSwiper;
