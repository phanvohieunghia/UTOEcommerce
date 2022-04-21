import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.scss';
import sidebarData from 'assets/data/sidebar.json';
import { ChangeToSlug } from 'components/Common';
import productData from 'assets/data/Product.json';
import Icons from 'assets/icons';

const Sidebar = () => {
  let categoryNumber = {};
  sidebarData.category.content.forEach((data) => {
    categoryNumber[data.name] = 0;
  });
  productData.forEach((data) => {
    categoryNumber[data.category]++;
  });
  return (
    <>
      <div className="sidebar">
        {sidebarData.sidebar.map((data, i) => {
          if (data.path.includes('http')) {
            return (
              <a className="sidebar__item" key={i} href={data.path}>
                <div className="sidebar__logo">
                  <img src={'/img/sidebar/' + data.img} alt="error png" />
                </div>
                <div className="sidebar__text">{data.text}</div>
              </a>
            );
          } else {
            return (
              <Link className="sidebar__item" key={i} to={data.path}>
                <div className="sidebar__logo">
                  <img src={'/img/sidebar/' + data.img} alt="error png" />
                </div>
                <div className="sidebar__text">{data.text}</div>
              </Link>
            );
          }
        })}
      </div>
      <div className="featurecategory">
        <div className="fc__title">{sidebarData.category.title}</div>
        <div className="fc__content">
          {sidebarData.category.content.map((data, i) => {
            return (
              <Link
                to={'/trading/' + ChangeToSlug(data.name)}
                className="fc__item"
                key={i}
              >
                <div className="fc__logo">
                  <img src={'/img/Category/' + data.img} alt="error png" />
                </div>
                <div className="fc__text">
                  {data.name} ({categoryNumber[data.name]})
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
