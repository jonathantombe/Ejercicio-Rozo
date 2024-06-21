
import { useState } from 'react'
import './App.css'
import { ComponentCard } from './components/ComponentCard'
const URL = 'https://thesimpsonsquoteapi.glitch.me/quotes'
import bart from './assets/descarga.jpg'

function App() {

  const [nameCharacter, setNameCharacter] = useState('Bart')
  const [imgCharacter, setImgCharacter] = useState(bart)
  const [quoteCharacter, setQuoteCharacter] = useState('¡Ay caramba!')

  const handleGetApi = async () => {
    const response = await fetch(URL)
    const data = await response.json()

    setNameCharacter(data[0].character)
    setQuoteCharacter(data[0].quote)
    setImgCharacter(data[0].image)
  }

  return (
    <>
      <ComponentCard
        nameCharacter={nameCharacter}
        imgCharacter={imgCharacter}
        quoteCharacter={quoteCharacter}
      />
      <button onClick={handleGetApi}>Generar Personaje</button>
    </>
  )
}

export default App