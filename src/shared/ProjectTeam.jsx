import React from "react";
import karim from "../assets/images/homepage/team/karim.jpg";
import besho from "../assets/images/homepage/team/besho.jpg";
import basem from "../assets/images/homepage/team/basem.jpg";
import badwy from "../assets/images/homepage/team/badwy.jpg";
import sherif from "../assets/images/homepage/team/sherif.jpeg";
import khaled from "../assets/images/homepage/team/khaled.jpg";
import zaytony from "../assets/images/homepage/team/zaytony.jpg";
const ProjectTeam = () => {
  return (
    <section id="our-team" className="py-32 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center text-primary">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <TeamMember
            imgSrc={sherif}
            name="Sherif Mohamed"
            role="Machine Learning Developer"
          />
          <TeamMember
            imgSrc={badwy}
            name="Mohamed Ashraf "
            role="UX Designer"
          />
          <TeamMember
            imgSrc={khaled}
            name="Khaled Mohamed"
            role="Backend Developer"
          />
          <TeamMember
            imgSrc={zaytony}
            name="Mahmoud Ahmed"
            role="Backend Developer"
          />
          <TeamMember
            imgSrc={basem}
            name="Basem Yhia"
            role="Front End Developer "
          />
          <TeamMember
            imgSrc={besho}
            name="Beshoy Tag"
            role="Front End Developer "
          />
          <TeamMember
            imgSrc={karim}
            name="Karim Abdelazim"
            role="Front End Developer "
          />
        </div>
      </div>
    </section>
  );
};

// TeamMember component for individual team member
const TeamMember = ({ imgSrc, name, role }) => {
  return (
    <div className="container flex flex-col justify-center p-6 my-6 text-center bg-white rounded-lg shadow-md">
      <img
        src={imgSrc}
        alt={name}
        className="w-64 h-64 mb-4 ml-6 rounded-full"
      />
      <h3 className="mb-2 text-2xl font-semibold">{name}</h3>
      <p className="text-sm font-bold text-gray-700">{role}</p>
    </div>
  );
};

export default ProjectTeam;
