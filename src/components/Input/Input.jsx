import "./Input.css";

export const Input = ({ type, name, placeholder, value, setValue }) => {
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <input
      required
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleInput}
    />
  );
};
