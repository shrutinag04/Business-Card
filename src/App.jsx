import { useState } from 'react';
import  Photo from './components/Photo';
import  Info from './components/Info';
import  Buttons from './components/Buttons';
import  About from './components/About';
import  Interests from './components/Interests';
import Footer from './components/Footer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container">
        <Photo/>
        <Info/>
        <Buttons/>
        <About/>
        <Interests/>
        <Footer/>
      </div>     
    </>
  )
}

export default App
