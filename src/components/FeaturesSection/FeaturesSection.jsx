

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import men1 from '../../assets/images/homepage/FeatureSection/men1.jpeg'
import men2 from '../../assets/images/homepage/FeatureSection/men2.jpeg'
import women from '../../assets/images/homepage/FeatureSection/women1.jpeg'
import bg from '../../assets/images/homepage/FeatureSection/bg.jpeg'
import bg1 from '../../assets/images/homepage/FeatureSection/bg.jpeg'

const FeaturesSection = () => {

  const cardData = [
    {
      title: 'Fahmy ali',
      description: '"To stay at the leading edge of IT innovation, your team needs to regularly reinvent its skillset.With Neura Learn  Academy Business, I can give my team the space to learn and take the initiative.It means we can produce higher quality work more quickly."',
      personPostion: "CEO of international",
      CardImage: men1
    }, {
      title: 'Mona ali',
      description: '"One of the best courses on management that after a few months and leadership I have come across so far.The advice is practical, higher quality work more quickly. and examples highly relatable.Would help anyone become a better manager."',
      personPostion: "Front End Developer",
      CardImage: women
    },
    {
      title: 'karim  ali',
      description: '"am proud to say that higher quality work more quickly. after a few months of taking this that after a few months course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered."',
      personPostion: "Back End Developer ",
      CardImage: men2
    },

  ]

  const divStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundBlendMode: 'lighten'
  };


  return (
    <>

      <h1 className=" pt-20 text-1xl md:text-3xl font-bold  mb-5 text-center ">
        How Professional Certificates have helped others
      </h1>
      <h3 className="text-center mb-8 md:mb-12 font-medium">
        Stories from those that have completed Professional Certificates
      </h3>

      <section className=" py-20 px-0  grid place-items-center h-full  " style={divStyle} >
        <div className="container">
          <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 pb-10 place-items-center">
            {cardData.map((card) => {
              return (
                <>
                  <div key={card} className=" p-4">

                    <div className=" relative  bg-black rounded-tl-[23px] rounded-tr-[23px] rounded-bl-[23px]">

                      <h2 className=" text-white text-[25px] md:text-[35px]   text-opacity-80 font-extrabold ] tracking-widest pt-12 pb-20 pl-6 md:pl-20">#Comments</h2>
                      <h2 className=" absolute bottom-2 font-extrabold text-2xl left-36 text-white ">{card.title}</h2>

                    </div>
                    <div className="CardDetails relative bg-stone-50 ">
                      <img
                        src={card.CardImage}
                        alt="profile-sample4"
                        className=" rounded-full shadow-lg w-32 h-32 text-white border-4 border-white  absolute -top-20 left-0 z-10"
                      />
                      <div className=" absolute  left-32 md:left-36 py-2 text-neutral-500 text-sm md:text-normal  font-semibold  ">{card.personPostion}</div>

                      <p className="h-full  text-black text-[13px] md:text-[17px]  px-6 pt-16  bg-stone-50  ">{card.description}</p>

                      <a className=" inline-block relative left-[45%] md:left-[60%] xl:left-[65%] text-blue-700 text-base font-bold  py-5 ">Read all story      <FontAwesomeIcon icon={faAngleDoubleRight} />


                      </a>
                    </div>

                  </div>
                </>
              )
            })}
          </div>
        </div>
        <button className="text-white text-base  font-['Open Sans'] p-3 bg-blue-700 rounded-3xl  text-center">View more customer stories </button>
      </section>
    </>

  );
};

export default FeaturesSection;
