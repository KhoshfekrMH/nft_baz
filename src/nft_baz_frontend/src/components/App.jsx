import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import homeImage from "../../assets/home-img.png";

export const App = () => {
    return (
        <div className="App">
            <Header />
            <img className="bottom-space" src={homeImage} alt="Main photo of header" />
            {/*<Gallery />*/}
            <Footer />
        </div>
    );
};