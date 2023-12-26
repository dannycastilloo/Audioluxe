import { InstrumentCard } from '../components/InstrumentCard'

export const DrumsScreen = () => {
  return (
    <>
      <h1 className="title">Drums</h1>
      <div className="cards-container">
        <InstrumentCard img='/instruments/drums.jpg' name='Majesty 6 Tiger Eye' price='$5000' />
        <InstrumentCard img='/instruments/drums.jpg' name='Majesty 6 Tiger Eye' price='$5000' />
        <InstrumentCard img='/instruments/drums.jpg' name='Majesty 6 Tiger Eye' price='$5000' />
        <InstrumentCard img='/instruments/drums.jpg' name='Majesty 6 Tiger Eye' price='$5000' />
      </div>
    </>
  )
}
