import React from 'react';
import { SwiperSlide } from 'swiper/react';

import Footer from '../components/Footer/Footer';
import Items from '../components/Item/Item';
import Slider from '../components/Slider/Slider';
import './homepage.scss';
import dataList from '../assets/data/NewProduct.json';
import sliderData from '../assets/data/slider.json';

const HomePage = () => {
  return (
    <main id="homepage">
      <section className="slider">
        <Slider _effect={'fade'} callback={renderSlider1Item} />
      </section>
      <section className="slider2 frame">
        <div className="slider2__title frame__title">CỬA HÀNG UY TÍN</div>
        <Slider _slides={3} callback={renderSlider2ITem} />
      </section>
      {/* FLASH SALE */}
      <section className="flashsale frame">
        <div className="frame__title flashsale__title">
          <div className="flashsale__title-left">FLASH SALE</div>
          <div className="flashsale__title-right">Xem thêm</div>
        </div>
        <div className="container">
          <div className="row">
            {dataList.map((data, i) => {
              return (
                <div className="col-4" key={i}>
                  <Items.Item1
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
      {/* MẶT HÀNG MỚI */}
      <section className="hp-main frame">
        <div className="frame__title">MẶT HÀNG MỚI</div>
        <div className="container">
          <div className="row">
            {dataList.map((data, i) => {
              return (
                <div className="col-4" key={i}>
                  <Items.Item1
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
      <section className="banner">
        <img src="/img/Ecommerce/banner/banner 1.jpg" alt="error png" />
        <img src="/img/Ecommerce/banner/banner 2.jpg" alt="error png" />
      </section>
      {/* DÀNH RIÊNG CHO BẠN */}
      <section className="personalForYou frame">
        <div className="frame__title personalForYou__title">
          DÀNH RIÊNG CHO BẠN
        </div>
        <div className="container">
          <div className="row">
            {dataList.map((data, i) => {
              return (
                <div className="col-4" key={i}>
                  <Items.Item1
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
    </main>
  );
};

const renderSlider1Item = () => {
  return (
    <>
      {sliderData.slider1.map((data, i) => {
        return (
          <SwiperSlide key={i}>
            <img
              src={'/img/Ecommerce/slider/' + data + '.jpg'}
              alt="error png"
            />
          </SwiperSlide>
        );
      })}
    </>
  );
};

const Slider2Item = ({ name, img }) => {
  return (
    <div className="slider2__content">
      <div className="slider2__img">
        <img src={'/img/Ecommerce/slider2/' + img + '.png'} alt="error png" />
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
          <SwiperSlide key={i}>
            <Slider2Item name={data.name} img={data.img} />
          </SwiperSlide>
        );
      })}
    </>
  );
};

export default HomePage;
