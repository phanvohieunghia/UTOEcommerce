import Footer from 'components/Footer/Footer';
import React, { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import products from 'assets/data/Product.json';
import { ChangeToSlug } from 'components/Common';
import Items from 'components/Item/Item';

const Category = () => {
  const { pathname } = useLocation();
  // const x = document.querySelector('#main .main-container');
  // const x = document.querySelector('#category');
  // console.log(x);
  // x.scrollTo(0, 0);
  // useEffect(() => {
  //   console.log(x);
  // }, [pathname]);

  const { productSlug } = useParams();
  const categoryProducts = products.filter(
    (data) => ChangeToSlug(data.category) === productSlug,
  );

  return (
    <div id="category" style={{ padding: '0 5px' }}>
      <section className="frame">
        <div className="frame__title">x</div>
        <div className="container">
          <div className="row">
            {categoryProducts.map((data, i) => {
              return (
                <div className="col-4" key={i}>
                  <Link to={`/trading/${data.id}`}>
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
      <Footer />
    </div>
  );
};

export default Category;
