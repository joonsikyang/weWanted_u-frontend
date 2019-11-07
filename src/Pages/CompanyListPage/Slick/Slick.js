import React, { Component } from "react";
import Slider from "react-slick";
import "./Slick.scss";
import LeftBtn from "Images/left-btn.png";
import RightBtn from "Images/right-btn.png";

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

class Slick extends Component {
  sliders = () => {
    return this.props.fetchedData.map((e, i) => {
      console.log(this.props.fetchedData.length);
      return (
        <div className="skill-container">
          <h3 data-index={i}>{e.job.position}</h3>
        </div>
      );
    });
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 3,
      prevArrow: <LeftArrow />,
      nextArrow: <RightArrow />
    };

    return (
      <Slider {...settings} className="slider">
        {this.sliders()}
      </Slider>
    );
  }
}

export default Slick;
