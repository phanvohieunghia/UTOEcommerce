import React from 'react';
import './sidebar.scss';
import dataList from '../../assets/data/sidebarData.json';

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        {dataList.sidebar.map((data, i) => {
          return (
            <div className="sidebar__item" key={i}>
              <div className="sidebar__logo">
                <img src={'/img/sidebar/' + data.img} alt="error png" />
              </div>
              <div className="sidebar__text">{data.text}</div>
            </div>
          );
        })}
      </div>
      <div className="featurecategory">
        <div className="fc__title">{dataList.featuredcategory.title}</div>
        <div className="fc__content">
          {dataList.featuredcategory.content.map((data, i) => {
            return (
              <div className="fc__item" key={i}>
                <div className="fc__logo">
                  <img src={'/img/sidebar/' + data.img} alt="error png" />
                </div>
                <div className="fc__text">{data.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
