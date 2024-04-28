import logo from "../assets/images/LoginSigin/logo.png";
const NeuraLearnAcademy = () => {
  return (
    <div className="flex items-center select-none">
      <img src={logo} className="w-20 md:w-24" alt="logo" loading="lazy" />
      <div className="w-[1px] h-28  bg-neutral-500 mx-2"></div>{" "}
      <div>
        <div className="font-bold text-black text-1xl md:text-2xl">
          <span className="text-2xl font-bold text-blue-700">N</span>
          eura
        </div>
        <div className="font-bold text-black text-1xl md:text-2xl">
          <span className="text-2xl font-bold text-blue-700">L</span>
          earn
        </div>
        <div className="font-bold text-black text-1xl md:text-2xl">
          <span className="text-2xl font-bold text-blue-700">A</span>
          cademy
        </div>
      </div>
    </div>
  );
};

export default NeuraLearnAcademy;
