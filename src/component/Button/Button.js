import "./Button.scss";

const Button = ({ pagination }) => {
  return (
    <div className="Button-container">
      <button type="button" className="Button" onClick={pagination}>
        Load more...
      </button>
    </div>
  );
};

export default Button;
