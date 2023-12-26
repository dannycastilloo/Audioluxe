import { InstrumentCard } from '../components/InstrumentCard'

export const ViolinScreen = () => {
  return (
    <>
      <h1 className="title">Violins</h1>
      <div className="cards-container">
        <InstrumentCard img='/instruments/violin.jpg' name='Majesty 6 Tiger Eye' price='$5000' />
        <InstrumentCard img='/instruments/violin.jpg' name='Majesty 6 Tiger Eye' price='$5000' />
        <InstrumentCard img='/instruments/violin.jpg' name='Majesty 6 Tiger Eye' price='$5000' />
        <InstrumentCard img='/instruments/violin.jpg' name='Majesty 6 Tiger Eye' price='$5000' />
      </div>
    </>
  )
}
