import React from 'react';
import karim from '../assets/images/homepage/team/karim.jpg';
import besho from '../assets/images/homepage/team/besho.jpg';
import basem from '../assets/images/homepage/team/basem.jpg';
import badwy from '../assets/images/homepage/team/badwy.jpg';
import sherif from '../assets/images/homepage/team/sherif.jpeg';
import khaled from '../assets/images/homepage/team/khaled.jpg';
import zaytony from '../assets/images/homepage/team/zaytony.jpg';
const ProjectTeam = () => {
    return (
        <section id="our-team" className="bg-gray-100 py-32">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-primary">Meet Our Team</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    <TeamMember
                        imgSrc={sherif}
                        name="Sherif Ahmed"
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
                        role="Front End Developer " />
                    <TeamMember
                        imgSrc={karim}
                        name="Karim Abdelazim"
                        role="Front End Developer " />
                </div>
            </div>
        </section>
    );
};

// TeamMember component for individual team member
const TeamMember = ({ imgSrc, name, role }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center container flex flex-col justify-center">
            <img src={imgSrc} alt={name} className="w-64 h-64 rounded-full mb-4 ml-6" />
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-gray-700">Role: {role}</p>
        </div>
    );
};

export default ProjectTeam;
