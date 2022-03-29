import React from 'react';
import Items from '../components/Item/Item';
import communityData from '../assets/data/communityData.json';

const CommunityPage = ({
  avatarUser,
  nameUser,
  dateToNow,
  titlePost,
  contentPost,
  imgPost,
  likeQuantity,
  commentQuantity,
  shareQuantity,
  commentList,
}) => {
  return (
    <div className="community">
      {communityData.posts.map((data, i) => {
        return (
          <section className="frame">
            <Items.Item4
              avatarUser={avatarUser}
              nameUser={nameUser}
              dateToNow={dateToNow}
              titlePost={titlePost}
              contentPost={contentPost}
              imgPost={imgPost}
              likeQuantity={likeQuantity}
              commentQuantity={commentQuantity}
              shareQuantity={shareQuantity}
              commentList={commentList}
            />
          </section>
        );
      })}
    </div>
  );
};

export default CommunityPage;
