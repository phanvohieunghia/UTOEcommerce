import React from 'react';
import communityData from '../assets/data/communityData.json';

const CommunityPage = () => {
  return (
    <div className="community">
      {communityData.posts.map((data, i) => {
        return (
          <section className="frame" key={i}>
            {/* <Items.Item4
              avatarUser={data.avatarUser}
              nameUser={data.nameUser}
              dateToNow={data.dateToNow}
              titlePost={data.titlePost}
              contentPost={data.contentPost}
              imgPost={data.imgPost}
              likeQuantity={data.likeQuantity}
              commentQuantity={data.commentQuantity}
              shareQuantity={data.shareQuantity}
              commentList={data.commentList}
            /> */}
          </section>
        );
      })}
    </div>
  );
};

export default CommunityPage;
