import { useState } from "react";

const Form = () => {

  const [userData, setUserData]= useState({name: "", email: "", password:""});


  const handleChange= (e) => {
    setUserData({...userData, name: e.target.value});
  }

  const handleEmailChange = (e) => {
    setUserData({...userData, email: e.target.value});
  };



console.log(userData);

  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="Write your name"
          onChange={handleChange}
          name="name"
        />

        <input
          type="text"
          placeholder="Write your email"
          onChange={handleEmailChange}
          name="email"
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Form;
