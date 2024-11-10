import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import data from "../data/appartements.json";
import imgBannerAbout from "../assets/rock.png";

const Home = () => {
  return (
    <>
      <Banner
        title={"Chez vous, partout et ailleurs"}
        className="home-banner"
        img={imgBannerAbout}
      />

      <div className="container-cards">
        {data.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            cover={card.cover}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
