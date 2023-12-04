import { Link } from "react-router-dom";
import macAllister from "../../assets/images/homepage/mac-allister.jpg";

const professionals = [
  {
    name: "Mac Allister",
    jobTitle: "CEO of international food brands",
    img: macAllister,
    quote:
      '"To stay at the leading edge of IT innovation, your team needs to regularly reinvent its skillset. With Neura Learn Academy Business, I can give my team the space to learn and take the initiative. It means we can produce higher quality work more quickly."',
  },

  {
    name: "Mac Allister",
    jobTitle: "CEO of international food brands",
    img: macAllister,
    quote:
      '"To stay at the leading edge of IT innovation, your team needs to regularly reinvent its skillset. With Neura Learn Academy Business, I can give my team the space to learn and take the initiative. It means we can produce higher quality work more quickly."',
  },
  {
    name: "Mac Allister",
    jobTitle: "CEO of international food brands",
    img: macAllister,
    quote:
      '"To stay at the leading edge of IT innovation, your team needs to regularly reinvent its skillset. With Neura Learn Academy Business, I can give my team the space to learn and take the initiative. It means we can produce higher quality work more quickly."',
  },
];

const ProfessionalCertificates = () => {
  return (
    <section className="bg-gray-200 py-20">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className=" text-5xl mb-6">
            How Professional Certificates have helped others
          </h2>
          <p className="text-2xl font-light">
            Stories from those that have completed Professional Certificates
          </p>
        </div>

        {/* slider */}

        <Link
          to="/"
          className="bg-primary text-xl py-2 px-6 rounded-full text-white font-bold"
        >
          View more customer story
        </Link>
      </div>
    </section>
  );
};

export default ProfessionalCertificates;
