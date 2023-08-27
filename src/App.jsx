import { Routes, Route, Navigate } from 'react-router-dom'
import { NavBar } from "./components/NavBar"
import { HomeScreen } from './routes/HomeScreen'
import { ContactScreen } from './routes/ContactScreen'
import { CatalogueScreen } from './routes/CatalogueScreen'
import { AboutScreen } from './routes/AboutScreen'
import { GuitarsScreen } from './routes/GuitarsScreen'
import { BassScreen } from './routes/BassScreen'
import { DrumsScreen } from './routes/DrumsScreen'
import { DJScreen } from './routes/DJScreen'
import { TrumpetScreen } from './routes/TrumpetScreen'
import { ViolinScreen } from './routes/ViolinScreen'
import { Footer } from './components/Footer'

export const App = () => {
    return (
        <>
            <NavBar></NavBar>
            <Routes>
                <Route path='/' element={ <HomeScreen></HomeScreen> }></Route>
                <Route path='/about' element={ <AboutScreen></AboutScreen> }></Route>
                <Route path='/contact' element={ <ContactScreen></ContactScreen> }></Route>
                <Route path='/catalogue' element={ <CatalogueScreen></CatalogueScreen> }></Route>
                <Route path='/guitar' element={ <GuitarsScreen></GuitarsScreen> }></Route>
                <Route path='/bass' element={ <BassScreen></BassScreen> }></Route>
                <Route path='/drums' element={ <DrumsScreen></DrumsScreen> }></Route>
                <Route path='/dj' element={ <DJScreen></DJScreen> }></Route>
                <Route path='/trumpet' element={ <TrumpetScreen></TrumpetScreen> }></Route>
                <Route path='/violin' element={ <ViolinScreen></ViolinScreen> }></Route>
                <Route path='/*' element={ <Navigate to='/' /> }></Route>
            </Routes>
            <Footer></Footer>
        </>
    )
}
