import React from 'react'

import '../DegreeCard.css'

const iceDegreeCard = (props) => {
  const { title, pertinence, value } = props
  return (
    <div className='Degree-content'>
      <div className='Degree-header'>
        <p className='Degree-title'>{title}</p>
      </div>
      <div className='Degree-body'>
        <div className='Degree-item'>Quantidade: {value} ml</div>
        <div className='Degree-item'>Pertinência: {pertinence}</div>
      </div>
    </div>
  )
}

export default iceDegreeCard
