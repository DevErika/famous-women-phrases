import { useState } from "react";
import AddImageForm from "./components/addImageForm/AddImageForm";
import DisplayQuote from "./components/displayQuote/DisplayQuote";
import EditQuote from "./components/editQuote/EditQuote";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);

  // Añadir una nueva tarjeta con valores válidos
  const addCard = (quote, author, image) => {
    const newCard = {
      id: Date.now(),
      quote: quote || "",
      author: author || "Anonymous",
      image: image || "",
      isEditing: false,
    };
    setCards((prev) => [...prev, newCard]);
  };

  const deleteCard = (id) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  const toggleEdit = (id) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, isEditing: !card.isEditing } : card
      )
    );
  };

  const saveEdit = (id) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, isEditing: false } : card
      )
    );
  };

  const updateCard = (id, field, value) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, [field]: value } : card
      )
    );
  };

  return (
    <main>
      <h1>Women Phrases</h1>
      <AddImageForm onAdd={addCard} />

      {cards.map((card) =>
        card.isEditing ? (
          <EditQuote
            key={card.id}
            card={card}
            onChange={updateCard}
            onSave={() => saveEdit(card.id)}
            onDelete={() => deleteCard(card.id)}
          />
        ) : (
          <DisplayQuote
            key={card.id}
            card={card}
            onEdit={() => toggleEdit(card.id)}
            onDelete={() => deleteCard(card.id)}
          />
        )
      )}
    </main>
  );
}

export default App;
