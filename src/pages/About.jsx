import Banner from "../components/Banner";
import bannerTwoPath from "../images/banner2.jpg";
const lienImage = bannerTwoPath;
const About = () => {
  return (
    <>
      <h1>
        <div id="bannerTwo">
          <Banner img={lienImage} />
        </div>
      </h1>
    </>
  );
};
export default About;
