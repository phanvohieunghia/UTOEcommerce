import Footer from 'components/Footer/Footer';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import products from 'assets/data/Product.json';
import { ChangeToSlug } from 'components/Common';
import Items from 'components/Item/Item';
import Pagination from 'components/Pagination';
const Category = () => {
  const { productSlug } = useParams();
  const categoryProducts = products.filter(
    (data) => ChangeToSlug(data.category) === productSlug,
  );

  const totalPage = Math.ceil(categoryProducts.length / 6);
  const [currentPage, setCurrentPage] = useState(1);
  const currentPageProducts = [];
  for (let i = 0; i < 6; i++) {
    if (categoryProducts[currentPage * i])
      currentPageProducts.push(categoryProducts[currentPage * i]);
  }
  const switchPage = (page) => () => {
    setCurrentPage(page);
  };
  return (
    <div id="category" style={{ padding: '0 5px' }}>
      <section className="frame">
        <div className="frame__title">x</div>
        <div className="container">
          <div className="row">
            {currentPageProducts.map((data, i) => {
              return (
                <div className="col-4" key={i}>
                  <Link to={`/trading/${productSlug}/${data.id}`}>
                    <Items.Item1
                      img={data.img}
                      name={data.name}
                      price={data.price}
                      address={data.address}
                      folder="Product2"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Pagination
        switchPage={switchPage}
        currentPage={currentPage}
        page={totalPage}
      />
      <Footer />
    </div>
  );
};

export default Category;
