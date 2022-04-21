import React, { useEffect, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import Products from 'assets/data/Product.json';
import sliderData from 'assets/data/slider.json';
import './Trading.scss';
import { ChangeToSlug } from 'components/Common';
import Slider from 'components/Slider/Slider';
import { Link } from 'react-router-dom';
import Items from 'components/Item/Item';
import Footer from 'components/Footer/Footer';
const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const specialProducts = Products.filter(
    (data) => data.version === 'special',
  ).filter((data, i, array) => {
    const filterLength = (array.length * 2) / 3;
    if (isMobile && i < filterLength) {
      return data;
    } else if (!isMobile) return data;
  });
  useEffect(() => {
    const handleisMobile = (e) => {
      setIsMobile(e.currentTarget.screen.width < 576);
    };
    setIsMobile(window.screen.width < 576);
    window.addEventListener('resize', handleisMobile);
    return () => window.removeEventListener('resize', handleisMobile);
  }, [isMobile]);
  return (
    <main id="homepage">
      <section className="slider">
        <Slider _effect={'fade'} callback={renderSlider1Item} />
      </section>
      <section className="slider2 frame">
        <div className="slider2__title frame__title">CỬA HÀNG UY TÍN</div>
        <Slider _slides={isMobile ? 2 : 3} callback={renderSlider2ITem} />
      </section>
      <section className="flashsale frame">
        <div className="frame__title flashsale__title">
          <div className="flashsale__title-left">FLASH SALE</div>
          <div className="flashsale__title-right">Xem thêm</div>
        </div>
        <div className="container">
          <div className="row">
            {specialProducts.map((data, i) => {
              return (
                <div className="col-6 col-sm-4" key={i}>
                  <Link
                    to={`/trading/${ChangeToSlug(data.category)}/${data.id}`}
                  >
                    <Items.Item1
                      img={data.img}
                      name={data.name}
                      price={data.price}
                      address={data.address}
                      folder="product"
                    />
                  </Link>
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
            {specialProducts.map((data, i) => {
              return (
                <div className="col-6 col-sm-4" key={i}>
                  <Link to={`/trading}/${data.id}`}>
                    <Items.Item1
                      img={data.img}
                      name={data.name}
                      price={data.price}
                      address={data.address}
                      folder="product"
                    />
                  </Link>
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
            {specialProducts.map((data, i) => {
              return (
                <div className="col-6 col-sm-4" key={i}>
                  <Items.Item1
                    img={data.img}
                    name={data.name}
                    price={data.price}
                    address={data.address}
                    folder="product"
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
