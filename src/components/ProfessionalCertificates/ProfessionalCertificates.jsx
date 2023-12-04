import { Link } from "react-router-dom";

const ProfessionalCertificates = () => {
  return (
    <section className="bg-gray-200">
      <div className="container">
        <div>
          <h2>How Professional Certificates have helped others</h2>
          <p>
            Stories from those that have completed Professional Certificates
          </p>
        </div>

        {/* slider */}

        <Link to="/">View more customer story</Link>
      </div>
    </section>
  );
};

export default ProfessionalCertificates;
