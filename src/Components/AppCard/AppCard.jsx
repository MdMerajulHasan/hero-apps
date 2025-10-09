// {
//     "image": "https://i.ibb.co.com/zh2nvDJt/Microsoft-Teams.png",
//     "title": "Microsoft Teams",
//     "companyName": "Microsoft Corporation",
//     "id": 12,
//     "description": "Chat, meet, call, and collaborate across devices in a single platform.",
//     "size": 120,
//     "reviews": 4000000,
//     "ratingAvg": 4.2,
//     "downloads": 800000000,
//     "ratings": [
//       { "name": "1 star", "count": 70000 },
//       { "name": "2 star", "count": 130000 },
//       { "name": "3 star", "count": 300000 },
//       { "name": "4 star", "count": 1100000 },
//       { "name": "5 star", "count": 2400000 }
//     ]

import { FaStar } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

//   },
const AppCard = ({ app }) => {
  const { image, title, downloads, ratingAvg } = app;
  console.log(image, title, downloads, ratingAvg);
  return (
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
  );
};

export default AppCard;
