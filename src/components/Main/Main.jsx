import React from "react";
import Traveler from "./components/Traveler/Traveler";
import Galery from "./components/Galery/Galery";

function Main({ cards }) {
    console.log("cards main", cards);


    return (
        <main className="main-content">
            <Traveler />
            <Galery cards={cards} />
        </main>
    );
}

export default Main;
