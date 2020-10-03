import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import Card1 from "../assets/card1.webp";
import Card2 from "../assets/card2.webp";
import Card3 from "../assets/card4.webp";
import Home1 from "../assets/home1.webp";
import Home2 from "../assets/home2.webp";
import Home3 from "../assets/home3.webp";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src={Card1}
          title="Unique stays"
          description="Tents, treehouses, and more – these spaces are more than just a place to sleep."
        />
        <Card
          src={Card2}
          title="Online Experiences"
          description="Find unique activities led by one-of-a-kind hosts – all without leaving home."
        />
        <Card
          src={Card3}
          title="Entire Homes"
          description="Comfortable Private Places,with room for friends or family"
        />
      </div>
      <div className="home__section">
        <Card
          src={Home1}
          title="Entire Homes"
          description="Comfortable Private Places,with room for friends or family"
          price={5000}
        />
        <Card
          src={Home2}
          title="Entire Homes"
          description="Comfortable Private Places,with room for friends or family"
          price={5000}
        />
        <Card
          src={Home3}
          title="Entire Homes"
          description="Comfortable Private Places,with room for friends or family"
          price={5000}
        />
      </div>
    </div>
  );
}

export default Home;
