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

  const handleSubmit=(e) => {

    e.preventDefault();

    if (userData.name.length <5){
        console.log("nombre no valido")
        return
    }

    const itIncludes= userData.name.includes("@");

    if (!itIncludes){
        console.log("Email is not valid")
        return
    }

    //on submit to do

    console.log(userData);


  }



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
        <button type="submit" onSubmit={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
