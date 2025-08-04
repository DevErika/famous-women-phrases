// src/components/editButton/EditButton.jsx
import editIcon from "../../assets/img/pencil-edit.svg";

function EditButton({ onClick }) {
  return (
    <img
      src={editIcon}
      alt="Edit"
      title="Edit"
      onClick={onClick}
      style={{ cursor: "pointer", width: "24px", height: "24px" }}
    />
  );
}

export default EditButton;
