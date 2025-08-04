import trashIcon from "../../assets/img/trash.svg";

function DeleteButton({ onClick }) {
  return (
    <img
      src={trashIcon}
      alt="delete"
      title="Delete"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    />
  );
}

export default DeleteButton;
