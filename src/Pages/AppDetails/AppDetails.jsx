import { useLoaderData, useParams } from "react-router";
import NoAppFound from "../NoAppFound/NoAppFound";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppDetails = () => {
  const allApps = useLoaderData();
  const [installed, setInstalled] = useState(false);

  const handleInstall = () => {
    setInstalled(!installed);
    if (!installed) {
      toast("Successfully Installed App");
    }
  };

  const { id } = useParams();
  const targetedApp = allApps.find((app) => app.id === Number(id));
  const {
    image,
    title,
    ratingAvg,
    downloads,
    reviews,
    companyName,
    size,
    description,
    ratings,
  } = targetedApp;

  return (
    <>
      {targetedApp ? (
        <div className="w-11/12 mx-auto pb-20">
          <div className="flex flex-col items-center md:flex-row md:gap-10">
            <div>
              <img
                className="w-1/2 mx-auto md:h-[350px] md:w-[350px]"
                src={image}
                alt="app image"
              />
            </div>
            <div className="w-11/12 mx-auto md:w-full text-center md:text-left">
              <div>
                <h3 className="text-3xl font-bold">{title}</h3>
                <p className="text-[#627382] text-sm md:text-[18px]">
                  Developed by{" "}
                  <span className="text-violet-600">{companyName}</span>
                </p>
              </div>
              <div className="border-t border-gray-300 my-7"></div>
              <div className="flex justify-center md:justify-start gap-6">
                <div>
                  <img src={downloadIcon} alt="download icon" />
                  <p className="text-[#627382] text-xs md:text-base">
                    Downloads
                  </p>
                  <p className="font-extrabold text-4xl">{downloads}</p>
                </div>
                <div>
                  <img src={ratingIcon} alt="rating icon" />
                  <p className="text-[#627382] text-xs md:text-base">
                    Average Ratings
                  </p>
                  <p className="font-extrabold text-4xl">{ratingAvg}</p>
                </div>
                <div>
                  <img src={reviewIcon} alt="review icon" />
                  <p className="text-[#627382] text-xs md:text-base">
                    Total Reviews
                  </p>
                  <p className="font-extrabold text-4xl">{reviews}</p>
                </div>
              </div>
              <div>
                <button
                  onClick={handleInstall}
                  className=" bg-[#00D390] px-5 py-3 text-white font-semibold text-xl rounded mt-8"
                >
                  {installed ? "Installed" : `Install Now(${size})`}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <ResponsiveContainer width="100%" height={600} >
                <BarChart
                  data={ratings}
                  layout="vertical"
                >
                  <XAxis type="number"></XAxis>
                  <YAxis
                    dataKey="name"
                    type="category"
                    axisLine={false}
                  ></YAxis>
                  <Tooltip></Tooltip>
                  <Bar dataKey="count" fill="#FF8811" barSize={30}></Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-2xl font-semibold mt-10 text-center md:text-left">Description</p>
            <p className="text-[#627382] text-xs md:text-base">{description}</p>
          </div>
        </div>
      ) : (
        <NoAppFound></NoAppFound>
      )}
    </>
  );
};

export default AppDetails;
