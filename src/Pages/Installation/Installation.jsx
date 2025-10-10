import { useLoaderData } from "react-router";
import InstalledAppCard from "../../Components/InstalledAppCard/InstalledAppCard";
import { useState } from "react";

const Installation = () => {
  const allApps = useLoaderData();

  const localData = localStorage.getItem("installedList");
  const installedIds = JSON.parse(localData);
  const installedIdsNum = installedIds.map((id) => parseInt(id));
  const installedApps = allApps.filter((app) =>
    installedIdsNum.includes(app.id)
  );
  const [apps, setApps] =useState(installedApps);

  const convertDownloadsValue = (value)=>{
    if(typeof value == "number"){
      return value;
    }
    const num = parseFloat(value);
    console.log(num);

    if(value.includes('B')){
      return num * 1000000000;
    }
    if(value.includes('M')){
      return num * 1000000;
    }
    if(value.includes("K")){
      return num * 1000;
    }
    return num;
  }

  const handleSort =(e)=>{
    const selected = e.target.value;
    const sorted= [...apps].sort((a,b)=>{
      const aDownloads = convertDownloadsValue(a.downloads);
      const bDownloads = convertDownloadsValue(b.downloads);

      if(selected === "High-Low (Sort By Downloads)"){
        return bDownloads - aDownloads;
      }else if(selected === "Low-High (Sort By Downloads)"){
        return aDownloads - bDownloads;
      }
      return 0;

    })
    setApps(sorted);
  }


  const handleUninstall =(appId)=>{
    const updatedAppList = installedApps.filter(app=>app.id!==appId);
    setApps(updatedAppList);
    const updatedLocalIdNum = installedIdsNum.filter(id=>id!==appId);
    const updatedLocalIdStr = updatedLocalIdNum.map(id=>toString(id));
    const updatedLocalIds = JSON.stringify(updatedLocalIdStr);
    localStorage.setItem('installedList', updatedLocalIds);
  }

  return (
    <div className="bg-gray-100 pb-20">
      <h3 className="text-center pt-4 md:pt-16 lg:pt-20 font-bold text-2xl md:text-4xl lg:text-5xl">
        Your Installed Apps
      </h3>
      <p className="pt-2 pb-4 md:pb-10 text-center md:pt-4 text-[#627382] text-sm md:text-[18px] lg:text-xl">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="w-11/12 mx-auto flex justify-between items-center py-4">
        <p className="text-base md:text-2xl font-bold">({installedApps.length}) Apps Found</p>
        <select onChange={handleSort} defaultValue="Sort By Downloads" className="select w-1/2 md:w-1/4 lg:w-1/5">
          <option>Sort By Downloads</option>
          <option>High-Low (Sort By Downloads)</option>
          <option>Low-High (Sort By Downloads)</option>
        </select>
      </div>
      <div className="flex flex-col gap-4 w-11/12 mx-auto rounded">
        {
            apps.map(app=><InstalledAppCard key={app.id} app={app} handleUninstall={handleUninstall} ></InstalledAppCard>)
        }
      </div>
    </div>
  );
};

export default Installation;
