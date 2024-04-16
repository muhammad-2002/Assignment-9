const Slider = () => {
  return (
    <div>
      <div className="carousel w-full h-[550px] ">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://modularassets.cdn.ignitetravel.com/modular_multisite/wp-content/uploads/sites/2/2023/07/27160202/BALI-Renaissance-Bali-Uluwatu-Resort-Bar-R-1000x480-1.png"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://modularassets.cdn.ignitetravel.com/modular_multisite/wp-content/uploads/sites/2/2022/09/27115658/Plataran-Canggu-Resort-Spa-Bali-1110x625-3.jpg"
            className="w-full"
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
          <img
            src="https://modularassets.cdn.ignitetravel.com/modular_multisite/wp-content/uploads/sites/2/2023/08/29101135/BALI-Ayodya-Resort-Bali-Ayodya-Palace-Ocean-View-1000%C3%97480.png"
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
          <img
            src="https://modularassets.cdn.ignitetravel.com/modular_multisite/wp-content/uploads/sites/2/2023/07/27160126/BALI-Renaissance-Bali-Uluwatu-Resort-pool-1000x480-2.png"
            className="w-full"
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
