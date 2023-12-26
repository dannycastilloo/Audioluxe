import { InstrumentCard } from '../components/InstrumentCard'

export const TrumpetScreen = () => {
  return (
    <>
      <h1 className="title">Trumpets</h1>
      <div className="cards-container">
        <InstrumentCard img='/instruments/trumpet.jpg' name='Majesty 6 Tiger Eye' price='$5000' />
        <InstrumentCard img='/instruments/trumpet.jpg' name='Majesty 6 Tiger Eye' price='$5000' />
        <InstrumentCard img='/instruments/trumpet.jpg' name='Majesty 6 Tiger Eye' price='$5000' />
        <InstrumentCard img='/instruments/trumpet.jpg' name='Majesty 6 Tiger Eye' price='$5000' />
      </div>
    </>
  )
}
