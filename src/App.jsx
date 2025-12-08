import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
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

  // --- ACTUALIZAR LIKE (USAS ESTE)
  async function handleUpdateCard(card) {
    try {
      const updatedCard = await api.updateLike(card._id);

      setCards((cards) =>
        cards.map((c) => (c._id === card._id ? updatedCard : c))
      );
    } catch (error) {
      console.error(error);
    }
  }

  // --- BORRAR TARJETA
  async function handleDeleteCard(card) {
    try {
      await api.deleteCard(card._id);
      setCards((cards) => cards.filter((c) => c._id !== card._id));
    } catch (error) {
      console.error(error);
    }
  }

  async function handleCreateCard(cardData) {
    try {
      const newCard = await api.createCard(cardData);
      setCards([newCard, ...cards]); // ✅ se agrega sin recargar
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div>
        <Header />
        <Main
          cards={cards}
          onUpdateCard={handleUpdateCard}
          onCreateCard={handleCreateCard}
          onDeleteCard={handleDeleteCard}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
