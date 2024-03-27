const ButtonProfile = (props) => {
  return (
    <button className="px-3 py-2 mt-6 text-base text-white bg-black rounded">
      {props.children}
    </button>
  );
};

export default ButtonProfile;
