import Plus from "../svg/Plus";
import SVG from "../svg/SVG";
import { useState } from "react";

import { useRef } from "react";
const FAQcard = (props) => {
  const paraRef = useRef();

  const [h, setH] = useState(0);
  const clickHandler = () => {
    setH((prev) => (prev === 0 ? paraRef?.current?.scrollHeight : 0));
  };

  return (
    <div
      className={`px-3 xl:px-10 py-4 xl:py-8 rounded-xl bg-gray-100 ${props.className}  cursor-pointer border `}
      onClick={clickHandler}
    >
      <span className="flex space-x-2 xl:space-x-3 items-start">
        <SVG
          svg={Plus}
          className={`min-w-[1rem] h-6 xl:min-w-[2rem] xl:h-6 ${
            h === 0 ? "rotate-0" : "rotate-45"
          } duration-500`}
        />
        <h1 className="font-medium text-base xl:font-semibold xl:text-lg text-deepBlue">
          {props.ques}
        </h1>
      </span>

      <p
        className={`text-gray-600 text-sm xl:text-base tracking-tight max-w-xl px-6 xl:px-8 duration-500 overflow-hidden ${
          h === 0 ? "mt-0" : "mt-3 xl:mt-4"
        }`}
        ref={paraRef}
        style={{ height: h + "px" }}
      >
        {props.ans}
      </p>
    </div>
  );
};
export default FAQcard;
