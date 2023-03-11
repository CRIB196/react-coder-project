import { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  console.log(userData);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.name.length < 5) {
      console.log("nombre no valido");
      return;
    }

    const itIncludes = userData.name.includes("@");

    if (!itIncludes) {
      console.log("Email is not valid");
      return;
    }

    if (!itIncludes) {
      console.log("Email is not valid");
      return;
    }

    const str = userData.password.trim();
    const passwordIsValid = userData.password === str;
    if (!passwordIsValid || userData.password.length < 5) {
      console.log(
        "Invalid password. Please do not leave empty spaces and input more than 5 characters."
      );
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
    </div>
  );
};

export default Form;
