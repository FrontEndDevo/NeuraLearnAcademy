import React from 'react';
import karim from '../assets/images/homepage/team/karim.jpg';
import besho from '../assets/images/homepage/team/besho.jpg';
import basem from '../assets/images/homepage/team/basem.jpg';
import badwy from '../assets/images/homepage/team/badwy.jpg';
const ProjectTeam = () => {
    return (
        <section id="our-team" className="bg-gray-100 py-32">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-primary">Meet Our Team</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    <TeamMember
                        imgSrc="https://spacema-dev.com/elevate/assets/images/team/2.jpg"
                        name="Peter Johnson"
                        role="SEO Specialist"
                    />
                    <TeamMember
                        imgSrc={badwy}
                        name="Mohamed Ashraf "
                        role="UX Designer"
                    />
                    <TeamMember
                        imgSrc="https://spacema-dev.com/elevate/assets/images/team/6.jpg"
                        name="Michael Davis"
                        role="Frontend Developer"
                    />
                    <TeamMember
                        imgSrc="https://spacema-dev.com/elevate/assets/images/team/7.jpg"
                        name="Sarah Johnson"
                        role="Content Writer"
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
