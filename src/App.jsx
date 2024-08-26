import "./App.css";
import MainContant from "./components/MoinContant/MainContant";
import pic1 from "../src/image/pic1.jpg";
import pic2 from "../src/image/20220221_115329.jpg";
import { useState } from "react";
// alart
import alart from "../src/image/allart/file.png";
import alartBG from "../src/image/allart/126320.jpg";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
// alart
import pic3 from "../src/image/img3.jpg";
import pic4 from "../src/image/img4.jpg";
import pic5 from "../src/image/img5.jpg";
import pic6 from "../src/image/img6.jpg";
import pic7 from "../src/image/img7.jpg";
// import pic8 from "../src/image/received_2781592995293621.jpeg";
// import pic9 from "../src/image/WhatsApp Image 2024-08-23 at 11.43.21_d9f9a848.jpg";
// import pic10 from "../src/image/WhatsApp Image 2024-08-23 at 11.43.22_fad86df2.jpg";
function App() {
  const [password, setPassword] = useState(false);
  const [rightPassword, setRightPassword] = useState(true);
  const fromSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.password.value);
    if (e.target.password.value == "ohi") {
      setPassword(true);
    } else {
      setRightPassword(false);
    }
    e.target.password.value = "";
  };
  const text1 = {
    content:
      "I know you don't like me, I'm not worthy of you. From the time you left my life, I have been in a lot of trouble since then. You ignore me today, you don't see me when I message you, after telling you so many times, you don't see me, sometimes my chest bursts with pain. Today I also come to your memory, you remember that one night I sent you a message on WhatsApp and said that I want to go far away with you. When you weren't there, when I couldn't talk to you, I used to write down what I said to you, thinking that I would say it someday if I could. ",
  };
  return (
    <>
      {password ? (
        <>
          <Header></Header>
          <Hero></Hero>
          <div className="text-center py-2 font-medium text-lg">
            <p>A collection of letter page .. </p>
          </div>
          <div className="flex justify-center items-center pb-10">
            <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
              <select className="select select-bordered select-sm w-full bg-white text-gray-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform transform hover:scale-105 appearance-none">
                <option disabled selected className="text-gray-400">
                  Select an option
                </option>
                <option className="text-gray-700 py-2 hover:bg-blue-100 hover:text-blue-600">
                  🍎 Small Apple
                </option>
                <option className="text-gray-700 py-2 hover:bg-blue-100 hover:text-blue-600">
                  🍊 Small Orange
                </option>
                <option className="text-gray-700 py-2 hover:bg-blue-100 hover:text-blue-600">
                  🍅 Small Tomato
                </option>
              </select>
            </div>
          </div>
          <div className="border-2 border-[#b8ff14]"></div>
          <MainContant
            pic={pic2}
            color="text-[#000]"
            ht="Dear Ohi."
            hcolor="font-1"
            text={text1.content}
          ></MainContant>
          <div className="border-2 border-[#b8ff14]"></div>
          <MainContant pic={pic3}></MainContant>
          <div className="border-2 border-[#b8ff14]"></div>
          <MainContant pic={pic1}></MainContant>
          <div className="border-2 border-[#b8ff14]"></div>
          <MainContant pic={pic4}></MainContant>
          <div className="border-2 border-[#b8ff14]"></div>
          <MainContant pic={pic5}></MainContant>
          <div className="border-2 border-[#b8ff14]"></div>
          <MainContant pic={pic6}></MainContant>
          <div className="border-2 border-[#b8ff14]"></div>
          <MainContant pic={pic7}></MainContant>
          {/* <div className="border-2 border-[#b8ff14]"></div>
          <MainContant pic={pic1}></MainContant> */}
          {/* here is footer  */}
          <div className="border-2 border-[#b8ff14]"></div>
          <Footer></Footer>
        </>
      ) : (
        <div
          className="flex min-h-svh justify-center items-center bg-no-repeat bg-cover bg-center flex-col"
          style={{
            backgroundImage: `url(${alartBG})`,
          }}
        >
          <div className="text-center p-5 flex flex-col justify-center items-center">
            <div className="w-52">
              <img src={alart} alt="" />
            </div>
            <h1 className="text-2xl font-bold font-2 text-[#f3d949] mb-10">
              This website is protected. Only{" "}
              <span className="text-[#ff52e8]">Fabiya Tanha</span> uses this
              website.
            </h1>
            <h2 className="text-xl font-extrabold text-[#42c7fc]">
              If you are Fabiya Tanha Ohi,
            </h2>
            <div className="w-full px-10 py-3">
              <form onSubmit={fromSubmit}>
                {rightPassword ? (
                  <label className="form-control w-full max-w-xs">
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      className="input input-bordered w-full max-w-xs bg-transparent border-2 border-red-400 focus:border-red-500 text-xl text-green-500 font-bold font-1"
                    />
                  </label>
                ) : (
                  <label className="form-control w-full max-w-xs">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password Wrong . . ."
                      className="input input-bordered w-full max-w-xs bg-transparent border-2 border-red-400 focus:border-red-500 text-xl text-green-500 font-bold font-1"
                    />
                    <p className="text-red-500 font-extrabold text-end">
                      Wrong Password, Try again.
                    </p>
                  </label>
                )}
                <button className="btn glass my-2 btn-info w-full text-xl text- font-bold font-1">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="-mb-52 -ml-18 font-extrabold">
            <h1 className="  text-red-400">
              This website was completely created by
            </h1>
            <h1 className="text-blue-500">
              Copyright ©{" "}
              <span className="text-green-400 font-2 text-xl">
                Waliur Rafiq Sami
              </span>
            </h1>
          </div>
        </div>
      )}
    </>
  );
}
export default App;
