import { Carousel } from "../components/Carousel"
import { CatalogueCard } from "../components/CatalogueCard"

export const HomeScreen = () => {
  return (
    <>
      <Carousel />
      <div className="catalogue-container">
        <CatalogueCard img="../src/assets/guitar.jpg" name="Guitar" description="Find your guitar right here. Fender, Gibson, PRS, Yamaha, G&L and more!" url="/guitar" />
        <CatalogueCard img="../src/assets/bass.jpg" name="Bass" description="Find your guitar right here. Fender, Gibson, PRS, Yamaha, G&L and more!" url="/bass" />
        <CatalogueCard img="../src/assets/drums.jpg" name="Drums" description="Find your guitar right here. Fender, Gibson, PRS, Yamaha, G&L and more!" url="/drums" />
        <CatalogueCard img="../src/assets/dj.jpg" name="DJ" description="The best options here to get a high quality DJ and remix all of your favorite songs!" url="/dj" />
        <CatalogueCard img="../src/assets/trumpet.jpg" name="Trumpet" description="Find your guitar right here. Fender, Gibson, PRS, Yamaha, G&L and more!" url="/trumpet" />
        <CatalogueCard img="../src/assets/violin.jpg" name="Violin" description="Violins are difficult but great sounding instruments, totally worth it!" url="/violin" />
      </div>
    </>
  )
}
