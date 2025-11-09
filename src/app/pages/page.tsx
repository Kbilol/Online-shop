import { Button } from "@common/ui/Button"
import { Intro } from "@common/widgets/Intro"
import { ProductTape } from "@product/index"






export default function Home() {
  

  return (
    <section className="w-full flex flex-col gap-12">
      <Intro/>
      <ProductTape/>
      <Button variant = "primary">Primary</Button>
      <Button variant = "second">Secondary</Button>
      <Button variant = "warning">Warning</Button>
      <Button variant = "fourth">Fourth</Button>
    </section>
  )
}