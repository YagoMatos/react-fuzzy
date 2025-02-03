import React from 'react'

import {
  drinkStrongDegree,
  drinkWeakDegree,
  drinkSoftDegree,
  drinkValue,
  drinkPalate
} from '../../../../services/drink'

import '../DegreeCard.css'
import './DrinkDegreeCard.css'

const degreeCard = (props) => {
  const { run, ice, softDrink, title, iceQtd, runQtd, softQtd, softName } =
    props
  const soft = drinkSoftDegree(run, ice, softDrink)
  const weak = drinkWeakDegree(run, ice, softDrink)
  const strong = drinkStrongDegree(run, ice, softDrink)
  const value = drinkValue(soft, weak, strong)
  const palate = drinkPalate(
    soft,
    weak,
    strong,
    iceQtd,
    runQtd,
    softQtd,
    softName
  )

  return (
    <div className='Degree-drink-content'>
      <div className='Degree-header'>
        <p className='Degree-title'>{title}</p>
      </div>
      <div className='Degree-body-result'>
        <div className='items'>
          <div className='Degree-item'>Fraco: {weak}</div>
          <div className='Degree-item'>Suave: {soft}</div>
          <div className='Degree-item'>Forte: {strong}</div>
        </div>
        <div className='values'>
          <div className='Degree-value'>Valor: R$ {value}</div>
          <div className='Degree-item Degree-palate'>{palate}</div>
        </div>
      </div>
    </div>
  )
}

export default degreeCard
