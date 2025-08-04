import saveIcon from "../../assets/img/save-all.svg";

function SaveButton({ onClick }) {
  return (
    <img
      src={saveIcon}
      alt="save"
      title="Save"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    />
  );
}

export default SaveButton;
