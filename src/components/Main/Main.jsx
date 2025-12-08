import React from "react";
import Traveler from "./components/Traveler/Traveler";
import Galery from "./components/Galery/Galery";

function Main({ cards, onUpdateCard, onCreateCard, onDeleteCard }) {
    return (
        <main className="main-content">
            <Traveler onCreateCard={onCreateCard} />
            <Galery cards={cards} onUpdateCard={onUpdateCard} onDeleteCard={onDeleteCard} />
        </main>
    );
}

export default Main;
