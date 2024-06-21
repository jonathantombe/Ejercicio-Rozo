import React from 'react'
import LogoImg from '../assets/descarga.jpg'

export const ComponentCard = ({LogoImg, nameCharacter,quoteCharacter}) => {
  return (
      <div>
          <h1>Welcome</h1>
          <img src={LogoImg} alt="" />
          <h2>{nameCharacter}</h2>
          <p>{ quoteCharacter}</p>
    </div>
  )
}
