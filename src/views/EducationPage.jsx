import React from "react";
import { SwiperSlide } from "swiper/react";

import Footer from "../components/Footer/Footer";
import Slider from "../components/Slider/Slider";
import sliderData from "../assets/data/slider.json";
import educationLinkData from "../assets/data/educationData.json";
import "./educationpage.scss";

const EducationPage = () => {
  return (
    <main id="educationpage">
      <section className="banner">
        <Slider _effect={"fade"} callback={SliderItem} />
      </section>
      <section className="edu-link frame">
        <div className="container">
          <div className="row">
            {educationLinkData.eduLink.map((data, i) => {
              return (
                <div className="edu-link__item col-6">
                  <div className="edu-link__container">
                    <div className="edu-link__title">{data.title}</div>
                    <div className="edu-link__img">
                      <img
                        src={"/img/Education/eduLink/" + data.img + ".png"}
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
        <div
          className="container"
        >
          <div className="row">
            <div className="col-6"></div>
          </div>
        </div>
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
              src={"/img/Education/slider/" + data + ".jpg"}
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
      {educationLinkData.eduVideo.map((data, i) => {
        return (
          <SwiperSlide>
            <div className="edu-video__item">
              <iframe src={data.path} title="x" allowfullscreen=""></iframe>
            </div>
          </SwiperSlide>
        );
      })}
    </>
  );
};

export default EducationPage;
