import React, { Component } from "react";
import Slider from "react-slick";
import "./Slick.scss";
import LeftBtn from "../../../Images/left-btn.png";
import RightBtn from "../../../Images/right-btn.png";
// import SlickDATA from "./SlickDATA";
// import SlickItem from "./SlickItem";

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
        <div
          style={{
            padding: 20,
            marginRight: 10,
            textAlign: "center",
            color: "#fff",
            fontWeight: 500,
            fontSize: 14,
            borderRadius: 3,
            borderColor: "black",
            borderStyle: "solid"
          }}
          className="skill-container"
        >
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
      // centerMode: true,
      prevArrow: <LeftArrow />,
      nextArrow: <RightArrow />
    };

    return (
      <div>
        <Slider
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            height: 30,
            width: 1060
          }}
          {...settings}
          className="slider"
        >
          {this.sliders()}
        </Slider>
      </div>
    );
  }
}

// className="slider-container"
export default Slick;
