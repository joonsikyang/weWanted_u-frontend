import React, { Component } from "react";
import Slider from "react-slick";
import "./Slick.scss";
import LeftBtn from "../../../Images/left-btn.png";
import RightBtn from "../../../Images/right-btn.png";

function RightArrow(props) {
  const { className, onClick } = props;
  return (
    <img className={className} onClick={onClick} alt="right" src={RightBtn} />
  );
}

function LeftArrow(props) {
  const { className, onClick } = props;
  return (
    <img className={className} onClick={onClick} alt="left" src={LeftBtn} />
  );
}

export class Slick extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 3,
      // centerMode: true,
      prevArrow: <LeftArrow />,
      nextArrow: <RightArrow />

      //   responsive: [
      //     {
      //       breakpoint: 1024,
      //       settings: {
      //         slidesToShow: 3,
      //         slidesToScroll: 3,
      //         infinite: true,
      //         dots: false
      //       }
      //     },
      //     {
      //       breakpoint: 600,
      //       settings: {
      //         slidesToShow: 2,
      //         slidesToScroll: 2,
      //         initialSlide: 2
      //       }
      //     },
      //     {
      //       breakpoint: 480,
      //       settings: {
      //         slidesToShow: 1,
      //         slidesToScroll: 1
      //       }
      //     }
      //   ]
    };
    return (
      <div className="slider-container">
        <Slider {...settings} className="slider">
          <div className="skill-container">
            <h3>HTML</h3>
          </div>
          <div className="skill-container">
            <h3>CSS</h3>
          </div>
          <div className="skill-container">
            <h3>JavaScript</h3>
          </div>
          <div className="skill-container">
            <h3>React</h3>
          </div>
          <div className="skill-container">
            <h3>React Native</h3>
          </div>
          <div className="skill-container">
            <h3>Angular</h3>
          </div>
          <div className="skill-container">
            <h3>Vue</h3>
          </div>
          <div className="skill-container">
            <h3>Redux</h3>
          </div>
          <div className="skill-container">
            <h3>TypeScript</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Slick;
