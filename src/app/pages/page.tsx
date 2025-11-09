
import { CarouselApp } from "@common/widgets/CarouselApp"
import { Intro } from "@common/widgets/Intro"
import { ProductTape } from "@product/index"






export default function Home() {
  

  return (
    <section className="w-full flex flex-col gap-12">
      <Intro/>
      <CarouselApp/>
      <ProductTape/>
    </section>
  )
}