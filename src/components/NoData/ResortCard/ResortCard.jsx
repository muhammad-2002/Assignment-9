import { Link } from "react-router-dom";

const ResortCard = ({ item }) => {
  const { estate_title, image, description, location, price, id } = item;
  return (
    <div className="hover:scale-105 transition-transform">
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="card card-compact bg-base-100 rounded-sm md:h-[400px] lg:auto shadow-xl"
      >
        <figure className="h-[210px] md:h-[180px]">
          <img className="w-full" src={image} alt="Oopps!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{estate_title}</h2>
          <p>{description}</p>
          <div className=" flex justify-between">
            <p>Location: {location}</p>
            <p className="font-bold">Price: ${price}</p>
          </div>
          <div className="card-actions justify-start">
            <Link
              to={`/state-Details/${id}`}
              className="hover:bg-[#00afc6] border-solid border-[#00afc6] border-2 py-2 px-3 hover:text-white font-bold"
            >
              View Property
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResortCard;
