import { useLoaderData } from "react-router";
import AppCard from "../../Components/AppCard/AppCard";
import { useEffect, useState } from "react";

const AllApps = () => {
  const appsData = useLoaderData();

  const [searchQuery, setSearchQuery] = useState("");
  const [showingApps, setShowingApps] = useState(appsData);

  useEffect(() => {
    const appsToShow = appsData.filter((app) =>
      app.title.toLowerCase().includes(searchQuery.toLocaleLowerCase())
    );
    setShowingApps(appsToShow);
  }, [searchQuery, appsData]);

  return (
    <div className="bg-gray-100 pb-20">
      <h3 className="text-center pt-4 md:pt-16 lg:pt-20 font-bold text-2xl md:text-4xl lg:text-5xl">
        Our All Applications
      </h3>
      <p className="pt-2 pb-4 md:pb-10 text-center md:pt-4 text-[#627382] text-sm md:text-[18px] lg:text-xl">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="w-11/12 mx-auto flex justify-between items-center py-4">
        <p className="text-base md:text-2xl font-bold">
          ({showingApps.length}) Apps Found
        </p>
        <label className="input w-1/2 md:w-1/3 bg-gray-100">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Apps"
          />
        </label>
      </div>

      {showingApps.length === 0 ? (
        <div>
          <h3 className="text-center pt-1 font-bold text-2xl md:text-4xl lg:text-5xl">
            No App Found
          </h3>
          <div className="flex justify-center items-center mt-5">
            <button className="mx-auto rounded bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-center font-semibold text-white px-10 py-3 ">
              <a href="/all-apps">Show All Apps</a>
            </button>
          </div>
        </div>
      ) : (
        <div className="w-11/12 mx-auto gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {showingApps?.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllApps;
