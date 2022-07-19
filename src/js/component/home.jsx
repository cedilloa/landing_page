import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Cardsn from "./cardsn.jsx";
import Header from "./header.jsx";
import Jumbotrontop from "./jumbotrontop.jsx";
import Footercomponent from "./footercomponent.jsx";

//create your first component
const Home = () => {
  let lista = [1, 2, 3, 4];
  return (
    <>
      <Header />
      <div className="container">
        <Jumbotrontop />
      </div>
      <div className="container">
        <div className="row">
          {lista.map((news, index)=>{
           return <Cardsn key={index}/>
          })}
          
        </div>
      </div>
      <Footercomponent />
    </>
  );
};

export default Home;
