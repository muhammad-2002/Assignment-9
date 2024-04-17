import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const StateDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/dummyData.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const FindData = data.find((d) => d.id === parseInt(id));

  // Check if data is still loading
  if (loading) {
    return <div>Loading...</div>;
  }
  const {
    estate_title,
    image,
    description,
    location,
    price,
    status,
    area,
    facilities,
    segment_name,
  } = FindData;
  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-6 lg:py-24 lg:flex-row lg:justify-around">
          <div className="flex items-center justify-center p-2 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={image}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-2 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-3xl font-bold leading-none sm:text-3xl">
              {estate_title}
            </h1>
            <br></br>
            <h1 className="font-bold text-xl">
              Name of Segment: {segment_name}
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-5">{description}</p>
            <div className="flex justify-start md:justify-between flex-col md:flex-row  md:w-[70%] lg:mx-0  font-bold md:mx-auto">
              <p>Location: {location}</p>
              <p>Price: ${price}</p>
            </div>
            <div className="flex justify-start md:justify-between flex-col md:flex-row md:w-[70%] lg:mx-0 md:mx-auto font-bold">
              <p>Area: {area}</p>
              <p>Status: {status}</p>
            </div>
            <ul className="flex md:w-[70%] lg:mx-0 md:mx-auto md:flex-row flex-col gap-3">
              Facilities:
              {facilities.map((f) => (
                <li key={Math.random()}>{f},</li>
              ))}
            </ul>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-4">
              <Link
                to="/"
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
              >
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StateDetails;
