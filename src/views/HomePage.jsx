<<<<<<< HEAD
import React from 'react'
import Slider from '../components/Slider/Slider'
=======
import React from "react";

import Footer from "../components/Footer/Footer";
import "./homepage.scss";
import Item from "../components/Item/Item";
import dataList from "../assets/data/NewProduct.json";
>>>>>>> 4b7aef217d190dc4336b8a3206e85df5655ff645

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
<<<<<<< HEAD
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
=======
    <>
      <section className="hp-main">
        <div className="hp-main__title">MẶT HÀNG MỚI</div>
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
>>>>>>> 4b7aef217d190dc4336b8a3206e85df5655ff645

export default HomePage;
