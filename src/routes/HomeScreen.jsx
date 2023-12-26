import { Carousel } from "../components/Carousel"
import { CatalogueCard } from "../components/CatalogueCard"

export const HomeScreen = () => {
  return (
    <>
      <Carousel />
      <div className="catalogue-container">
        <CatalogueCard img="/instruments/guitar.jpg" name="Guitar" description="From classic acoustic guitars that resonate with soulful tones to electric guitars that ignite the stage. Just here!"  url="/guitar"/>
        <CatalogueCard img="/instruments/bass.jpg" name="Bass" description="We have a big variety of great basses with a big and clear sound. Enter here and choose your favorite!" url="/bass" />
        <CatalogueCard img="/instruments/drums.jpg" name="Drums" description="Experience the rhythmic heartbeat of music with our premium selection of drums!" url="/drums" />
        <CatalogueCard img="/instruments/dj.jpg" name="DJ" description="The best options here to get a high quality DJ and remix all of your favorite songs!" url="/dj" />
        <CatalogueCard img="/instruments/trumpet.jpg" name="Trumpet" description="Unleash the captivating melodies with our trumpets! Find the perfect instrument to elevate your musical journey." url="/trumpet" />
        <CatalogueCard img="/instruments/violin.jpg" name="Violin" description="Explore our collection today and let the strings of your imagination come to life!" url="/violin" />
      </div>
    </>
  )
}
