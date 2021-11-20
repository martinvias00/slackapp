import { useState, useEffect } from "react";
const Input = ({ name, type, value, setState, errorMessage, placeholder }) => {
  const [borderInputColor, setborderInputColor] = useState("#2d3038");
  useEffect(() => {
    if (errorMessage !== "") {
      setborderInputColor("red");
      document.querySelector(".errorSpan").classList.add("animated");
    }
    return () => {
      setborderInputColor("#2d3038");
    };
  }, [errorMessage]);

  const inputStyleLocal = {
    width: "330px",
    height: "45px",
    borderRadius: "10px",
    border: `2px ${borderInputColor} solid`,
  };

  return (
    <fieldset style={fieldsetStyle}>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setState(e.target.value)}
        style={inputStyleLocal}
      ></input>
      <span className="errorSpan" style={errorStyle}>
        {errorMessage}
      </span>
    </fieldset>
  );
};

export default Input;

const fieldsetStyle = {
  border: 0,
  width: "fit-content",
  height: 80,
  display: "flex",
  flexDirection: "column",
};
const errorStyle = {
  display: "block",
  color: "red",
  fontSize: ".7em",
  position: "relative",
  textAlign: "left",
  top: -2,
};
