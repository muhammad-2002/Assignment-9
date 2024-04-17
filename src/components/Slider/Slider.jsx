import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
const Slider = () => {
  return (
    <div className="h">
      <div className="carousel w-full h-[600px]   relative ">
        <div id="slide1" className="carousel-item relative  w-full">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute w-[70%] mx-auto h-[580px]  left-0 right-0 text-white text-center flex flex-col justify-center items-center   gap-5">
            <h1 className="text-4xl font-bold">What to do in Jimbaran, Bali</h1>
            <p className="mt-4">
              Bask on a private sunlounge with a coconut in hand or dine at
              Warung Bamboo for an unforgettable culinary experience or get your
              hit of fascinating culture at Garuda Wisnu Kencana where shows and
              festivals unfold. Discover your inner artisan as you style pottery
              at Jenggala Gallery or craft your own fragrance at L’Atelier
              Parfums et Creations.
            </p>
            <p className="flex justify-center items-center text-5xl">
              <MdOutlineKeyboardDoubleArrowDown />
            </p>
          </div>
          <img
            src="https://modularassets.cdn.ignitetravel.com/modular_multisite/wp-content/uploads/sites/2/2023/11/16152135/BALI-jimbaran-woman-in-red-skirt-looking-at-ocean-MYBALI-1110x625-1.jpg"
            className="w-full h-[600px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div></div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute w-[70%] mx-auto h-[580px]  left-0 right-0 text-white text-center flex flex-col justify-center items-center  gap-5">
            <h1 className="text-4xl font-bold">Visit Komodo, Bali</h1>
            <p className="mt-4">
              The landscapes of Komodo National Park look like they belong to
              the Jurassic era, with lush volcanic hills, breathtaking pink-hued
              beaches, and deep cobalt waters. Plus, the scuba diving and
              snorkelling opportunities in Komodo National Park are among
              Indonesia’s best. Here, you can get up close with an abundance of
              marine life and vibrant coral species, including a huge population
              of manta rays.
            </p>
            <p className="flex justify-center items-center text-5xl">
              <MdOutlineKeyboardDoubleArrowDown />
            </p>
          </div>
          <img
            src="https://modularassets.cdn.ignitetravel.com/modular_multisite/wp-content/uploads/sites/2/2023/11/16152458/BALI-komodo-tourist-snorkelling-flores-island-MYBALI-1000x480-1.jpg"
            className="w-full  h-[600px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="inset-0 overflow-hidden absolute bg-black opacity-60"></div>
          <div className="absolute w-[70%] h-[580px] mx-auto  left-0 right-0 text-white text-center flex flex-col justify-center items-center  gap-5">
            <h1 className="text-4xl font-bold">Authentic culture of Uluwatu</h1>
            <p className="mt-4">
              If you’re looking for a Bali holiday destination that combines
              laidback surf culture, five-star resorts, and local village life,
              Uluwatu is the place for you. Nestled atop limestone cliffs of
              Bukit Peninsula, Uluwatu is known for gorgeous white sands, sacred
              Hindu temples, and enchanting sunset views. For this reason,
              Uluwatu attracts a vast array of travellers, from pro surfers to
              luxury seekers to cultural wanderers.
            </p>
            <p className="flex justify-center items-center text-5xl">
              <MdOutlineKeyboardDoubleArrowDown />
            </p>
          </div>
          <img
            src="https://modularassets.cdn.ignitetravel.com/modular_multisite/wp-content/uploads/sites/2/2023/11/20131151/BALI-Uluwatu-woman-at-pura-luhur-MYBALI-1000x480-1.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className="inset-0  absolute bg-black opacity-60"></div>
          <div className="absolute w-[70%] mx-auto h-[580px]  left-0 right-0 text-white text-center flex flex-col justify-center items-center   gap-5">
            <h1 className="text-4xl font-bold">
              Relax and rejuvenate in laidback Sanur
            </h1>
            <p className="mt-4">
              The landscapes of Komodo National Park look like they belong to
              the Jurassic era, with lush volcanic hills, breathtaking pink-hued
              beaches, and deep cobalt waters. Plus, the scuba diving and
              snorkelling opportunities in Komodo National Park are among
              Indonesia’s best. Here, you can get up close with an abundance of
              marine life and vibrant coral species, including a huge population
              of manta rays.
            </p>
            <p className="flex justify-center items-center text-5xl">
              <MdOutlineKeyboardDoubleArrowDown />
            </p>
          </div>
          <img
            src="https://modularassets.cdn.ignitetravel.com/modular_multisite/wp-content/uploads/sites/2/2023/11/20131942/BALI-Sanur-stant-up-paddleboarders-MYBALI-1110x625-1.jpg"
            className="w-full h-[600px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
