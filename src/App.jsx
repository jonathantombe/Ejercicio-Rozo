
import { useState } from 'react';
import './App.css'
import { ComponentCard } from './components/ComponentCard'
import bart from './assets/descarga.jpg'

const url = 'https://thesimpsonsquoteapi.glitch.me/quotes';

function App() {

  const [nameCharacter, setNameCharacter] = useState('Bart')
  const [LogoImg, setLogoImg] = useState(bart)
  const [quoteCharacter, setQuoteCharacter] = useState('¡Ay caramba')
  const handleGetApi = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setNameCharacter(data[0].charecter)
    setQuoteCharacter(data[0].qoute)
    
  }
   

  return (
    <>
      <ComponentCard LogoImg={nameCharacter} />
      <button onClick={handleGetApi}>Generate Personaje</button>
    </>
  )
}

export default App
