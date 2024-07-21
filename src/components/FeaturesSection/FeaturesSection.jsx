import bg from "../../assets/images/homepage/FeatureSection/bg.jpeg";
import PersonCard from "./PersonCard";
import SectionHeader from "./SectionHeader";

const professionalPeople = [
  {
    id: 1,
    title: "John Stowt",
    story:
      '"I have been able to apply the skills I learned in the Professional Certificate to my work. I have been able to take on more responsibility and have been promoted to CEO of international. I am very grateful for the opportunity to learn and grow."',
    job: "CEO manager",
    photo: "https://i.postimg.cc/L62WrtBL/John-Stowt.jpg",
  },
  {
    id: 2,
    title: "Yasser Ali",
    story:
      '"One of the best decisions I have made was to take the Professional Certificate. I have been able to apply the skills I learned in the Professional Certificate to my work. I have been able to take on more responsibility and have been promoted to CEO of international. I am very grateful for the opportunity to learn and grow."',
    job: "Front End Developer",
    photo: "https://i.postimg.cc/QC6nLvxn/pexels-simon-robben-55958-614810.jpg",
  },
  {
    id: 3,
    title: "Karim Mahmoud",
    story:
      '"Now I am a full stack developer. I have been able to apply the skills I learned in the Professional Certificate to my work. I have been able to take on more responsibility and have been promoted to CEO of international. I am very grateful for the opportunity to learn and grow."',
    job: "Full Stack Developer",
    photo: "https://i.postimg.cc/x1d4d9Zd/Karim-Mahmoud.jpg",
  },
];

const FeaturesSection = () => {
  const divStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "100% 130%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <SectionHeader
        title="How Professional Certificates have helped others"
        subtitle="Stories from those that have completed Professional Certificates"
      />
      <section className="grid px-0 py-20 place-items-center" style={divStyle}>
        <div className="container">
          <div className="grid grid-cols-1 pb-10 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 place-items-center">
            {professionalPeople.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
