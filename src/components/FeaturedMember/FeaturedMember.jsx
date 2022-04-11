import React from 'react';
import './FeaturedMember.scss';
import dataComponent from '../../assets/data/featuredMemberData.json';

const FeaturedMember = () => {
  return (
    <div className="featuredMember">
      <div className="fm__title">{dataComponent.title}</div>
      <div className="fm__content">
        {dataComponent.content.map((data, i) => {
          return (
            <div className="fm__item" key={i}>
              <div className="fm__logo">
                <img src="/img/featuredMember/avatar.png" alt="error png" />
              </div>
              <div className="fm__text">{data}</div>
            </div>
          );
        })}
      </div>
      <div className="fm__title">{dataComponent.downloadTitle}</div>
      <div className="fm-downloadApp">
        <div className="img">
          <img src="/img/featuredMember/google play.png" alt="error png" />
        </div>
        <div className="img">
          <img src="/img/featuredMember/app store.png" alt="error png" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedMember;
