import React from 'react';
import dataList from '../../assets/data/Footer.json';
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="ft__title">{dataList.title1}</div>
        <div className="ft__content">
          {dataList.content.map((data, i) => {
            return (
              <div className="ft__text" key={i}>
                {data}
              </div>
            );
          })}
        </div>
        <div className="ft__title">{dataList.title2}</div>
        <div className="ft__logo">
          {dataList.img.map((data, i) => {
            return (
              <div className="ft__logo__item" key={i}>
                <img src={'/img/footer/' + data} alt="error" />
              </div>
            );
          })}
        </div>
        <div className="ft__downloadLogo">
          {dataList.downloadImg.map((data, i) => {
            return (
              <div className="ft__downloadLogo__item" key={i}>
                <img src={'/img/footer/' + data} alt="error" />
              </div>
            );
          })}
        </div>
        <div className="ft__support">
          <div className="ft__support__left">
            <img src={'/img/footer/' + dataList.support.img} alt="error png" />
          </div>
          <div className="ft__support__right">
            <div className="ft__support__right-title">
              {dataList.support.title}
            </div>
            <div className="ft__support__right-phone">
              {dataList.support.phone}
            </div>
          </div>
        </div>
        <div className="ft__email">
          <div className="ft__email-description col-7">
            {dataList.description}
          </div>
          <div className="ft__email-form col-5">
            <div className="ft__email-form__container">
              <div className="ft__email-form__input">
                <input type="text" placeholder="Nhập email của bạn ..." />
              </div>
              <div className="ft__email-form__icon"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="ft-copyright">
        <div className="ft-copyright__text">{dataList.copyright}</div>
        <div className="ft-copyright__slogan">{dataList.slogan}</div>
      </div>
    </>
  );
};

export default Footer;
