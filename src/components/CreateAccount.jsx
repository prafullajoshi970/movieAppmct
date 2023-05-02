import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateAccount.css";

function CreateAccount() {
  const history = useNavigate(); //if submit form details then we should travel on Login page

  const [inputvalue, setinputvalue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);
  console.log(setData);
  // console.log(inputvalue);

  //basically we have to add input feild here for getting Onchange Data i have created getData function
  const getdata = (e) => {
    // console.log(e.target.value);
    e.preventDefault();

    const { value, name } = e.target;
    // console.log(value,name);

    setinputvalue(() => {
      return {
        ...inputvalue,
        [name]: value,
      };
    });
  };
  //onClick of Submit button we should store all input data inside local storage and also go to Login Page for that i have created getData function.

  const addData = (e) => {
    e.preventDefault();

    const { name, email, password } = inputvalue;

    if (name === "") {
      alert(" name field is requred!");
    } else if (email === "") {
      alert("email field is requred");
    } else if (!email.includes("@")) {
      alert("plz enter valid email addres");
    } else if (password === "") {
      alert("password field is requred");
    } else if (password.length < 5) {
      alert("password length greater five");
    } else {
      console.log("data added succesfully");
      history("/");
      localStorage.setItem("user", JSON.stringify([...data, inputvalue]));
    }
  };

  return (
    <div className="MainLogin">
      <div className="Left_Login">
        <h1>Welcome To Create Account page</h1>
        <h3>fill all Details Below to Create Account</h3>
        <form type="submit">
          <lable>Name</lable><br/>
          <input className="input11"
            Placeholder="enter Name"
            name="name"
            onChange={getdata}
          ></input><br/>

          <lable>Email </lable><br/>
          <input
          className="input11"
            fullWidth
            label="Email"
            type="email"
            Placeholder="enter email id"
            name="email"
            onChange={getdata}
          ></input><br/>
          <lable>Password</lable><br/>
          <input
          className="input11"
            type="password"
            Placeholder="enter password"
            name="password"
            onChange={getdata}
          ></input><br/><br/>

          <button className="createbtn"  type="submit" onClick={addData} variant="outlined">
       
            Submit Details
          </button>
        </form>
        <p className="para">
          Already Have Account? <Link to={"/"} style={{textDecoration:"none",color:'yellowgreen'}}> SignUp</Link>
        </p>
      </div>
    </div>
  );
}

export default CreateAccount;
