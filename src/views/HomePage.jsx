import React from 'react'
import Slider from '../components/Slider/Slider'

const HomePage = () => {
  const renderRow1 = () => {
    return (
      <div className="x__item">
        <div className="x__img">
          <img src="x" alt="error png" />
        </div>
        <div className="x__text">
          Cửa hàng máy tính
        </div>
      </div>
    )
  }
  return (
    <div className="homepage">
      <Slider />
      <div className="row hp-row1">
        <div className="hp-row1__title">
          CỬA HÀNG UY TÍN
        </div>
        <div className="hp-row2__content">
          <Slider />
        </div>
      </div>
      <div className="row hp-row2">

      </div>
      <div className="row hp-row3">

      </div>
      <div className="row hp-row4">

      </div>
      <div className="row hp-row5">

      </div>
      
    </div>
  )
}

export default HomePage