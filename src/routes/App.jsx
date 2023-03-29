import '../css/App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Navigation } from '../layouts/Navigation'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { ProductDetail } from '../pages/ProductDetail'
import ProductCardPrueba from '../components/ProductCardPrueba'

function App() {

  return (
    <BrowserRouter >
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetail />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/prueba' element={<ProductCardPrueba/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
