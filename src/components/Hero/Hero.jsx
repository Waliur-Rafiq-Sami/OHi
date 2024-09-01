import pic1 from "../../image/heroIMG.png";
import BGpic from "../../image/allart/bghero.jpg";
// import BGpicX from "../../image/allart/heroX.png";
import TypingAnimation from "../TypingAnimation/TypingAnimation";

const Hero = () => {
  return (
    <>
      <div className="min-h-screen ">
        <div className="absolute mt-5">
          <TypingAnimation></TypingAnimation>
        </div>
        <img className="w-full" src={pic1} alt="" />
        <div className="absolute w-3/4">
          <p className="p-5 mt-16">
            <span className="py-2 text-xl font-extrabold font-2 text-[#d3c019]">
              OHI,
            </span>
            <br />
            <span className="font-semibold text-gray-600">
              I've been wanting to tell you my thoughts for a long time, but I
              couldn't find the way to say it, so I made it to say the words.
            </span>
            <br />
            <span className="text-red-400 text-sm">
              I request you to read everything well
            </span>
          </p>
        </div>
        <div>
          <img className="h-full border-2" src={BGpic} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
