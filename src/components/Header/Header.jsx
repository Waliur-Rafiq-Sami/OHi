import logo from "../../image/logo.jpg";
const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#56bfd1] to-[#537edb]">
      <div className="flex items-center">
        <div className="p-3">
          <img src={logo} className="w-16 rounded-full" alt="" />
        </div>
        <div className="text-center py-3 font-1 text-xl">
          <p className="font-semibold text-start text-2xl text-[#2946ec]">
            Welcome . ..
          </p>
          <p className="text-[#a632db]">
            Fabiha Tanha <span className="text-[#d3234f]">ohi</span>
          </p>
        </div>
      </div>
      <div className="border-2 border-[#b8ff14]"></div>
    </div>
  );
};
export default Header;
