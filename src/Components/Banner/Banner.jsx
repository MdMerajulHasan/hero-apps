import playStore from "../../assets/googlePlay.png";
import appStore from "../../assets/appStore.png";

const Banner = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold">
        We Build <br />{" "}
        <span className="bg-clip-text text-transparent bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
          Productive
        </span>{" "}
        Apps
      </h2>
      <p className="pt-2 md:pt-4 text-[#627382] text-sm md:text-[18px] lg:text-xl mx-auto w-11/12 lg:max-w-5xl">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="flex font-semibold py-10 md:text-xl flex-col md:flex-row gap-4 justify-center items-center">
        <a target="_blank" href="https://play.google.com/store/games">
          <button className="flex border border-[#D2D2D2] rounded hover:bg-gray-200 items-center gap-2 px-3 py-2 md:px-6 md:py-3">
            <img className="w-8 h-8" src={playStore} alt="play store icon" />
            Google Play
          </button>
        </a>
        <a target="_blank" href="https://www.apple.com/app-store/">
          <button className="flex border border-[#D2D2D2] rounded hover:bg-gray-200 items-center gap-2 px-3 py-2 md:px-6 md:py-3">
            <img className="w-8 h-8" src={appStore} alt="app store icon" />
            App Store
          </button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
