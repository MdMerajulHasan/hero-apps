import download from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";

const InstalledAppCard = ({ app, handleUninstall }) => {
  return (
    <div className="bg-white p-4 flex flex-col md:flex-row items-center md:justify-between ">
      <div className="flex gap-1">
        <img className="w-14 h-14" src={app.image} alt="installed app photo" />
        <div>
          <p className="text-base md:text-2xl font-bold">{app.title}</p>
          <div className="flex items-center gap-2">
            <div className="flex gap-1 items-center">
              <img
                className="w-4 h-4 text-sx md:text-sm"
                src={download}
                alt="download photo"
              />
              <p className="text-[#00D390]">{app.downloads}</p>
            </div>
            <div className="flex gap-1 items-center">
              <img className="w-4 h-4" src={rating} alt="rating photo" />
              <p className="text-xs md:text-sm text-[#FF8811]">
                {app.ratingAvg}
              </p>
            </div>
            <p className="text-xs md:text-sm">{app.size}</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => handleUninstall(app.id)}
        className="bg-[#00D390] text-white w-1/2 md:w-auto my-2 md:my-0 rounded px-4 py-3 text-semibold"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledAppCard;
