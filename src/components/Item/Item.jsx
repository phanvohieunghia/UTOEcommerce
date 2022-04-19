import React from 'react';
import Icons from 'assets/icons';
import './item.scss';
import { FormatPrice } from 'components/Common';
const Item1 = (props) => {
  const { img = '', name = '', price = '', address = '', folder = '' } = props;
  return (
    <div className="item1">
      <div className="item1__img">
        <img src={`/img/${folder}/${img}`} alt="error png" />
      </div>{' '}
      <div className="item1__content">
        <div className="item1__name">{name}</div>
        <div className="item1__price">
          <FormatPrice price={price} />
          <span>đ</span>
        </div>
        <div className="item1__footer">
          <div className="item1__footer-rating">
            <Icons.Star />
            <Icons.Star />
            <Icons.Star />
            <Icons.Star />
            <Icons.Star />
            <span>(0)</span>
          </div>
          <div className="item1__footer-address">{address}</div>
        </div>
      </div>
    </div>
  );
};
const Item2 = ({ img, name, lecturer, discount, price }) => {
  return (
    <div className="item2">
      <div className="item2__img">
        <img src={'/img/Education/course/' + img + '.jpg'} alt="error png" />
      </div>
      <div className="item2__content">
        <div className="item2__name">{name}</div>
        <div className="item2__lecturer">{lecturer}</div>
        <div className="item2__price">
          {discount <= 0 ? (
            ''
          ) : (
            <span>
              <FormatPrice price={discount} />
              <sup>đ</sup>
            </span>
          )}
          <FormatPrice price={price} />
          <sup>đ</sup>
        </div>
      </div>
    </div>
  );
};
const Item3 = ({ img, name, description }) => {
  return (
    <div className="item3">
      <div className="item3__img">
        <img src={'/img/Education/reason/' + img + '.jpg'} alt="error png" />
      </div>
      <div className="item3__name">{name}</div>
      <div className="item3__description">{description}</div>
    </div>
  );
};
const Item4 = ({ ...rest }) => {
  return (
    <div className="item4">
      <div className="item4-head">
        <div className="item4-head__avatarUser">
          <img
            src={'/img/Community/' + rest.avatarUser + '.png'}
            alt="error png"
          />
        </div>
        <div className="item4-head-right">
          <div className="item4-head-right__name">{rest.nameUser}</div>
          <div className="item4-head-right__dateToNow">{rest.dateToNow}</div>
        </div>
      </div>
      <div className="item4__titlePost">{rest.titlePost}</div>
      <div className="item4__contentPost">{rest.contentPost}</div>
      <div className="item4__imgPost">
        <img src={'/img/Community/' + rest.imgPost + '.jpg'} alt="error png" />
      </div>
      <div className="item4-contact">
        <div className="item4-contact__like">
          <span>{rest.likeQuantity}</span>&nbsp;lượt thích
        </div>
        <div className="item4-contact-right">
          <div className="item4-contact-right__comment">
            <span>{rest.commentQuantity}</span>&nbsp;bình luận
          </div>
          <div className="item4-contact-right__share">
            <span>{rest.shareQuantity}</span>&nbsp;lượt chia sẻ
          </div>
        </div>
      </div>
      <div className="item4-btn">
        <div className="item4-btn__like">
          <Icons.ThumbUp />
          &nbsp;Thích
        </div>
        <div className="item4-btn__comment">
          <Icons.Comments />
          &nbsp;Bình luận
        </div>
        <div className="item4-btn__share">
          <Icons.Share />
          &nbsp;Chia sẻ
        </div>
      </div>
      <div className="item4-commentFrame">
        <input type="text" placeholder="Viết bình luận..." />
        <Icons.PaperPlane />
      </div>
      <div className="item4-listItem">
        {rest.commentList.map((data, i) => (
          <div className="item4-listItem__item" key={i}>
            <div className="item4-listItem__avatar">
              <img
                src={'/img/Community/' + data.avatarUser + '.png'}
                alt="error png"
              />
            </div>
            <div className="item4-listItem__content">
              <div className="item4-listItem__name">{data.nameUser}</div>
              <div className="item4-listItem__comment">{data.commentUser}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Items = {
  Item1,
  Item2,
  Item3,
  Item4,
};

export default Items;
