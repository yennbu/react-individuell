import React from "react";
import FrontImg from "../../assets/images/gubbe.png"
import "./homePage.css"
import NavBar from "../../components/navBar/NavBar";
import NextBtn from "../../components/nextBtn/NextBtn";

const HomePage = () => {
    return (
        <section className="start-container">
            <img src={FrontImg} alt="en streckgubbe med partyhatt omgiven av confetti" />
            <h1>Where it's @</h1>
            <h2>Ticketing made easy</h2>
            <NextBtn />
            <NavBar />
        </section>
    )
}

export default HomePage;