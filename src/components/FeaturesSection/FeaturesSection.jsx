
const FeaturesSection = () => {
  
  const cardData = [
    {
      title: 'Fahmy ali',
      description: "To stay at the leading edge of IT innovation, your team needs to regularly reinvent its skillset.With Neura Learn  Academy Business, I can give my team the space to learn and take the initiative.It means we can produce higher quality work more quickly.",
      personPostion: "CEO of international",
      CardImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg"
    }, {
      title: 'Mona ali',
      description: "One of the best courses on management that after a few months and leadership I have come across so far.The advice is practical, higher quality work more quickly. and examples highly relatable.Would help anyone become a better manager.",
      personPostion: "Front End Developer",
      CardImage:"https://s3-alpha-sig.figma.com/img/52fe/dc23/0af1b90a311b15bd7b3b3909873c040e?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZwXmCsdCL4oBp-6k-8piPgPW5o6d3lMXHeDO-FaQxsHLBmlukOcJjn~voUc1WCz2ACIPRH48mSFiG73tceqZXMIfDPYWM1cqCHQvUVVsGCsZ5JtB2Kc9AIvV~fZoG8A5qUvmbWu--1se~NgoSKsPVqRVbrtiR2UyrSTXLyZ-gcZw9M91RCb2MRZ8E4dUPEcNpYMTMsGGmS5tJUKPI2W2hTbM9IUv72gpCsksSGroWeAqQ48TUjP2r9aPbf17kB05b6GfvA~TCMgbWV92T5QihucufVWUP96oLI9kYGlxgeVmvGH-JVGQboXCOdaCYTsNvLj-Hy2OizrdS0Ob6oj9oA__"
    },
    {
      title: 'karim  ali',
      description: "am proud to say that higher quality work more quickly. after a few months of taking this that after a few months course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.",
      personPostion: "Back End Developer ",
      CardImage:"https://s3-alpha-sig.figma.com/img/11ba/3670/5af30f0e08a9a9bc1a8d738df1c20fb8?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l2KDy4evci~QNiDIMsxTkqbeoPa4rn4ZphWUdMiJh3SKXvjf--GpbxGffFjfUXnNVNWW8xZakF6-veHLObzO5IrNnNDzlSxq-geObPb67VvH334CFJODgm076eekQCSCnpkzJ3zDSf3iEz2bQGn6rOrpqj90UMs7oxekOXQ1Y17A9XFyfXZ4yhuRCsjsDF4XysJA9RSMV7fYtud8uEM0ne9qeE78UWTx9krqDlPvGB946EWk1KmgYcT73252T8etd8Zn1-cBmaDxVgVJtvDiLPDQ8KPNdip8-HRAwTPcdNmLq0GrCW-62M6TpMDjG6AVd9uuGykc3F1e0q-~lcfbtA__"
    },
    
  ] 

  const divStyle = {
    backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/ad61/9e42/a1867a4ad7bca6bbc1d6b5c75a70e2ef?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E87mxkPgCwqlRQWRVUcxTDIJ1sw057qx9bB7ET3rFsCuv~d8Gnjt8h-~0xPY1Nvk2nFSiOvhkiRJo5ZyIGW5DlGTpKRXW2RoP4pkDG1Dy52JQyPTzbuJifh5Tnspo4leyK7XHtK~wnpciZpY8sKok3hMNvxntgyTY6y05Dh0SPN1-H8iYsaMEJeP3eNrgJof9g3DweOfUidKZXQfoPNGXMnicfkvlYD1Qu-Y1OXjttM9KYuiRFL4xDyY-J5LbIH5D6GVtLZ7E2iXg4lNFarFjAcZ915sWZNB8lsvBwm31hwPaPnOVISKjWLbmSTYL60nEM-AVZo8l3eTRKnV1z6dtQ__")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    
    
  };
    
  
  return (
    <>

      <h1 className=" text-1xl md:text-3xl font-bold  mb-5 text-center ">
        How Professional Certificates have helped others
      </h1>
      <h3 className="text-center mb-5 md:mb-12 font-medium">
        Stories from those that have completed Professional Certificates
      </h3>

      <section className=" pb-20 pt-10  grid place-items-center FeatureStyle " style={divStyle} >
     

        <div className="container">

          <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 pb-10 place-items-center">
            {cardData.map((card) => {
              return (
                <>
                  <div key={card} className=" p-4 w-full h-full">

                    <div className="cardHeader relative  bg-black rounded-tl-[23px] rounded-tr-[23px] rounded-bl-[23px]">
                
                      <h2 className=" text-white text-[25px] md:text-[35px]   text-opacity-80 font-extrabold font-['Open Sans'] tracking-widest pt-10 pb-20 pl-6 md:pl-20">#Comments</h2>
                      <h2 className=" absolute bottom-2 font-extrabold text-2xl left-40 text-white ">{ card.title}</h2>

                    </div>
                    <div className="CardDetails relative bg-stone-50 ">
                      <img
                        src={card.CardImage}
                        alt="profile-sample4"
                        className=" rounded-full w-36 h-36 text-white border-4  absolute -top-20 left-0 z-10"
                      />
                      <div className="relative -right-36 py-2 text-neutral-500 text-sm md:text-normal  font-semibold font-['Open Sans'] tracking-tight ">{card.personPostion}</div>
                      
                      <p className="h-full  text-black text-[13px] md:text-[17px] font-normal font-['Open Sans'] px-6 pt-8  bg-stone-50  ">{card.description }</p>

                      <a className=" inline-block relative left-[45%] md:left-[70%]	 text-blue-700 text-base font-bold  py-4 ">Read all story  

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
