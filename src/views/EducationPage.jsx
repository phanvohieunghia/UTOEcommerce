import React from 'react';
import { SwiperSlide } from 'swiper/react';

import Footer from '../components/Footer/Footer';
import Slider from '../components/Slider/Slider';
import Items from '../components/Item/Item';
import sliderData from '../assets/data/slider.json';
import educationData from '../assets/data/educationData.json';

import './educationpage.scss';

const EducationPage = () => {
  return (
    <main id="educationpage">
      <section className="banner">
        <Slider _effect={'fade'} callback={SliderItem} />
      </section>
      <section className="edu-link frame">
        <div className="container">
          <div className="row">
            {educationData.eduLink.map((data, i) => {
              return (
                <div className="edu-link__item col-6">
                  <div className="edu-link__container">
                    <div className="edu-link__title">{data.title}</div>
                    <div className="edu-link__img">
                      <img
                        src={'/img/Education/eduLink/' + data.img + '.png'}
                        alt="error"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="edu-video frame">
        <Slider _slides={2} callback={Slider2Item} _pagination={true} />
      </section>
      <section className="course frame">
        <div className="course__title">Khoá học nổi bật</div>
        <div className="container">
          <div className="row">
            {educationData.course.map((data, i) => {
              return (
                <div className="col-6">
                  <Items.Item2
                    img={data.img}
                    name={data.name}
                    lecturer={data.lecturer}
                    discount={data.discount}
                    price={data.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="course frame">
        <div className="course__title">Tất cả khoá học</div>
        <div className="container">
          <div className="row">
            {educationData.course.map((data, i) => {
              return (
                <div className="col-6">
                  <Items.Item2
                    img={data.img}
                    name={data.name}
                    lecturer={data.lecturer}
                    discount={data.discount}
                    price={data.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="course frame reason">
        <div className="course__title reson__title">
          4 LÝ DO BẠN NÊN HỌC ONLINE TẠI STARUP EDUCATION
        </div>
        <div className="container">
          <div className="row">
            {educationData.reason.map((data, i) => {
              return (
                <div className="col-6">
                  <Items.Item3
                    img={data.img}
                    name={data.name}
                    description={data.description}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="course frame reason">
        <div className="course__title reson__title">BÀI VIẾT</div>
      </section>
      <Footer />
    </main>
  );
};
const SliderItem = () => {
  return (
    <>
      {sliderData.educationSlider.map((data, i) => {
        return (
          <SwiperSlide>
            <img
              src={'/img/Education/slider/' + data + '.jpg'}
              alt="error png"
            />
          </SwiperSlide>
        );
      })}
    </>
  );
};
const Slider2Item = () => {
  return (
    <>
      {educationData.eduVideo.map((data, i) => {
        return (
          <SwiperSlide>
            <div className="edu-video__item">
              <iframe
                src={data.path}
                title="x"
                allowfullscreen=""
              ></iframe>
            </div>
          </SwiperSlide>
        );
      })}
    </>
  );
};

export default EducationPage;
