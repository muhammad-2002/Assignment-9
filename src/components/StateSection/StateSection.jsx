import { useEffect, useState } from "react";
import ResortCard from "../NoData/ResortCard/ResortCard";

const StateSection = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data/dummyData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="mt-16">
      <div className="flex justify-center">
        <h1 className=" font-bold text-3xl  border-b-4 border-dotted border-purple-950 w-[110px]">
          Estates
        </h1>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        {data.map((item) => (
          <ResortCard key={item.id} item={item}></ResortCard>
        ))}
      </div>
    </div>
  );
};

export default StateSection;
