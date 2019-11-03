// import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// class CustomSlide extends Component {
//   render() {
//     const { index, ...props } = this.props;
//     return (
//       <div {...props}>
//         <div>Skills{this.props.index}</div>
//       </div>
//     );
//   }
// }

// export class SkillsItem extends Component {
//   render() {
//     var settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 7,
//       slidesToScroll: 3,
//       initialSlide: 0,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//       ]
//     };
//     return (
//       <Slider {...settings}>
//         <CustomSlide index={1} />
//         <CustomSlide index={2} />
//         <CustomSlide index={3} />
//         <CustomSlide index={4} />
//         <CustomSlide index={5} />
//         <CustomSlide index={6} />
//         <CustomSlide index={7} />
//         <CustomSlide index={8} />
//         <CustomSlide index={9} />
//         <CustomSlide index={10} />
//         <CustomSlide index={11} />
//       </Slider>
//     );
//   }
// }

// export default SkillsItem;

// import React from "react";
// import Slider from "react-slick";

// class SkillsItem extends React.Component {
//   render() {
//     var settings = {
//       dots: false,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 5,
//       slidesToScroll: 2
//     };
//     return (
//       <Slider {...settings} className="skills_container">
//         <div className="skills_item">
//           <h3 className="skills_item_title">1</h3>
//         </div>
//         <div className="skills_item">
//           <h3 className="skills_item_title">2</h3>
//         </div>
//         <div className="skills_item">
//           <h3 className="skills_item_title">3</h3>
//         </div>
//         <div className="skills_item">
//           <h3 className="skills_item_title">4</h3>
//         </div>
//         <div className="skills_item">
//           <h3 className="skills_item_title">5</h3>
//         </div>
//         <div className="skills_item">
//           <h3 className="skills_item_title">6</h3>
//         </div>
//       </Slider>
//     );
//   }
// }
// export default SkillsItem;
