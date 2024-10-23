import Banner from "../components/Banner";
import "../style/home.scss";
import Card from "../components/Card";
import fichier from "../logements.json";
import lienImage from "../images/banner1.jpg";
const Home = () => {
  return (
    <>
      <div>
        <main>
          <section>
            <Banner img={lienImage} title={"Chez vous, partout et ailleurs"} />
          </section>
          <section>
            <Card fichierjson={fichier} />
          </section>
        </main>
      </div>
    </>
  );
};
export default Home;
