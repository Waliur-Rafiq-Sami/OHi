import { useState } from "react";

const MainContant = ({ pic, color, ht, hcolor, text }) => {
  //   console.log(ht);
  const [show, setShow] = useState(false);
  const onShow = () => {
    setShow(!show);
  };
  return (
    <>
      <div
        className="min-h-screen bg-no-repeat bg-blue-300 bg-fixed md:bg-contain bg-cover flex items-end max-w-[500px] relative "
        style={{
          backgroundImage: `url(${pic})`,
        }}
      >
        <div
          className={`container mx-auto p-5 font-bold text-xl text-justify ${color}text-[#2f50bb]`}
        >
          <h1 className={`text-5xl ${hcolor}`}>{show ? <></> : <>{ht}</>}</h1>
          <p className={` ${show ? "hidden" : ""}`}>
            {text}
            <button
              onClick={onShow}
              className="btn btn-sm btn- btn-info text-red-400 font-extrabold btn-outline font-2"
            >
              {"show"}
            </button>
          </p>
          <div className="h-screen backdrop-blur-sm mx-3 mb-10 absolute top-0 left-0 pb-8 transition-transform transform hover:scale-105">
            <div
              className={`bg-[#5670a844] rounded-xl my-3 p-3 overflow-x-auto h-full ${
                show ? "" : "hidden"
              }`}
            >
              <p className="inline-block">
                some text, some text, some text, some text, some text, some
                text, some text, some text, some text, some text, some text,
                some text, some text, some text, some text, some text, some
                text, some text, some text, some text, some text, some text,
                some text, some text, some text, some text, some text, some
                text, some text, some text, some text, some text, some text,
                some text, some text, some text, some text, some text, some
                text, some text, some text, some text, some text, some text,
                some text, some text, some text, some text, some text, some
                text, some text, some text, some text, some text, some text,
                some text, some text, some text, some text, some text, some
                text, some text, some text, some text, some text, some text,
                some text, some text, some text, some text, some text, some
                text, some text, some text, some text, some text, some text,
                some text, some text, some text, some text, some text, some
                text, some text, some text, some text, some text, some text,
                some text, some text, some text, some text, some text, some
                text, some text, some text, some text, some text, some text,
                some text, some text, some text, some text, some text, some
                text, some text, some text, some text, some text, some text,
                some text, some text, some text, some text, some text, some
                text, some text, some text, some text, some text, some text,
                some text, some text, some text, some text, some text, some
                text, some text, some text, some text, some text, some text,
                some text, some text, some text, some text, some text, some
                text, some text, some text, some text, some text, some text,
                some text, some text, some text, some text, some text, some
                text, some text, some text, some text, some text, some text,
                some text, some text, some text, some text, some text, some
                text, some text, some text, some text, some text, some text,
                some text, some text, some text, some text, some text, some
                text, some text, some text, some text, some text, some text,
                some text, some text, some text, some text, some text, some
                text, some text, some text, some text, some text, some text,
                some text, some text, some text, some text, some text, some
                text, some text, some text, some text, some text, some text,
                some text, some text, some text,
              </p>
              <p className="text-end">
                <button className="btn-warning btn" onClick={onShow}>
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
