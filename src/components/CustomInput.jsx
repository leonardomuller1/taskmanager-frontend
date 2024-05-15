import "./CustomInput.scss";

const CustomInput = ({ label, value }) => {
  return (
    <div className="custom-input-coitaner">
      <input type="text" className="custom-input" />

      {label ? (
        <label
          className={`${
            value.length !== "" ? "shrink" : ""
          } custom-input-label`}
        ></label>
      ) : null}
    </div>
  );
};

export default CustomInput;
