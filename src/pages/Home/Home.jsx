import { Helmet } from "react-helmet-async";
import Slider from "../../components/Slider/Slider";
import StateSection from "../../components/StateSection/StateSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>MyBali-Home</title>
      </Helmet>
      <div className="h-[550px] ">
        <Slider></Slider>
      </div>
      <div className="mx-auto w-[90%]">
        <StateSection></StateSection>
      </div>
    </div>
  );
};

export default Home;
