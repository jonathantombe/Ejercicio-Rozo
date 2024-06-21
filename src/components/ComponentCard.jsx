import React from 'react'
import bart from '../assets/descarga.jpg'

export const ComponentCard = ({ imgCharacter, nameCharacter,quoteCharacter}) => {
  return (
      <div>
          <h1>Welcome</h1>
          <img src={imgCharacter} alt="" />
          <h2>{nameCharacter}</h2>
          <p>{ quoteCharacter}</p>
    </div>
  )
}
