const ButtonProfile = (props) => {
  const buttonStyles = "px-3 py-2 mt-6 text-base text-white bg-black rounded";
  return (
    <button className={`${props.addStyle} ${buttonStyles}`}>
      {props.children}
    </button>
  );
};

export default ButtonProfile;
