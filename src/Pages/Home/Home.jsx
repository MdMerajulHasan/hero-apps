import { Link, useLoaderData } from "react-router";
import Banner from "../../Components/Banner/Banner";
import StatesSection from "../../Components/StatesSection/StatesSection";
import heroPhoto from "../../assets/hero.png";
import AppCard from "../../Components/AppCard/AppCard";

const Home = () => {
  const allApps = useLoaderData();
  const randomEightApp = [...allApps]
    .sort(() => 0.5 - Math.random())
    .slice(0, 8);

  return (
    <div className="bg-gray-100">
      <div>
        <Banner></Banner>
        <img
          className="mx-auto w-11/12 md:w-3/4 lg:w-1/2"
          src={heroPhoto}
          alt="hero photo"
        />
      </div>
      <StatesSection></StatesSection>
      <div>
        <h3 className="text-center pt-4 md:pt-16 lg:pt-20 font-bold text-2xl md:text-4xl lg:text-5xl">
          Trending Apps
        </h3>
        <p className="pt-2 pb-4 md:pb-10 text-center md:pt-4 text-[#627382] text-sm md:text-[18px] lg:text-xl">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="w-11/12 mx-auto gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {randomEightApp.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
        <div className="flex justify-center items-center pt-10 pb-20">
          <button className="rounded bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-center font-semibold text-white px-10 py-3 ">
            <Link to="/all-apps">Show All</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
