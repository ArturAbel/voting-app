import "./LoginError.css";

export const LoginError = ({ errorMessage }) => {
  return (
    <div className="registration-loader-container">
      <p className="registration-error">{errorMessage}</p>
    </div>
  );
};
