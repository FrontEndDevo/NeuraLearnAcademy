import { useState } from "react";

function SwitchComponent() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={toggleSwitch}
            className="sr-only"
          />
          <div
            className={`w-8 h-4 px-2  rounded-full shadow-inner ${
              isChecked ? "bg-blue-700" : "bg-black"
            }`}
          ></div>
          <div
            className={`toggle__dot absolute w-4 h-4 bg-white rounded-full shadow inset-y-0 left-0 transform transition-transform ${
              isChecked ? "translate-x-full toggle__dot--checked" : ""
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
}

export default SwitchComponent;
