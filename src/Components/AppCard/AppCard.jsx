import { FaStar } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { image,id, title, downloads, ratingAvg } = app;

  return (
    <Link to={`/app-details/${id}`}>
      <div className="bg-white p-4 rounded">
        <img
          className="w-11/12 mx-auto md:w-full h-[230px] md:h-[250px] rounded-lg"
          src={image}
          alt="card image"
        />
        <p className="md:text-xl font-medium my-2 md:my-4">{title}</p>
        <div className="flex justify-between">
          <span className="bg-[#F1F5E8] px-2 py-1 text-[#00D390] flex gap-1 items-center">
            <MdOutlineFileDownload></MdOutlineFileDownload> {downloads}
          </span>
          <span className="bg-[#FFF0E1] px-2 py-1 text-[#FF8811] flex gap-1 items-center">
            <FaStar></FaStar>
            {ratingAvg}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
