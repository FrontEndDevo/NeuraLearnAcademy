import { Link } from "react-router-dom";

const CopyRights = () => {
  const linksArray = ["home", "contact", "terms of use", "privacy policy"];

  const rendredLinks = (
    <ul className="flex flex-wrap mx-2 md:ml-20 md:my-14 lg:w-1/2">
      {linksArray.map((link, index) => (
        <li key={index}>
          <Link
            to={link.toLowerCase().replace("", "-")}
            className="px-2 text-sm font-bold capitalize duration-200 border-r border-black md:text-xl md:px-4 text-gray-color-500 hover:text-gray-color-700"
          >
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );
  return (
    <>
      {rendredLinks}

      <p className="flex justify-center m-4 text-sm font-bold text-neutral-700">
        Copyright © 2024 President & Fellows of College. All rights reserved.
      </p>
    </>
  );
};

export default CopyRights;
