/*eslint-disable */
const ButtonProfile = ({ children, addStyle, ...rest }) => {
  const buttonStyles = "px-3 py-2 mt-6 text-base text-white bg-black rounded";
  return (
    <button className={`${addStyle} ${buttonStyles}`} {...rest}>
      {children}
    </button>
  );
};

export default ButtonProfile;
