import photo from "../../assets/App-Error.png";
const NoAppFound = () => {
  return (
    <div className="flex flex-col">
      <img className="w-1/3 mx-auto" src={photo} alt="app not found image" />
      <h3 className="text-center pt-1 font-bold text-2xl md:text-4xl lg:text-5xl">
        OPPS!! APP NOT FOUND
      </h3>
      <p className="pt-2 pb-4 md:pb-10 text-center md:pt-4 text-[#627382] text-sm md:text-[18px] lg:text-xl">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <div className="pb-20 flex justify-center items-center">
        <button className="rounded w-[150px] bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-center font-semibold text-white px-10 py-3 ">
          <a href="/all-apps">Go Back</a>
        </button>
      </div>
    </div>
  );
};

export default NoAppFound;
