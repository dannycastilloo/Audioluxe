import { InstrumentCard } from "../components/InstrumentCard"

export const GuitarsScreen = () => {
    return (
        <>
            <h1 className="title">Guitars</h1>
            <div className="cards-container">
                <InstrumentCard img='/instruments/yamaha.jpg' name='Majesty 6 Tiger Eye' price='$5000'/>
                <InstrumentCard img='/instruments/yamaha.jpg' name='Majesty 6 Tiger Eye' price='$5000' />
                <InstrumentCard img='/instruments/yamaha.jpg' name='Majesty 6 Tiger Eye' price='$5000' />
                <InstrumentCard img='/instruments/yamaha.jpg' name='Majesty 6 Tiger Eye' price='$5000' />
            </div>
        </>
    )
}
