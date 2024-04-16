import { Helmet } from "react-helmet-async";
import Slider from "../../components/Slider/Slider";
import StateSection from "../../components/StateSection/StateSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>MyBali-Home</title>
      </Helmet>
      <div className="h-[400px]">
        <Slider></Slider>
      </div>
      <div className="max-w-6xl mx-auto mt-56">
        <StateSection></StateSection>
      </div>
    </div>
  );
};

export default Home;
