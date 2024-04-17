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
    <div className="mt-24 ">
      <div className="flex justify-center">
        <h1
          className=" font-bold text-3xl  border-b-4 border-dotted border-purple-950"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Destination
        </h1>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <ResortCard
            key={item.id}
            data-aos="fade-left"
            data-aos-duration="2000"
            item={item}
          ></ResortCard>
        ))}
      </div>
    </div>
  );
};

export default StateSection;
