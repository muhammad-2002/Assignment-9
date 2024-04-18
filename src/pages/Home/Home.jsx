import { Helmet } from "react-helmet-async";
import Slider from "../../components/Slider/Slider";
import StateSection from "../../components/StateSection/StateSection";
import Leaflet from "../../components/leaflet/leaflet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>MyBali</title>
      </Helmet>
      <div className="h-[550px] ">
        <Slider></Slider>
      </div>
      <div className="mx-auto w-[90%]">
        <StateSection></StateSection>
      </div>
      <div className="mx-auto w-[90%] mt-10 z-0">
        <Leaflet></Leaflet>
      </div>
    </div>
  );
};

export default Home;
