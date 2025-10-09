import Banner from "../../Components/Banner/Banner";
import heroPhoto from "../../assets/hero.png"

const Home = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <Banner></Banner>
        <img className="mx-auto w-11/12 md:w-3/4 lg:w-1/2" src={heroPhoto} alt="hero photo" />
      </div>
    </div>
  );
};

export default Home;
