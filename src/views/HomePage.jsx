import React from "react";
import { SwiperSlide } from "swiper/react";

import Footer from "../components/Footer/Footer";
import Item from "../components/Item/Item";
import Slider from "../components/Slider/Slider";
import "./homepage.scss";
import dataList from "../assets/data/NewProduct.json";
import sliderData from "../assets/data/slider.json";

const HomePage = () => {
  return (
    <>
      <section className="slider">
        <Slider _slides={1} _effect={"fade"} callback={renderSlider1Item} />
      </section>
      <section className="slider2 frame">
        <div className="slider2__title frame__title">CỬA HÀNG UY TÍN</div>
        <div className="x">
          <div className="x">
            <Slider _slides={3} callback={renderSlider2ITem} />
          </div>
        </div>
      </section>
      <section className="hp-main frame">
        <div className="frame__title">MẶT HÀNG MỚI</div>
        <div className="container">
          <div className="row">
            {dataList.map((data, i) => {
              return (
                <div className="col-4">
                  <Item
                    img={data.img}
                    name={data.name}
                    price={data.price}
                    address={data.address}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

const renderSlider1Item = () => {
  return (
    <>
      {sliderData.slider1.map((data, i) => {
        return (
          <>
            <SwiperSlide>
              <img
                src={"/img/Ecommerce/slider/" + data + ".jpg"}
                alt="error png"
              />
            </SwiperSlide>
          </>
        );
      })}
    </>
  );
};

const Slider2Item = ({ name, img }) => {
  return (
    <div className="slider2__content">
      <div className="slider2__img">
        <img src={"/img/Ecommerce/slider2/" + img + ".png"} alt="error png" />
      </div>
      <div className="slider2__name">{name}</div>
    </div>
  );
};
const renderSlider2ITem = () => {
  return (
    <>
      {sliderData.slider2.map((data, i) => {
        return (
          <SwiperSlide>
            <Slider2Item name={data.name} img={data.img} />
          </SwiperSlide>
        );
      })}
    </>
  );
};

export default HomePage;
