import { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.name.length < 5) {
      setError(true);
      setErrorMessage("Invalid name");
      return;
    }

    const itIncludes = userData.name.includes("@");

    if (!itIncludes) {
      setError(true);
      setErrorMessage("Email is not valid");
      return;
    }

    const str = userData.password.trim();
    const passwordIsValid = userData.password === str;
    if (!passwordIsValid || userData.password.length < 5) {
      setError(true);
      setErrorMessage(
        "Invalid password. Please do not leave empty spaces and input more than 5 characters."
      );
      return;
    }

    //on submit to do
    console.log(userData);
  };

  return (
    <div>
      <form onSubmit={(e) => console.log(e)}>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={handleChange}
          name="name"
        />

        <input
          type="text"
          placeholder="Enter your email"
          onChange={handleChange}
          name="email"
        />

        <input
          type="text"
          placeholder="Enter your password"
          onChange={handleChange}
          name="password"
        />
        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>

      {error ? (
        <h1>
          Please check your input data, there are errors in validations.
          {errorMessage}
        </h1>
      ) : null}
    </div>
  );
};

export default Form;
