import flogo from "../../image/footer/footer.jpg";
const Footer = () => {
  return (
    <div className="bg-base-200 text-base-content border-base-300">
      <h1 className="text-center py-3 font-bold font-2 text-lg">
        Developer Information
      </h1>
      <footer className="footer border-t px-10 py-4">
        <aside className="flex">
          <img className="rounded-full w-1/3" src={flogo} alt="" />
          <div>
            <h1 className="font-bold text-lg font-2">Md. Waliur Rafiq Sami</h1>
            <p className="text-sm font-semibold font-1">
              Bangladesh Army University Of Science And Technology (BAUST)
            </p>
            <p className="text-sm font-semibold font-2">
              Hosting:{" "}
              <span>
                <a
                  target="_blank"
                  href=" https://github.com/Waliur-Rafiq-Sami/OHi"
                  className="link link-accent font-1"
                >
                  https://github.com/Waliur-Rafiq-Sami/OHi
                </a>
              </span>
            </p>
          </div>
        </aside>
      </footer>
    </div>
  );
};
export default Footer;
