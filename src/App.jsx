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
  const text2 = {
    content:
      "যখন জানতাম না, বুজতাম না ভালোবাসা কি, তখন তুমি ছিলে, তোমাকে হারিয়ে তিলে তিলে বুজেছি. তুলি ভাবীর বলা কথা গুলো, মজা গুলো, সব মজা হিসাবে নিলেও, আমার শুনতে ভালো লাগতো, অনুভব করতে ভালো লাগতো, ভাবতে ভালো লাগতো. তোমার মনে আছে তোমাকে একবার রাতে মেসেজ দিয়ে কিছু বলতে চেয়েছিলাম. ঐদিন সারা রাত বসে বসে ভাবছি তোমাকে কিভাবে বলবো, অনেক ভাবনায় ছিলাম আদো বলতে পারবো কি না এটা ভেবে...",
  };
  const inbox2 = {
    content:
      "তুমি আমাকে আর আমি তোমাকে একদম কাজ থাকে চিনি. আমি কখনোই তোমার কাছে কিছু গোপন করি নি. তুমি আমার সবই জানো, আমি তোমাকে এই সব কথা এখন না আরো পরে বলতে চাইছি, একা একা আর ভাবতে পারতেছিলাম না. এখন তো দূরে থাকি, এখন আরো বেশি অনুভব হয়. মাজে মাজে খুব বেশি খারাপ লাগতো তখন বসে বসে তোমার ছবি দেখতাম, তোমার সাথে কথা বলতে মন চাইতো, তখন ডেইরি তে মনের ইচ্ছা মতো গল্প লিখতাম তোমাকে নিয়ে. তোমাকে পাশে নিয়ে এই সব লেখা গুলা পড়ব, এই স্বপ্ন ভাবে ভাবে এক একটা পেজ লিখেছ জানো. তোমাকে আমি কোনো ভাষায় বোঝাতে পারবো না আমি তোমাকে কতটা ভালোবাসি, যেন আমি সারাটা দিন তোমাকে নিয়েই ভাবি, ভার্সিটি তে ভর্তি হওয়ার পর আমি আর ফ্রি টাইম পেতাম না, সারা দিন হাজার টি কাজ করতে হতো. রাতে বেড এ আসার তোমার ছবি না দেখাই গোমিয়া গেয়েছি, এমন কখনো হয় নি. মানুষ কে দেখে যে মন আর কথা বোঝা যায় না. যদি বোঝা যেত তাহলে তুমি অনেক আগেই সব বোঝে যেতে. আজকে আমাদের মাজে এমন একটা situation হয়েছে তাই, এই সব অনুভব করতে পারছি. এই জন্য আমি আল্লাহ কে রোজই thanks বলি. তুমি যদি অন্য কারোর হয়ে যাও, আমি নিতে পারবো না জানো, কখনো আমাকে দেখে বুজতে পারবে না, আগেও যেমন পারো নি,শুধু মনে মনে মন ভেঙে এক-কার হয়ে যাবে. আমি যে তোমাকে কতটা ভয়ে ভয়ে জিজ্ঞাসা করেছি শুদু আমিই জানি. মনে কি পরে তোমার একদিন তোমাকে বলেছিলাম, তুমি কেমন life-patner চাও. বিশ্বাস করো, তোমার উত্তর শুনে আমি হারিয়ে গিয়েসিলাম. তোমার উত্তর গুলো আমি রাতে অনেক বার পড়েছি, খুব ই ভালো লাগছে , তোমার ওই দিন এর বলা কথা গুলো. খুব যত্ন করে ডেইরি তে লিখে রেখেছি. যাতে কখনো আবার হারিয়ে না যায়.",
  };
  const text3 = {
    content:
      "তোমাকে বলতে চাইলে কত কথা যে আছে, বলে শেষ করা যাবে না. একদিক থেকে আমি তোমার কাছে কৃতজ্ঞ, তোমার হারিয়ে যাওয়া আমাকে অনেক কিছু বুজিয়েছে, অনেক কিছু শিখিয়েছে, তাই আর কখনো তোমাকে হারাতে চাই না. থেকে যাও না আমার Life এ, অনেক বেশি Happy থাকবো, যদি আমার পাশে তোমাকে পাই...",
  };
  const inbox3 = {
    content:
      'সব মানুষ এর এ মন আসে, সবাই তার পছন্দের Object গুলো কে মনে রাখে. নিজে যখন একা একা থাকে এই সব নিয়ে নিজে নিজে ভাবে,এই ভাবনাগুলো ভীষণ সুন্দর, কষ্ট কখন লাগে জানো, যখন ভাবনায় এই কথা আছে আমার এই স্বপ্ন তো কখনোই পূরণ হবে না. তোমার মুখে যখন অন্য কোন ছেলের কথা শুনি, খারাপ লাগে, তুমি বলে চলে যাওয়ার পর এ খারাপ লাগাটাকে বেশি অনুভব করি,তুমি তোমার ছেলে ফ্রেন্ড দের সাথে গুরতে গিয়াছিল, এই কথা শোনার পর সব চেয়ে বেশি খারাপ লাগে, কত কথা যে মনে হয়, ডায়রির পেজ গুলো কেবল জানে, মনে মনে ইমাজিন করি, আমি ওকে নিয়ে কোথাও গুরতে যাওয়ার সুযোগ কেন পাই না, তোমাকে মাঝে মাঝেই একটা কথা বলতাম, "Ohi, তুই কি কখনো পর্দা করবি না" কেন বলতাম জানো, যখন ভাবতাম তোমাকে আমি ছাড়া অন্য ছেলে দেখতেছে, রাগ হতো, মানতে পারতাম না,আবার কোন অধিকার এই বা তোমাকে বলবো যে, বোরকা ছাড়া বাইরে যেও না. তোমাকে ভালোবাসার পর সব সময় তোমাকে আগলে রাখতে চাইছি, তোমাকে আমি যে কষ্ট দিয়েছি, এর পর তোমার ভালোবাসা পাওয়াটা হয়তো আর আমার ভাগ্যে নাই, তারপরও ভাবতে ভালো লাগে. তোমার সাথে যদি আবার কথা বলা বন্ধ হয়ে যায়, তুমি যদি আবার রাগ করে আমার সাথে কথা না বলো, এই সব ভেবেই তোমাকে কিছু বলা হয়নি, ভালোলাগা আর ভালোবাসার মাঝে অনেক তা Distance, নুসরাত আমার ভালো লাগা ছিল, ওর সাথে আমার মজা করতে, ওরে জ্বালাইতে, ভালো লাগতো, ওর জন্য কখনো কষ্ট লাগে নি. তোমাকে যে কতটা আপন ভাবতাম, তোমাকে মনের সব কথা শেয়ার করতাম, সত্যি তখন বোঝিনি. এই ভাবেই যদি আমাদের life টা চলতে থাকতো তাহলে, তোমাকে একবারে হারানোর পর বোজতে পারতাম, এখন যেটা বুজতে পারছি. এর জন্য আমি আল্লাহ কে সব সময় Thanks দেই মনে মনে..',
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
          {/* --------- pic 2 -------  */}
          <MainContant
            pic={pic3}
            color="text-[#121655]"
            ht="Dear Ohi."
            hcolor="font-1"
            text={text2.content}
            inbox={inbox2.content}
          ></MainContant>
          <div className="border-2 border-[#b8ff14]"></div>
          {/* --------- pic 3 -------  */}
          <MainContant
            pic={pic1}
            color="text-[#121655]"
            ht="Dear Ohi."
            hcolor="font-1"
            text={text3.content}
            inbox={inbox3.content}
          ></MainContant>
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
