import React from 'react';
import { useParams } from 'react-router-dom';
import Products from 'assets/data/Product.json';
import Icons from 'assets/icons';
import { FormatPrice } from 'components/Common';
import './Detail.scss';
import InputQuantity from 'components/InputQuantity/InputQuantity';
import Footer from 'components/Footer/Footer';
import { Link } from 'react-router-dom';
import Items from 'components/Item/Item';
import { ChangeToSlug } from 'components/Common';
const ProductDetailPage = () => {
  const { productId, productSlug } = useParams();
  const currentProduct = Products.find((data) => data.id === Number(productId));
  const allRelativeProducts = Products.filter(
    (data) => ChangeToSlug(data.category) === productSlug,
  );
  const relativeProducts = allRelativeProducts.filter((data, i) => i < 6);
  return (
    <div id="product-detail">
      <section className="frame">
        <div className="pd-img">
          <img src={`/img/Product2/${currentProduct.img}`} alt="error png" />
        </div>
        <div className="pd-content">
          <div className="pd-name">{currentProduct.name}</div>
          <div className="pd-vote">
            <div className="pd-vote__item pd-vote__star">
              <span>0&nbsp;</span>
              <Icons.Star />
              <Icons.Star />
              <Icons.Star />
              <Icons.Star />
              <Icons.Star />
            </div>
            <div className="pd-vote__item">0 đánh giá</div>
            <div className="pd-vote__item">0 đã bán</div>
          </div>
          <div className="pd-price">
            <FormatPrice price={currentProduct.price} />
            <span>đ</span>
          </div>
          <div className="pd-quantity">
            <div className="name">Số lượng</div>
            <InputQuantity quantity={currentProduct.quantity} />
            <div className="available">
              <span>{currentProduct.quantity}</span>
              &nbsp;sản phẩm có sẵn
            </div>
          </div>
          <div className="pd-btn">
            <button className="primary">
              <Icons.CartPlus />
              Thâm vào Giỏ Hảng
            </button>
            <button className="second">Mua hàng</button>
          </div>
        </div>
      </section>
      <section className="frame shop-detail">
        <div className="img">
          <img src="/img/DetailProduct/sale compay logo.png" alt="error png" />
        </div>
        <div className="content">
          <div className="btn">
            <div className="logo">
              <Icons.LocationArrow />
            </div>
            <span>Xem shop</span>
          </div>
          <div className="name">Siêu thị online 123sale.net</div>
          <div className="company">Quản lý bởi UNIONTEK</div>
          <div className="address">
            <span>Địa chỉ: </span>240 Nguyễn Oanh, Phường 17, Quận Gò Vấp,
            TP.HCM.
          </div>
        </div>
      </section>
      <section className="relative frame ">
        <div className="frame__title">SẢN PHẨM TƯƠNG TỰ</div>
        <div className="container">
          <div className="row">
            {relativeProducts.map((data, i) => {
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

export default ProductDetailPage;
