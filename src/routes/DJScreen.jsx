import { InstrumentCard } from '../components/InstrumentCard'

export const DJScreen = () => {
  return (
    <>
      <h1 className="title">DJ</h1>
      <div className="cards-container">
        <InstrumentCard img='/instruments/dj.jpg' name='Majesty 6 Tiger Eye' price='$5000' />
        <InstrumentCard img='/instruments/dj.jpg' name='Majesty 6 Tiger Eye' price='$5000' />
        <InstrumentCard img='/instruments/dj.jpg' name='Majesty 6 Tiger Eye' price='$5000' />
        <InstrumentCard img='/instruments/dj.jpg' name='Majesty 6 Tiger Eye' price='$5000' />
      </div>
    </>
  )
}
