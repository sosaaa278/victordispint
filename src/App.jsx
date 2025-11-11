import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import "./app.css"
import Background from "./components/Background/background";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { AppContext } from "./components/Context/AppContext";
import api from "./dataProvider/Api"
function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async () => {
      await api.getAllCards().then((data) => {
        setCards(data);
      }
      );
    };
  },
  )

}

export default App
