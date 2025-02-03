import React from 'react'
import VerticalSlider from '../../UI/Slider/Slider'
import Input from '../../UI/Input/Input'

import './IngredientsCard.css'

const ingredientsCard = (props) => {
  const {
    softDrinkValue,
    onChangeSoftDrinkValue,
    runValue,
    onChangeRunValue,
    iceValue,
    onChangeIceValue,
    onChangeInputRun,
    onChangeInputIce,
    onChangeInputSoft,
    refInput
  } = props

  return (
    <div className='content-ingredients'>
      <div className='content-item'>
        <VerticalSlider
          value={softDrinkValue}
          onChange={onChangeSoftDrinkValue}
        />
        <Input
          refInput={refInput}
          value={softDrinkValue}
          changed={onChangeInputSoft}
        />
      </div>
      <div className='content-item'>
        <VerticalSlider value={runValue} onChange={onChangeRunValue} />
        <Input
          refInput={refInput}
          value={runValue}
          changed={onChangeInputRun}
        />
      </div>
      <div className='content-item'>
        <VerticalSlider value={iceValue} onChange={onChangeIceValue} />
        <Input
          refInput={refInput}
          value={iceValue}
          changed={onChangeInputIce}
        />
      </div>
    </div>
  )
}

export default ingredientsCard
