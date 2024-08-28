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
      "আমি তোমাকে অনেক বার বলেছি, দরকার হলে আরো বলবো. আজকে আমাদের মাজের এই দূরত্ব আমার জন্যই হয়েছে । অনেক সময় আমাদের সাথে এমন কিছু হয় যা আমরা কেউ এই চাই না,তারপর ও বলতেছি, sorry😞। আমি এখন তোমাকে মেসেজ দেয়, তুমি ইগ্নোর করো, আমি বুঝি । তারপর ও তোমাকে বার বার messages দেই । ohi, আমি তোমাকে ভীষণ miss করি ।  ",
  };
  const inbox1 = {
    content:
      "তুমি যখন আমার life এ ছিলে তখন তোমার importance টা বুঝিনি। ঠিক যে সময় এ ছেড়ে চলে গেলে, তখন থেকে এখন পর্যন্ত বুঝতেছি, আমি কি হারিয়েসি, কাকে হারিয়েছি।  অনেক try করছি, অনেক চেয়েছি, তোমার সাথে একটু কথা বলতে। কিভাবে তোমার সামনে দাড়াব, কিভাবে কথা বলবো, কি বলবো, এই সব ভেবেই চোখ এ পানি চলে আসছে বারবার। ওই দিন প্রথম কথা বলাতে আমি যে কতটা খুশি আর অবাক হইছি, এত অবাক আর কখনো হতে পারব কিনা জানি না. সেই দিন এর কথা বলতেছি, যে দিন তুমি আমাকে বলেছিলে তোমার হাত এর কি অবস্থা এখন. তোমাকে চাচ্চুর বাসায় দেখে, মনে মনে ভেবেছিলাম, অনেক কিছু বলবো. দেখো কি পোড়া কপাল আমার, ওই দিন ও কি একটা ঘটনা ঘটে গেলো. জানি না কেন আমার সাথেই এমন হয় সবসময়। তবে, আল্লাহ যা করেন ভালোর জন্যই তো করেন, তোমার চলে যাওয়া আমাকে অনেক কিছু শিখিয়েছে। তোমার না থাকার দিন গুলো তে, তুমি আমার ভাবনায় থাকতে, সবসময় কষ্ট লাগতো, আর নিজেকে খুব ছোট লাগতো, সব নামাজের পর চাইতাম,তুমি তো চাইলে সব করতে পারো, প্লিজ আল্লাহ, সব ঠিক করে দাও, আমার আল্লাহ এই দোয়া টি কবুল করতে অনেক বছর সময় নিলেন আর বাকি দোআ গুলো যে কবে পূরণ করবেন,দোআ করতেছি আর ওই দিন এর অপেক্ষায় আছি. তোমার সাথে একটু-আকটু কথা বলার সুযোগ পেলাম, তাও কিছুই বলতে পারলাম না, আমি জানতাম আমি তোমাকে কখনোই এই কথা গুলো বলতে পারবো না, তখন আমি প্রোগ্রাম শিখতেছি। তখন ভাবতাম, আমি Ohi কে আমার ডাইরি টি দিয়ে দিবো ও তো পড়লেই সব বুঝে যাবে, ওকে নিয়ে আমার মনের কথা গুলা. জানো অনেক যত্ন করে রাত এর পর রাত না গুমিয়ে, ভালোবাসা দিয়ে ডাইরীর পেজই গুলো পূরন করেছি. জানি না, কখনো তুমি আমার ভালোবাসা বুজবে কি না।",
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
            inbox={inbox1.content}
          ></MainContant>
          <div className="border-2 border-[#b8ff14]"></div>
          <MainContant
            pic={pic3}
            color="text-[#121655]"
            ht="Dear Ohi."
            hcolor="font-1"
            text={text1.content}
            inbox={inbox1.content}
          ></MainContant>
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
