import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@/styles/image_carousel_style.scss";
import { Carousel } from "react-responsive-carousel";
import React from "react";
import { Imgold } from "@/public";
import Image from "next/image";

interface ImageCarouselProps {
  imageList: string[];
  serviceLabel: string;
  showMiiniature: boolean;
}

const coverList = [Imgold, Imgold, Imgold, Imgold];

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  imageList,
  serviceLabel,
  showMiiniature = true,
}) => {
  return (
    <div className="image-carousel">
      <div className="carousel-sliderr">
        <Carousel className=" w-full" showThumbs={false}>
          {imageList.length > 0
            ? imageList.map((cover, index) => (
                <div
                  key={index}
                  id={`item${index + 1}`}
                  className="carousel-item relative w-full"
                >
                  <img
                    src={cover}
                    /* width={576}
                              height={768} */
                    alt={serviceLabel + index}
                    className="internet-img w-full rounded-[5px]"
                  />
                </div>
              ))
            : coverList.map((cover, index) => (
                <div
                  key={index}
                  id={`item${index + 1}`}
                  className="carousel-item relative w-full"
                >
                  <Image
                    src={cover}
                    alt={serviceLabel + index}
                    className="w-full rounded-[5px]"
                  />
                </div>
              ))}
        </Carousel>
      </div>
      {showMiiniature && (
        <div className="carousel-miniature flex justify-start w-full gap-[1.5px] mt-0">
          {/* service images */}
          {/* {service.coverList.map((cover, index) => (
                    <div className="carousel-item relative w-[9em] h-[7.5em]">
                      <Image
                        src={cover}
                        alt={service.title}
                        className="w-full rounded-[5px]"
                      />
                    </div>
                  ))} */}
          {imageList.length > 0
            ? imageList.map((cover, index) => (
                <img
                  key={index}
                  src={cover}
                  alt={serviceLabel + index}
                  className="miniature-img"
                />
              ))
            : coverList.map((cover, index) => (
                <Image
                  key={index}
                  src={cover}
                  alt={"service.title"}
                  className="miniature-img"
                />
              ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
