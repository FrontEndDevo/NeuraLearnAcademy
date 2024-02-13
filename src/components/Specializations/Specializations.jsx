import { Link } from "react-router-dom";
import img from "../../assets/images/homepage/Specializations/uiux.png";
import Slider from "react-slick/lib/slider";

const ourSpecializations = [
  {
    image: img,
    title: "UI/UX Design",
    description:
      "we will take you learn to design user interfaces ,user experience and implement websites and applications and create your first application. ",
  },
  {
    image: img,
    title: "UI/UX Design",
    description:
      "we will take you learn to design user interfaces ,user experience and implement websites and applications and create your first application. ",
  },
  {
    image: img,
    title: "UI/UX Design",
    description:
      "we will take you learn to design user interfaces ,user experience and implement websites and applications and create your first application. ",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
};

const Specializations = () => {
  const renderedOurSpecializations = (
    <Slider {...settings}>
      {ourSpecializations.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={item.title} />
          <div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );

  return (
    <section>
      <div>
        <h1>Master and gain essential skills with Neura Specializations</h1>
        <p>
          Develop a specific career skill through a series of related courses
          and hands-on projects. Put theory into practice and earn a
          Specialization Certificate to add to your CV
        </p>
        <Link to="/">Explore specializations with us</Link>
      </div>

      <div>{renderedOurSpecializations}</div>
    </section>
  );
};

export default Specializations;
