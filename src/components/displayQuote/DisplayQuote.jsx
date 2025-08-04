import EditButton from "../editButton/EditButton";
import DeleteButton from "../deleteButton/DeleteButton";

function DisplayQuote({ card, onEdit, onDelete }) {
  return (
    <div className="image-form">
      <p className="quote-text">“{card.quote}”</p>
      <p className="author-text">– {card.author}</p>
      {card.image && (
        <img
          src={card.image}
          alt="quote"
          style={{ maxWidth: "100%", borderRadius: "8px" }}
        />
      )}
      <div className="icons-container">
        <EditButton onClick={onEdit} />
        <DeleteButton onClick={onDelete} />
      </div>
    </div>
  );
}

export default DisplayQuote;
