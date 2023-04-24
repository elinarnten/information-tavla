import Slider from "react-slick";
import Birthdays from "./birthdays";
import Employee from "./employee";
import NewEmployee from "./newEmployee";
import Welcome from "./welcome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  var settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div>
        <Welcome />
      </div>
      <div>
        <Employee />
      </div>
      <div>
        <NewEmployee />
      </div>
      <div>
        <Birthdays />
      </div>
    </Slider>
  );
}
export default Carousel;
