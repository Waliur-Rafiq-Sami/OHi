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
import imgLast from "../src/image/imglast.jpg";
// import pic8 from "../src/image/received_2781592995293621.jpeg";
// import pic9 from "../src/image/WhatsApp Image 2024-08-23 at 11.43.21_d9f9a848.jpg";
// import pic10 from "../src/image/WhatsApp Image 2024-08-23 at 11.43.22_fad86df2.jpg";
function App() {
  const [password, setPassword] = useState(false);
  const [rightPassword, setRightPassword] = useState(true);
  const fromSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.password.value);
    if (e.target.password.value == "ohi-10102006") {
      setPassword(true);
    } else {
      setRightPassword(false);
    }
    e.target.password.value = "";
  };
  const text1 = {
    content: (
      <>
        <p className="text-[#0c16a5] inline">
          <span className="text-2xl">ohi,</span> আমি তোমাকে ভীষণ
          <span className="text-2xl"> miss </span> করি ।
        </p>
      </>
    ),
  };
  const inbox1 = {
    content: (
      <>
        <p className="text-[#57fc7b]">
          আমি তোমাকে অনেক বার বলেছি, দরকার হলে আরো বলবো. আজকে আমাদের মাজের এই
          দূরত্ব আমার জন্যই হয়েছে । <br /> অনেক সময় আমাদের সাথে এমন কিছু হয় যা
          আমরা কেউ এই চাই না, তারপর ও বলতেছি{" "}
          <span className="text-2xl">sorry</span>😞। <br /> আমি এখন তোমাকে মেসেজ
          দেয়, তুমি ইগ্নোর করো, আমি বুঝি । তারপর ও তোমাকে বার বার messages দেই ।{" "}
          <br />
          <br />
          তুমি যখন আমার <span className="text-2xl"> life </span> এ ছিলে, তখন
          তোমার <span className="text-2xl"> importance </span> টা বুঝিনি। ঠিক যে
          সময় এ ছেড়ে চলে গেলে, তখন থেকে এখন পর্যন্ত বুঝতেছি, আমি কি হারিয়েসি,
          কাকে হারিয়েছি। <br />
          <br /> অনেক <span className="text-2xl"> try </span> করছি, অনেক
          চেয়েছি, তোমার সাথে একটু কথা বলতে। কিভাবে তোমার সামনে দাড়াব, কিভাবে
          কথা বলবো, কি বলবো, এই সব ভেবেই চোখ এ পানি চলে আসছে বারবার। <br />
          <br /> ওই দিন প্রথম তোমার সাথে কথা বলাতে আমি যে কতটা খুশি আর অবাক
          হইছি, এত অবাক আর কখনো হতে পারব কিনা জানি না। <br />
          সেই দিনের কথা বলতেছি, যে দিন তুমি আমাকে বলেছিলে তোমার হাত এর কি
          অবস্থা। <br />
          <br /> তোমাকে <span className="text-2xl">Uncle </span> এর বাসায় দেখে,
          মনে মনে ভেবেছিলাম, অনেক কিছু বলবো। দেখো কি পোড়া কপাল আমার, ওই দিন ও কি
          একটা ঘটনা ঘটে গেলো। জানি না, সবসময় কেন আমার সাথেই এমন হয়। <br />
          তবে, আল্লাহ যা করেন ভালোর জন্যের করেন, তোমার চলে যাওয়া আমাকে অনেক কিছু
          শিখিয়েছে। <br /> তোমার না থাকার দিন গুলো তে, তুমি আমার ভাবনায় থাকতে,
          কষ্ট লাগতো, নিজের উপর খুব রাগ হতো। <br /> <br />
          সব নামাজের পর চাইতাম, প্লিজ আল্লাহ, সব ঠিক করে দাও, তুমি তো চাইলে সব
          করতে পারো, আমার আল্লাহ এই দোয়া টি কবুল করতে অনেক বছর সময় নিলেন। <br />
          আর বাকি দোআ গুলো যে কবে পূরণ করবেন, দোআ করতেছি আর ওই দিন এর অপেক্ষা
          করতেছি। <br />
          <br />
          তোমার সাথে একটু-আকটু কথা বলার সুযোগ পেয়েও তোমাকে কিছুই বলতে পারলাম
          না, আমি জানতাম, তোমার সামনে দাঁড়িয়ে, তোমাকে কখনোই এই কথা গুলো বলতে
          পরতাম না। <br />
          তখন ভাবতাম, আমি <span className="text-2xl"> Ohi </span> কে আমার ডাইরি
          টি দিয়ে দিবো ও তো পড়লেই সব বুঝে যাবে, ওকে নিয়ে আমার মনের কথা গুলো।{" "}
          <br /> জানো
          <span className="text-2xl"> Ohi, </span> অনেক যত্ন করে রাতের পর রাত না
          গুমিয়ে, ভালোবাসা দিয়ে ডাইরীর পেজই গুলো পূরন করেছি। <br />
          <br /> জানি না, কখনো তুমি আমার ভালোবাসা বুজবে কি না।
        </p>
      </>
    ),
  };
  const text2 = {
    content: (
      <>
        <p className="inline text-[#87068b]">
          তোমার মনে আছে তোমাকে একবার রাতে মেসেজ দিয়ে কিছু বলতে চেয়েছিলাম। <br />{" "}
          ঐদিন সারা রাত বসে বসে ভাবছি তোমাকে কিভাবে বলবো, অনেক ভাবনায় ছিলাম আদো
          বলতে পারবো কি না...
        </p>
      </>
    ),
  };
  const inbox2 = {
    content: (
      <>
        <p className="text-[#d49fff]">
          যখন জানতাম না, বুজতাম না ভালোবাসা কি, তখন তুমি ছিলে, তোমাকে হারিয়ে
          তিলে তিলে বুজেছি। <br />
          ভাবীর বলা কথা গুলো, মজা গুলো, সব মজা হিসাবে নিলেও, আমার শুনতে ভালো
          লাগতো, অনুভব করতে ভালো লাগতো, ভাবতে ভালো লাগতো। <br />
          তুমি আমাকে আর আমি তোমাকে একদম কাজ থাকে চিনি। আমি কখনোই তোমার কাছে কিছু
          গোপন করি নি। <br />
          <br /> তুমি আমার সবই জানো, আমি তোমাকে এই সব কথা এখন না, আরো পরে বলতে
          চাইছি, একা একা আর ভাবতে পারতেছিলাম না। <br />
          <br /> এখন তো দূরে থাকি, এখন আরো বেশি অনুভব হয়। <br /> মাজে মাজে খুব
          বেশি খারাপ লাগতো, <br /> তখন বসে বসে তোমার ছবি দেখতাম,
          <br /> তোমার সাথে কথা বলতে মন চাইতো, <br /> তখন ডেইরি তে মনের ইচ্ছা
          মতো গল্প লিখতাম তোমাকে নিয়ে।
          <br /> তোমাকে পাশে নিয়ে এই সব লেখা গুলো পড়ব, এই স্বপ্ন ভাবে ভাবে এক
          একটা পেজ লিখেছি। <br />
          <br /> তোমাকে আমি কোনো ভাষায় বোঝাতে পারবো না আমি তোমাকে কতটা ভালোবাসি,
          যেন আমি সারাটা দিন তোমাকে নিয়েই ভাবি, <br /> ভার্সিটি তে ভর্তি হওয়ার
          পর আমি আর ফ্রি টাইম পেতাম না, সারা দিন হাজারটি কাজ করতে হতো। <br />
          কিন্তু, রাতে বিছানায় তোমার ছবি না দেখে ঘুমিয়ে গিয়েছি, এমন কখনো হয়
          নি। <br />
          <br /> মানুষকে দেখে যদি মনের কথা পড়া যেত, বোঝা যেত, <br /> তাহলে তুমি
          অনেক আগেই সব বোঝে যেতে। <br />
          <br /> আজকে আমাদের মাজে এমন একটা{" "}
          <span className="text-2xl"> situation </span> না হলে, এই সব অনুভব করতে
          অনেক সময় লাগতো, হয়তো অনেক দেরীও হয়ে যেত। <br /> এই জন্য আমি আল্লাহ কে
          সব নামাজের পরে <span className="text-2xl"> Thanks </span> বলি। <br />{" "}
          তুমি যদি অন্য কারোর হয়ে যাও, আমি নিতে পারবো না, আমাকে দেখে মনে হবে
          স্বাভাবিক, দেখে কখনো কেউ কিছু বুজতে পারবে না, আগেও যেমন পারো নি।{" "}
          <br /> শুধু মনে মনে মন ভেঙে এক-কার হয়ে যাবে। <br />
          <br />
          আমি যে তোমাকে কতটা ভয়ে-ভয়ে জিজ্ঞাসা করেছি, শুধু আমিই জানি। <br />
          মনে কি পরে তোমার একদিন তোমাকে বলেছিলাম, তুমি কেমন{" "}
          <span className="text-2xl"> life-patner </span> চাও. বিশ্বাস করো,{" "}
          <br />
          তোমার উত্তর শুনে আমি হারিয়ে গিয়েছিলাম। তোমার উত্তর গুলো আমি রাতে অনেক
          বার পড়েছি, খুব ই ভালো লাগছে, তোমার ওই দিন এর বলা কথা গুলো,
          <br /> খুব যত্ন করে, <br /> ডেইরি তে লিখে রেখেছি, যাতে কখনো আবার
          হারিয়ে না যায়।
        </p>
      </>
    ),
  };
  const text3 = {
    content: (
      <>
        <p className="text-[#20582c] inline">
          তোমাকে বলতে চাইলে কত কথা যে আছে, বলে শেষ করা যাবে না।
          <br />
          তোমার কাছে আমি কৃতজ্ঞ, কেন জানো, <br /> তোমার হারিয়ে যাওয়া আমাকে অনেক
          কিছু বুজিয়েছে,
          <br /> অনেক কিছু শিখিয়েছে,
          <br /> তাই আর কখনো তোমাকে হারানোর কথা ভাবতেও পারি না। থেকে যাও না,{" "}
          <br />
          আমার <span className="text-2xl"> Life </span> এ, <br /> অনেক বেশি
          <span className="text-2xl"> Happy </span> থাকবো, যদি আমার পাশে তোমাকে
          পাই...
        </p>
      </>
    ),
  };
  const inbox3 = {
    content: (
      <>
        <p className="text-[#f38ceae8]">
          সব মানুষ এর এ মন আছে, সবাই তার পছন্দের Object গুলো কে মনে রাখে। নিজে
          যখন একা একা থাকে, এই সব নিয়ে নিজে নিজে ভাবে, এই ভাবনাগুলো ভীষণ সুন্দর।{" "}
          <br />
          <br />
          কষ্ট কখন লাগে জানো,
          <br /> যখন ভাবনায় এই কথা আসে, আমার এই স্বপ্ন তো কখনোই পূরণ হবে না।
          <br />
          <br />
          তোমার মুখে যখন অন্য কোন ছেলের কথা শুনি, খারাপ লাগে, তুমি বলে চলে
          যাওয়ার পর এ খারাপ লাগাটাকে বেশি অনুভব করি,
          <br /> তুমি তোমার ছেলে ফ্রেন্ডদের সাথে গুরতে গিয়াছিল, এই কথা শোনার পর
          সব চেয়ে বেশি খারাপ লেগেছিলো,
          <br /> কত কথা যে মনে হয়,
          <br /> ডায়রির পেজ গুলো কেবল জানে,
          <br /> মনে মনে ভাবতে খুব ভালো লাগে, আমি তোমাকে নিয়ে কোথাও গুরতে যাবো,{" "}
          <br />
          সব সময় শুধু ভেবেই গিয়াছি, কখনও সুযোগ পাই নি. <br />
          <br /> তোমাকে মাঝে মাঝেই একটা কথা বলতাম,
          <br /> {"'"}
          <span className="text-2xl">Ohi,</span> তুই কি কখনো পর্দা করবি না।{" "}
          {"' "}
          <br />
          কেন বলতাম জানো,
          <br /> যখন মনে হতো, তোমাকে আমি ছাড়া অন্য ছেলে দেখতেছে,
          <br /> রাগ হতো,
          <br /> মানতে পারতাম না,
          <br /> আবার কোন অধিকারয়ে তোমাকে বলবো যে, বোরকা ছাড়া বাইরে যেও না।{" "}
          <br />
          <br />
          তোমাকে ভালোবাসার পর সব সময় তোমাকে আগলে রাখতে চাইছি,
          <br /> তোমাকে আমি যে কষ্ট দিয়েছি, এর পর তোমার ভালোবাসা পাওয়াটা হয়তো আর
          আমার ভাগ্যে নাই। <br />
          <br /> তারপরও ভাবতে একটু বেশিই ভালো লাগে। তোমার সাথে যদি আবার কথা বলা
          বন্ধ হয়ে যায়, তুমি যদি আবার রাগ করে আমার সাথে কথা না বলো, এই সব ভেবেই
          তোমাকে কিছু বলা হয়নি,
          <br />
          <br /> ভালোলাগা আর ভালোবাসার মাঝে অনেকটা{" "}
          <span className="text-2xl">Distance</span>, <br />
          <span className="text-2xl">Nusrat </span> আমার ভালো লাগা ছিল, ওর সাথে
          আমার মজা করতে, ওরে জ্বালাইতে, ভালো লাগতো, ওর জন্য কখনো কষ্ট লাগে নি।
          এখন তো ওর কথা তেমন মনেও পড়ে না। <br />
          তোমাকে তখনও আপন ভেবে, মনের সব কথা শেয়ার করতাম, <br />
          <br />
          সত্যি তখন বোঝিনি। তোমাকে এই ভাবে এতটা ভালোবেসে ফেলবো। <br />
          <br />
          যদি আমাদের মাঝে এই দুরত্বটা না হতো, স্বাভাবিক ভাবেই যদি আমাদের{" "}
          <span className="text-2xl">life</span> টা চলতে থাকতো। তাহলে,
          <br /> তোমাকে একবারে হারানোর পর বোজতে পারতাম, এখন যেটা বুজতে পারছি।{" "}
          <br />
          <br /> এর জন্য আমি আল্লাহ কে সব সময় Thanks দেই মনে মনে.. <br />
          সত্যি, আল্লাহ যা করেছেন ভালোর জন্যই করেছেন।
        </p>
      </>
    ),
  };
  const text4 = {
    content: (
      <>
        <p className="font-1 text-2xl  text-[#a91bc5] font-bold inline">
          It's over, no one else in this world will propose to you like this,
          till today no lover has proposed to his lover in this way...
        </p>
      </>
    ),
  };
  const inbox4 = {
    content: (
      <>
        <p className="text-[#152166]">
          তোমার সাথে আমার স্মৃতি গুলো একটু বেশিই সুন্দর. এই সুন্দর স্মৃতি গুলো
          ভাবতেও অনেক ভালো লাগে.. এগুলো যে আকড়ে ধরেই বেঁচে আছি। <br /> <br />{" "}
          এমন কোনো সময় নেই তোমার কথা মনে হয় না। <br />
          তুমি যদি আমার মেসেজ এর <span className="text-2xl">
            answer
          </span> দিতে, <br />
          অন্তত দিনে একবার যদি তোমার সাথে কথা হতো, <br /> তাহলে, <br />
          এই সব কিছই, তোমার সাথে এখন শেয়ার করতাম না.. <br />
          তোমার চোখ এ চোখ রেখে বলার সময় আর অপেক্ষায় থাকতাম। <br />
          <br /> তোমার জন্য যে আমার কেমন লাগে এটা যদি বুঝতে, তাহলে হয়তো কখনোই
          <span className="text-2xl"> ignor </span> করতে না। খুব ভালবাসি তোমাকে,
          যদিও তুমি এইসব কিছই, জানো না।
          <br />
          <br /> যত তোমার কাছে যেতে চেয়েছি, পরিস্থিতি তারচেয়েও দূরে নিয়ে গিয়েছে
          , জানিনা আরো কতো দূরে চলে যাবে তুমি, আমার থেকে। <br />
          <br />
          আগে তো বাড়ির পাশেই থাকতাম। এখন তো অনেক দূরে থাকি। তারপর ও মনে হয় তুমি
          আমার একদম কাছে আছো। <br /> ভার্সিটিতে এডমিশন নেওয়ার আগে, তোমার সাথে
          অনেক কথা বলতে ইচ্ছা করতো, বলতে পারতাম না। কোনো উপায় ছিলো না, জানো মাঝে
          মাঝে বুক ফেটে কান্না আসত, এই ওহির সাথে আমি কথা বলতে পারতেছি না। <br />{" "}
          সত্যি অনেক কষ্ট হতো। <br />
          <br /> তখন তোমার সাথে কথা বলতে পারে টা আমার কাছে স্বপ্নের মতো ছিলো।{" "}
          <br />
          আল্লাহ কাছে কত যে দূয়া করেছি, মাঝে মাঝে এখনও বিশ্বাস হয় না, তোমার
          সাথে কথা হয়। সব কেনো জানি স্বপ্নের মতো লাগে।
          <br />
          <br />
          মাঝে মাঝে কল্পনা করি। সবাই কত সুন্দর স্বপ্ন দেখে। কখনো পূরণ হবে কি এটা
          না ভেবেই, নিজের মতো করে তার নিজের স্বপ্নের একটা দুনিয়া তৈরি করে।
          <br />
          সত্যি, আমাদের এই জীবনটা নাটকের চেয়েও বেশি নাটকীয়।
          <br />
          <br />
          <span className="text-2xl">Study</span> করে অনেক দূরে যাওয়ার ইচ্ছা
          আছে। ভালো একটা future তৈরী করার, নিজের মাকে ভাইকে ভালো রাখার ইচ্ছা টাও
          অনেক. .. <br />
          <br /> ভালোবাসা খুঁজে পাওয়ার পর সারা জীবন পথ চলার সঙ্গী হিসাবে তোমাকে
          পাশে পাওয়ার ইচ্ছা টাই সব চেয়ে বেশি কষ্ট দেয়।
        </p>
      </>
    ),
  };

  const text5 = {
    content: (
      <>
        <p className="inline text-[#85a805] shadow-xl">
          তুমি যখন আমার লাইফ এ বোন এর মতো ছিলে। তখনও, আমি তোমাকে অনেক
          ভালোবাসতাম,
          <br /> তখনও তোমারে ওপর মায়া কাজ করতো,
          <br /> নিজেই কখনো বুঝতে পারিনি..
        </p>
      </>
    ),
  };
  const inbox5 = {
    content: (
      <>
        <p className="text-[#f7bb3ce7]">
          সেই Storyর পর থেকে যখননি তোমাকে দেখি, যেখানে দেখি.. যে অবস্তাতেই দেখি
          .. খুব ইচ্ছা করে,
          <br /> এত ইচ্ছা আর কখনো কিছুতে করে নি .. অনেক ইচ্ছা করে .. <br />{" "}
          তোমার কাছে ছোটে যাই , তোমার হাতটা ধরে Sorry বলি, তোমাকে একদম বুকে
          জড়িয়ে ধরে, তোমার চোখ এ চোখ রেখে কাঁদতে কাঁদতে বলি, <br />
          <br /> <span className="text-2xl">Ohi</span> আমি তোমাকে খুব ভালোবাসি।
          আমি যা করেছি না বোঝে করেছি। আর রাগ করে থেকো না। তুমি শুধুই আমার। আমি
          ছাড়া আর কারোর কথা মাথাতেও এনো না ..{" "}
          <span className="text-2xl">Ohi</span> সত্যি বলতেসি আমি তোমাকে খুব
          ভালবাসি.. Please কখনো ছেড়ে যেও না .. এইসব কথা সব সময় শুধু ভেবেই
          গিয়েছি। কখনো বলার সাহসটাই পাইনি... <br />
          <br />
          সব কিছুর একটা Step আছে.. তোমার মা তোমাকে ভালবাসে, মায়ের জায়গা থেকে। এই
          মায়ের মতো করে, মায়ের জায়গা থেকে, আর কেউ তোমাকে কখনো ভালো বাসতে পারবে
          না। <br /> ঠিক তেমন তোমার বোনও তার জায়গা থেকে তোমাকে সবচ্চ ভালোবাসে।{" "}
          <br />
          তোমার ফ্যামিলির সবাই তার নিজের নিজের অবস্থা থেকে তোমাকে সবচ্চ
          ভালোবাসে। <br /> একই ভাবে এই দুনিয়ার আর কেউ নিজের প্রেমিকার জায়গা থেকে
          তোমাকে এত ভালোবাসতে পারবেনা যত ভাল তোমাকে আমি বাসি.
          <br />
          <br />
          তোমাকে নিয়ে কতযে স্বপ্ন আমার, আমি নিজেও জানি না। যখন যেটা ভালো লাগে,
          তোমাকে কিছু বলতে ইচ্ছে করে ডায়রিতে লিখে রাখি,এটা ভেবে যে হয়তো কোনো দিন
          ...
          <br /> জানি না, এই সুন্দর দিন আদো আসবে কিনা।
        </p>
      </>
    ),
  };

  const text6 = {
    content: (
      <>
        <p className="inline text-[#0d0391] font-bold shadow-xl">
          কেউই তার ভালোবাসার মানুষের কাছে, মিথ্যা কিছু বলে না।
          <br /> তুমি যেমন, আমি তোমার মতো করেই তোমাকে ভালোবাসতে চাই, তোমার
          ভালোবাসা পেতে চাই...
        </p>
      </>
    ),
  };

  const inbox6 = {
    content: (
      <>
        <p className="text-[#33f3fae5]">
          অবাক হয়ে ভাবি, কি অদ্ভুত এই মায়া, এই ভালবাসা। ধরা ছোয়ায় বাইরে, যাকে
          শুধু অনুভব করা যায়। <br />
          <br />
          শেয়ার না করলে, কেউ কখনো বোঝতে পারে না, জানতে পারে না, দেখে কিছুই বোঝা
          যায় না.. <br /> অথচ দেখো নিজের মনে, কল্পনার জগৎ এ তাকে নিয়ে কতই না
          স্বপ্ন.. স্বপ্নের একটা পৃথিবী একটা জগৎ তৈরি করে ফেলে, তাকে নিয়ে, তাকে
          ভেবে ..
          <br />
          <br />
          মাঝে মাঝে আরো ভবি জানো, <br />
          <span className="text-2xl"> Ohi</span> আমাকে অনেক ভালোবাসবে, <br />ও
          আমাকে আমার চেয়েও বেশি ভালোবাসবে, ওর ভালোবাসায় পূর্ণতা পাবে আমাদের
          ভালোবাসা। <br />
          <br /> আমি ওকে নিয়ে গুরতে যাবো, ওর হাতএ হাত রেখে মনের কিছু কথা বলবো,
          কিছু সময় কাটাবো. <br />
          <br />
          এমন ভাবনা গুলো যদি সত্যি হয়, তাহলে এই দুনিয়ায় আমার চেয়ে সুখী কাউকে
          খুঁজে পাওয়া যাবে না. <br /> <br />
          তোমার কথা ভাবতে ভাবতে এমন একটা{" "}
          <span className="text-2xl">secuation</span> এ আছি, এখন, এমন একটা রাত
          নেই,
          <br /> যে তোমাকে ভাবি না,
          <br /> কি মনে হয় জানো, মনে হয় তুমি আমার পাশেই আছো,
          <br />
          অনেক কাছেই আছো. <br /> তুমি আমার বুকে মাথা রেখেছ, আমি তোমাকে জড়িয়ে ধরে
          গুমাচ্ছি..
          <br />
          <br />
          তোমার সাথে খুব ফ্রেন্ডলি একটা{" "}
          <span className="text-2xl">relation</span> সবসময়ই চাই আল্লাহর কাছে,
          তোমার আমার মাঝে কোন <span className="text-2xl">secret</span> থাকবে না,{" "}
          <br />
          দুই জন দুই জনকে সব শেয়ার করবো.. <br />
          <br />
          তুমি আমার কাঁধে মাথা রাখে আমাকে সব বলবে। আমি তোমার চোখে চোখ রেখে আমার
          জীবনের সব কষ্ট ভুলে যাবো..
          <br />
          <br />
          সত্যি, তোমাকে পাগল এর মত <span className="text-2xl">love</span> করি.
          আমার হৃদয় এর যে জায়গায় তুমি আছো এই জায়গাটা এই{" "}
          <span className="text-2xl">position</span>টা কেউ নিতে পারবে না।
          <br />
          <br />
          আমি তোমাকে আমার যে জায়গায় বসিয়েছি, এই জায়গায়টাই যদি{" "}
          <span className="text-2xl">Future</span> এ তুমি না থেকে অন্য কেউ থাকে,{" "}
          <br />
          তার মাঝেও আমি সব সময় তোমাকেই খুঁজে যাবো.. <br /> যদিও কেউ কখনো বুঝবে
          না,
          <br />
          ওই মেয়ে হয়ত তোমার জায়গায় থাকে আমার সাথে সারা জীবন পার করে দিবে,{" "}
          <br /> তারপর ও কখনো বুঝবে না আমি ওকে না তোমাকে ওর চেয়ে হাজার গুন বেশি
          ভালবাসি.. <br />
          <br />
          তোমার বিশ্বাস না হলেও এটাই সত্যিকারের ভালবাসা.. যত দিন যাচ্চে ততই
          তোমাকে আরো বেশি ভালবাসতেছি।
          <br />
          এই লেখা গুলো পড়ে, তুমি কতো টুকু, কি বুজছো, জানি না। এতটাত বুজবে একটা
          ছেলে, কতটা ভালবাসলে তার মা কে তার ভালোবাসার মেয়ের কথা বলতে পারে।{" "}
          <br /> হ্যাঁ, আমার মাও জানে আমি তোমাকে{" "}
          <span className="text-2xl">love</span> করি।
          <br />
          আমার মা তোমাকে অনেক স্নেহ করে, অনেক পছন্দ করে.. . তুমি জানো না, <br />{" "}
          কেউ জানে না, আমিত জানি।
        </p>
      </>
    ),
  };

  const text7 = {
    content: (
      <>
        <p className="text-[#c4aaffe7] inline">
          ohi, আমি তো কবি না, তাই হয়তো তোমাকে আমার মনের কথা ভালো করে বোঝাতে
          পারিনি. <br /> তোমাকে লেখা একটা কথাও মিথ্যা না....
        </p>
      </>
    ),
  };
  const inbox7 = {
    content: (
      <>
        <p className="text-[#b4cbd1]">
          তোমার ইগ্নোর আর নিতে পারতে ছিলাম না, তাই তাই বেশি কিছু না ভেবেই তোমাকে
          বলে দিলাম. <br /> যদি তুমি আমার ভাগ্যে থাকো, তাহলে তোমাকে কেউ আমার
          থেকে আলাদা করতে পারবে না. <br /> আর আল্লাহ যদি না চাই, তাহলে হাজার
          চেষ্টা করেও তোমাকে পাবো না. <br />
          <br /> তুমি তো আর কাঠের পুতুল না, তোমার ও মন আসে, ভালোবাসা ভালো লাগা
          সব যে আছে... <br />
          <br />
          <span className="text-2xl">Uncle</span> কে অনেক ফলো করি, তার মতো সব
          কিছু পেতে চাই, তার মতো একটা ভালো মানুষ হতে চাই, ভবিষ্যৎ এ তার মতো ভালো
          জায়গায় কাজ করার ইচ্ছাও অনেক।
          <br />
          <br />
          তোমাকে বার বার জিজ্ঞাসা করতাম, তুমি কি ইউরোপ এ যেতে চাও, তোমার কি
          ইচ্ছা আছে। তোমার আরো বলতাম, ভালো করে ইংলিশ পড়। <br /> কেন বলেছি জানো,{" "}
          <br />
          <br />
          আমি তোমাকে নিয়ে এই ভাবেই ভেবেছি, <br />
          আমি চেয়েছি, আমার ভার্সিটি শেষ হওয়ার পর আমি কাজ করবো আর পড়তে থাকবে,
          পরে স্কলারশিপ পেয়ে গেলে, তোমাকে প্রপোজ করবো, মনের কথা সব বলবো, তারপরে
          তোমাকে নিয়ে, যেখানে ভাগ্যে আছে ওইখানে চলে যাবো।
          <br />
          <br />
          কিন্তু, তোমার এই ইগ্নোর করাতে, <br />
          তোমার এই রাগ করে থাকতে, <br />
          আমি এক মুহুত্ব শান্তিতে থাকতে পারতেছি না, <br /> পড়তে পারতেছি না,{" "}
          <br /> সারাক্ষণ পাগলের মত বসে বসে সুধু তোমার কথাই ভাবতেছি...
          <br />
          Ohi. আমি জানি না আমি তোমার জন্য কি করতে পারবো, শুধু এতটুকু বলতে পারি
          তোমাকে খুব ভালোবাসব, কখানো তোমাকে ছেরে যাবো না, তুমি কষ্ট পাও এমন
          কিছুও করবো না.
          <br />
          <br />
          ইনশাল্লাহ, আল্লাহ একদিন আমাকে সফল করবেনই, সুধু সময়ের অপেক্ষায় আছি,
          কষ্ট করলে দুইদিন আগে আর পরে সফলতা আসবেই, তখন যদি পাশে তোমাকে না পাই,
          তুমি যদি আমার না হও, সারা জীবনের একটা আফসোস থেকে যাবে, সবার কাছে সফল
          হলেও আমি নিজের কাছে ব্যর্থ হয়ে থাকবো ।
          <br />
          <br /> আমি নিজেও জানতাম না আমি তোমাকে কখনো এত ভালো বাসবে, তুমি অন্য
          কারোর হয়ে গিয়েছ, এটা ভাবলেও আমার চোখে পানি চলে আসে, সত্যি ভালোবাসা
          খুবই অদ্ভুত।
        </p>
      </>
    ),
  };
  const text8 = {
    content: (
      <>
        <p className="text-[#f8ffb5] inline">
          এতোকিছু যখন বলে ফেলেছি, তখন শেষ কথাটাও বলেই ফেলি......
        </p>
      </>
    ),
  };
  const inbox8 = {
    content: (
      <>
        <p className=" text-[#df81e7d2] ">
          আমার এতোকিছু বলার একটাই কারণ, তোমাকে অনোক ভালবাসি এটা বোঝানো. <br />
          <br /> খুব স্বাবাভিক ভাবেই একটু ভেবে দেখো, <br />
          কেউ যখন কাও কে ভালোবাসবে, তখন সে তার ভালোবাসা পেতে চাবে, সব সময় তাকে
          আগলে রাখতে চাবে, চাবে সেও যাতে তাকে মন থেকে ভালোবাসে, <br />
          এগুলা কিন্তু খুবই স্বাভাবিক. <br />
          আমিও এটাই চাই, এমন ভাবেই স্বপ্ন দেখি. এটা বোঝানোর জন্যই তোমাকে এতোকিছু
          বলেছি.
          <br />
          <br />
          আমার এত-কথার মাঝে একবার এর জন্যও কিন্তু বলিনি, তোমাকে আমার ভালোবাসতেই
          হবে, তুমি আমার ছাড়া আর কারোর হতে পারবে না. এইসব কিছু না. <br />
          কথা গুলোর মাঝে ছিলো, ভালোবাসার প্রকাশ, অনুরোধ, ভাবনা গুলোয় বহিঃপ্রকাশ.
          <br />
          তোমাকে এই কথাগুলো মুখে বলতে পারতাম না, হয়তো সুযোগও পেতাম না, তাই এই
          ভাবে প্রকাশ করছি. <br />
          যাই হোক আইডিয়া তা অনোক উনিক, তোমাকে আর এই ভালো কাও প্রপৌজ করবে না,
          শুরে থাকো.
          <br />
          <br />
          তোমার কাছে, কখনো কিছু চাইনি, আর কখনো কিছু চাবোও না, শুধু একটাই
          Recquest থাকবে,
          <br />
          কখনো যদি তুমি আমার লাইফ এ আসো, সারাজীবনের জন্য আসবে, কখনো ছেড়ে চলে
          যেতে পারবেনা, <br /> আসতেই হবে বলিনি, <br />
          কিন্তু আসলে, ছেড়ে চলে যাওয়ার জন্য নয়, সারাজীবনের জন্য আসতে হবে.
          <br />
          <br />
          তোমার যদি মনে হয়, তুমি সারা জীবন আমার সাথে হ্যাপি থাকতে পারবে, আমাকে
          ভালোবাসতে পারবে, আমার হাতে হাত রেখে, আমার বুকে মাথা রেখে, তুমি সারা
          জীবন করতে পারবে. <br />
          আর সবচেয়ে important যেটা, তুমি যদি আমাকে ভালবাসতে পার, <br />
          আমার তোমাকেনা তোমার ভালোবাসা লাগবে, যদি কখনো মনে হয়, তোমার হৃদয়ে আমার
          জন্য জায়গা আছে, তুমি অপেক্ষা করো...
          <br />
          <br />
          তোমার এমন ভাবার কোন প্রয়োজন নেই যে, তুমি আমার না হলে আমি তোমাকে কষ্ট
          দিবো, সুযোগ পেলেই তোমার কোনো ক্ষতি করবো. এইসব কিছু না, যা হইসে না বোঝে
          একটা এক্সিডেন্ট হয়ে গেছে, সবাই ভুল থেকেই শিক্ষা পায়, অনেক শিক্ষা
          পাইসি, এমন ভুল আর কখনোই হবেনা.
          <br />
          <br />
          তুমি আমার সম্পর্কে, আমার ফ্যামিলি সম্পর্কে সবই জানো, নুতন করে বলার মতো
          কিছুই নেই. <br />
          Ohi, তুমি ভাবো তুমি কি চাও, তুমি কারোর কথা শোনা না, তুমি নিজেকে
          জিজ্ঞাসা করো, সেল্ফ ডিপেন্ডেন্ট হও. নিজের মনের কথা শোনা.
          <br />
          তুমি যদি রাজি থাকো সব দায়িত্ব আমার, নিজের ফ্যামিলি, তোমার ফ্যামিলি সব
          ম্যানেজ করার দায়িত্ব আমার. <br /> তোমাকে ভালোবাসি গোপান ছিল, গোপন
          থাকবে, আমরা কেউই কাউকে কিছু বলবো না. সময় হলে সবাই যানবে.
          <br />
          <br />
          তোমার জন্য সব সময়ই মনের দৌড় দোয়ার খোলা ছিল, খোলা থাকবে, তুমি কি একটু
          ভাববে, একটু ভাবো তো, তোমার জন্য এটা বানাতে আমার কত সময় বা কত দিন লাগতে
          পারে, অবাক হয়ো না, তোমার পড়তে দুই ঘণ্টার বেশি সময় না লাগলেও আমার
          বানাতে সাত মাস সময় লাগছে.
          <br />
          <br />
          এই WEB টাকে, অনেক বড় করার, তোমাকে পাশে নিয়ে, তোমার পছন্দ মতো সাজানো
          ইচ্ছা আছে.
          <br />
          <br />
          <br />
          <p className="text-center font-2 text-[#39c3db]">
            <span>*The last three golden words are*</span>{" "}
          </p>
          <p className="text-center text-5xl font3 pt-5 text-[#d81e1e]">
            <span>I love you.</span>
          </p>
        </p>
      </>
    ),
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
                  Sorry! Stil Working....
                </option>
                <option className="text-gray-700 py-2 hover:bg-blue-100 hover:text-blue-600">
                  {" "}
                  Sorry! Stil Working....
                </option>
                <option className="text-gray-700 py-2 hover:bg-blue-100 hover:text-blue-600">
                  <p>
                    Sorry! Stil Working....
                    <br />
                    please, Contract the developer(Waliur Rafiq Sami)
                  </p>
                </option>
              </select>
            </div>
          </div>
          <div className="border-2 border-[#b8ff14]"></div>
          <MainContant
            pic={pic2}
            color="text-[#878514]"
            ht="Miss YoU. .."
            hcolor="font-1"
            headerColor="bg-[#030d3b52]"
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
            headerColor="bg-[#19223b88]"
            text={text2.content}
            inbox={inbox2.content}
          ></MainContant>
          <div className="border-2 border-[#b8ff14]"></div>
          {/* --------- pic 3 -------  */}
          <MainContant
            pic={pic1}
            color="text-[#121655]"
            ht="HappyNess..."
            hcolor="font-1"
            headerColor="bg-[#1c11388c]"
            text={text3.content}
            inbox={inbox3.content}
          ></MainContant>
          <div className="border-2 border-[#b8ff14]"></div>
          {/* --------- pic 4 -------  */}
          <MainContant
            pic={pic4}
            color="text-[#121655]"
            ht="Past . ."
            hcolor="font-1"
            headerColor="bg-[#a19f424b]"
            text={text4.content}
            inbox={inbox4.content}
          ></MainContant>
          <div className="border-2 border-[#b8ff14]"></div>

          {/* --------- pic 5 -------  */}
          <MainContant
            pic={imgLast}
            color="text-[#121655]"
            ht="Dream. .."
            hcolor="font-1"
            headerColor="bg-[#000000a6]"
            text={text5.content}
            inbox={inbox5.content}
          ></MainContant>
          <div className="border-2 border-[#b8ff14]"></div>

          {/* --------- pic 5 -------  */}
          <MainContant
            pic={pic5}
            color="text-[#121655]"
            ht="Feelings.. ..."
            hcolor="font-1"
            headerColor="bg-[#101136a6]"
            text={text6.content}
            inbox={inbox6.content}
          ></MainContant>

          <div className="border-2 border-[#b8ff14]"></div>
          <MainContant
            pic={pic6}
            color="text-[#121655]"
            ht="Dear LoVe .. ."
            hcolor="font-1"
            headerColor="bg-[#101136a6]"
            text={text7.content}
            inbox={inbox7.content}
          ></MainContant>
          <div className="border-2 border-[#b8ff14]"></div>
          <MainContant
            pic={pic7}
            color="text-[#121655]"
            ht="last message..."
            hcolor="font-1"
            headerColor="bg-[#101136a6]"
            text={text8.content}
            inbox={inbox8.content}
          ></MainContant>
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
