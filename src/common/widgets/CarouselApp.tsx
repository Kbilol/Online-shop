


import { Image } from "@common/ui/Image";
import { Carousel } from "flowbite-react";


export const CarouselApp: React.FC = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        <Image
        src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr0sO5OTNZY5nBCQrOMLqMynZtD3x-frVHAw&s"
        />
        <Image
        src="https://media.2x2tv.ru/content/images/2022/04/13f77689aef7e9ff9887121bcec0712a.jpg"
        />
        <Image
        src="https://memepedia.ru/wp-content/uploads/2019/08/day-2-grivni-2-768x578.jpg"
        />
        <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy9PbC-rJPuHwJJiisQCM8vCDekdsCb7VAHA&s"
        />
      </Carousel>
    </div>
  );
}

