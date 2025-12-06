import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import api from "./components/dataProvider/Api";

function App() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    async function loadCards() {
      try {
        const data = await api.getallcards();
        setCards(data);

      } catch (error) {
        console.error(error);
      }
    }

    loadCards();
  }, []);

  useEffect(() => {
    console.log("CARDS ACTUALIZADO:", cards);
  }, [cards]);

  return (

    <>
      <div>
        <Header />
        <Main cards={cards} />
        <Footer />
      </div>
    </>
  );
}

export default App;
