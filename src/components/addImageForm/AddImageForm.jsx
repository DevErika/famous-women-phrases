import { useState } from "react";
import SaveButton from "../saveButton/SaveButton";

function AddImageForm({ onAdd }) {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    if (!quote.trim()) {
      return alert("Quote is required.");
    }
    onAdd(quote.trim(), author.trim(), imageUrl.trim());
    setQuote("");
    setAuthor("");
    setImageUrl("");
  };

  return (
    <form className="image-form">
      <input
        type="text"
        value={quote}
        onChange={(e) => setQuote(e.target.value)}
        placeholder="Write your quote here..."
        className="quote-input"
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author's name..."
        className="author-input"
      />
      <div className="image-url-row">
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Paste image URL here..."
          className="image-input"
        />
      </div>
      <div className="icons-container">
        <SaveButton onClick={handleSave} />
      </div>
    </form>
  );
}

export default AddImageForm;
