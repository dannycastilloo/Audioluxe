import { InstrumentCard } from "../components/InstrumentCard"

export const BassScreen = () => {
  return (
    <>
      <h1 className="title">Basses</h1>
      <div className="cards-container">
        <InstrumentCard img='/instruments/bass.jpg' name='Majesty 6 Tiger Eye' price='$5000' />
        <InstrumentCard img='/instruments/bass.jpg' name='Majesty 6 Tiger Eye' price='$5000' />
        <InstrumentCard img='/instruments/bass.jpg' name='Majesty 6 Tiger Eye' price='$5000' />
        <InstrumentCard img='/instruments/bass.jpg' name='Majesty 6 Tiger Eye' price='$5000' />
      </div>
    </>
  )
}
