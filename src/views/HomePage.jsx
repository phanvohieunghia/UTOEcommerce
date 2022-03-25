import React from "react";

import Footer from "../components/Footer/Footer";
import "./homepage.scss";
import Item from "../components/Item/Item";
import dataList from "../assets/data/NewProduct.json";

const HomePage = () => {
  return (
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

export default HomePage;
