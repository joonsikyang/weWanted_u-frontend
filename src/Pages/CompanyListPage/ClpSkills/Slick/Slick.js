import React, { Component } from "react";
import Slider from "react-slick";
import "./Slick.scss";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

export class Slick extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      //   slidesToScroll: 3,
      centerMode: true
      //   nextArrow: <SampleNextArrow />,
      //   prevArrow: <SamplePrevArrow />

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
          {/* <div className="gradation"></div> */}
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
            <h3>4</h3>
          </div>
          <div className="skill-container">
            <h3>5</h3>
          </div>
          <div className="skill-container">
            <h3>6</h3>
          </div>
          <div className="skill-container">
            <h3>7</h3>
          </div>
          <div className="skill-container">
            <h3>8</h3>
          </div>
          <div className="skill-container">
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Slick;
