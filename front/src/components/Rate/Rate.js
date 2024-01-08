import React from 'react'

export default function Rate({rate}) {
  const arrStar =[1,2,3,4,5]
  return (
    <div className='rateContainer'>
      {
        arrStar.map(el=>el<= rate? <i class="fa-solid   "></i> : <i class="fa-regular fa-star"></i>)
      }
    </div>
  )
}