import React, { Component } from "react";
import Slider from "react-slick";
import "./Slick.scss";
import LeftBtn from "../../../Images/left-btn.png";
import RightBtn from "../../../Images/right-btn.png";
import SlickDATA from "./SlickDATA";
import SlickItem from "./SlickItem";

function LeftArrow(props) {
  const { className, onClick } = props;
  return (
    <img className={className} onClick={onClick} alt="left" src={LeftBtn} />
  );
}

function RightArrow(props) {
  const { className, onClick } = props;
  return (
    <img className={className} onClick={onClick} alt="right" src={RightBtn} />
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
    };
    const skillMap = SlickDATA.map(item => (
      <SlickItem key={item.id} title={item.skills} />
    ));

    return (
      <div className="slider-container">
        <Slider {...settings} className="slider">
          {skillMap}
        </Slider>
      </div>
    );
  }
}

export default Slick;
