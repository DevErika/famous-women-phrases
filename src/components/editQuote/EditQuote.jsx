// src/components/editQuote/EditQuote.jsx
import SaveButton from "../saveButton/SaveButton";
import DeleteButton from "../deleteButton/DeleteButton";

function EditQuote({ card, onChange, onSave, onDelete }) {
  if (!card) return null; // Prevención por seguridad

  return (
    <div className="image-form">
      <input
        type="text"
        value={card.quote}
        onChange={(e) => onChange(card.id, "quote", e.target.value)}
        placeholder="Edit quote..."
        className="quote-input"
      />
      <input
        type="text"
        value={card.author}
        onChange={(e) => onChange(card.id, "author", e.target.value)}
        placeholder="Edit author's name..."
        className="author-input"
      />
      <input
        type="text"
        value={card.image}
        onChange={(e) => onChange(card.id, "image", e.target.value)}
        placeholder="Edit image URL..."
        className="image-input"
      />
      <div className="icons-container">
        <SaveButton onClick={onSave} />
        <DeleteButton onClick={onDelete} />
      </div>
    </div>
  );
}

export default EditQuote;
