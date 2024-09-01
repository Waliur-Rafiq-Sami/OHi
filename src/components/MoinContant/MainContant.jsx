import { useState } from "react";

const MainContant = ({ pic, color, ht, hcolor, headerColor, text, inbox }) => {
  const [show, setShow] = useState(false);
  const onShow = () => {
    setShow(!show);
  };
  return (
    <>
      <div
        className={`
          min-h-screen bg-no-repeat  bg-blue-300 bg-fixed md:bg-contain bg-cover flex items-end max-w-[500px] relative 
          `}
        style={{
          backgroundImage: `url(${pic})`,
        }}
      >
        <div
          className={`container mx-auto p-5 font-bold text-xl text-justify `}
        >
          <h1 className={`text-4xl ${hcolor} text-[#b3f6ff] py-5`}>
            {show ? <></> : <>{ht}</>}
          </h1>
          <p className={` ${color} ${show ? "hidden" : ""}`}>
            {text}
            <button
              onClick={onShow}
              className="btn text-lg btn-sm bg-[#9741b1] border-none text-transparent btn-info font-extrabold btn-outline font-2 ml-2"
            >
              {"Read"}
            </button>
          </p>
          <div className="h-screen backdrop-blur-sm mx-5 my-8 mb-10 absolute top-0 left-0 pb-8 transition-transform transform hover:scale-105">
            <div
              className={`${headerColor} rounded-xl my-3 p-3 overflow-x-auto h-full ${
                show ? "" : "hidden"
              }`}
            >
              <p className="inline-block pt-2 pb-10 px-1">{inbox}</p>
              <p className="text-end">
                <button
                  className=" btn-warning btn mt-5 mb-10 font-bold text-lg"
                  onClick={onShow}
                >
                  Close
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContant;
