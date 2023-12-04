import { Link } from "react-router-dom";
import macAllister from "../../assets/images/homepage/mac-allister.jpg";
import Slider from "react-slick";

// Array of professionals.
const professionals = [
  {
    name: "Mac Allister",
    jobTitle: "CEO of international food brands",
    img: macAllister,
    quote:
      "To stay at the leading edge of IT innovation, your team needs to regularly reinvent its skillset. With Neura Learn Academy Business, I can give my team the space to learn and take the initiative. It means we can produce higher quality work more quickly.",
  },
  {
    name: "Mac Allister",
    jobTitle: "CEO of international food brands",
    img: macAllister,
    quote:
      "To stay at the leading edge of IT innovation, your team needs to regularly reinvent its skillset. With Neura Learn Academy Business, I can give my team the space to learn and take the initiative. It means we can produce higher quality work more quickly.",
  },
  {
    name: "Mac Allister",
    jobTitle: "CEO of international food brands",
    img: macAllister,
    quote:
      "To stay at the leading edge of IT innovation, your team needs to regularly reinvent its skillset. With Neura Learn Academy Business, I can give my team the space to learn and take the initiative. It means we can produce higher quality work more quickly.",
  },
  {
    name: "Mac Allister",
    jobTitle: "CEO of international food brands",
    img: macAllister,
    quote:
      "To stay at the leading edge of IT innovation, your team needs to regularly reinvent its skillset. With Neura Learn Academy Business, I can give my team the space to learn and take the initiative. It means we can produce higher quality work more quickly.",
  },
  {
    name: "Mac Allister",
    jobTitle: "CEO of international food brands",
    img: macAllister,
    quote:
      "To stay at the leading edge of IT innovation, your team needs to regularly reinvent its skillset. With Neura Learn Academy Business, I can give my team the space to learn and take the initiative. It means we can produce higher quality work more quickly.",
  },
];

// Slider settings.
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ProfessionalCertificates = () => {
  const professionalPeople = (
    <Slider {...settings} className="mb-20">
      {professionals.map((item, index) => (
        <div
          key={index}
          className="lg:!grid !flex flex-col-reverse items-center grid-cols-1 lg:grid-cols-3 gap-10 mb-2 p-10 bg-white rounded-lg shadow-inner"
        >
          <p className="col-span-2 text-lg leading-loose lg:text-3xl">
            &quot;{item.quote}&quot;
          </p>
          <div className="flex flex-col items-center">
            <img
              src={item.img}
              alt={item.name}
              className="rounded-full mb-4 w-[300px] h-[300px]"
            />
            <h3 className="mb-3 text-3xl font-bold capitalize">{item.name}</h3>
            <span className="text-xl text-gray-600">{item.jobTitle}</span>
          </div>
        </div>
      ))}
    </Slider>
  );

  return (
    <section className="py-20 bg-gray-200">
      <div className="container text-center">
        <div className="mb-10">
          <h2 className="mb-6 text-2xl lg:text-5xl">
            How Professional Certificates have helped others
          </h2>
          <p className="text-lg font-light lg:text-2xl">
            Stories from those that have completed Professional Certificates
          </p>
        </div>

        {professionalPeople}

        <Link
          to="/"
          className="px-6 py-3 text-xl font-bold text-white duration-200 rounded-full bg-primary-700 hover:bg-primary-500"
        >
          View more customer story
        </Link>
      </div>
    </section>
  );
};

export default ProfessionalCertificates;
