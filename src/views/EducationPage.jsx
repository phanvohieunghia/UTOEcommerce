import React from 'react'
import { SwiperSlide } from 'swiper/react'

import Footer from '../components/Footer/Footer'
import Slider from '../components/Slider/Slider'
import sliderData from '../assets/data/slider.json'
import './educationpage.scss'

const EducationPage = () => {
  return (
    <main id="educationpage">
      <section className="banner">
        <Slider _effect= {"fade"} callback={SliderItem} />
      </section>
      <Footer />
    </main>
  )
}
const SliderItem = () => {
  return (
    <>
      {sliderData.educationSlider.map((data, i) => {
        return (
          <SwiperSlide>
            <img src={"/img/Education/slider/" + data + ".jpg"} alt="error png" />
          </SwiperSlide>
        )
      })}
    </>
  )
}

export default EducationPage