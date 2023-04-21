"use client";
import Image from "next/dist/client/image";
import Carousel from "react-multi-carousel";

interface IProps {
  images: string[];
}

const SmallSwiper = ({ images }: IProps) => {
  return (
    <div>
      <Carousel
        containerClass="small-swiper"
        responsive={{ all: { items: 1, breakpoint: { max: 4000, min: 0 } } }}
        autoPlay={true}
        autoPlaySpeed={5000}
        draggable
        showDots
        ssr
        infinite
        swipeable
        className="h-full"
      >
        {images.map((image) => (
          <div className="w-full overflow-hidden">
            <Image
              src={image}
              alt="small_banner"
              height={1}
              width={1}
              unoptimized
              unselectable="off"
              className="w-full object-cover pointer-events-none"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SmallSwiper;
