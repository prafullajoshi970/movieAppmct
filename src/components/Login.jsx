import "./Login.css"
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Login = () => {
  const history = useNavigate();//to travel on Homepage after succesful Login 


  const [inputvalue, setinputvalue] = useState({
    email: "",
    password: "",
  });
//On Above i have Created usState and store initial object inside it

  console.log(inputvalue);
 //basically we have two input feild here for getting Onchange Data i have created getData function 
  const getdata = (e) => {
    // console.log(e.target.value);
    e.preventDefault();
    //To prevent default Behaviour of the Input

    const { value, name } = e.target;
    // console.log(value,name);

    setinputvalue(() => {
      return {
        ...inputvalue,
        [name]: value,
      };
    });
  };

  //onclick of Login button it will check enterd Email or passWord is correct or Not and also to check multiple cnditions i have created this AddData Function.
  const addData = (e) => {
    e.preventDefault();
//i have use Localstorage to get and matc data which we are used at the time of create Account.
    const getuserArr = localStorage.getItem("user");
    console.log(getuserArr);
//here i have destructuring email and password from inputvalue
//and check the conditions
    const { email, password } = inputvalue;

    if (email === "") {
      alert("email field is requred");
    } else if (!email.includes("@")) {
      alert("plz enter valid email addres");
    } else if (password === "") {
      alert("password field is requred");
    } else if (password.length < 5) {
      alert("password length greater five");
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);//convert Json Data in to parse and adding filter property on them.
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password; //enterd email and password and stored email and password match or not
        });

        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("user login succesfulyy");

          localStorage.setItem("user_login", JSON.stringify(userlogin));

          history("/Home"); //if email and password match then travel on Home page
        }
      }
    }
  };
  return (
    <div className='main-Login'>

      <div className='left-Login'>
     <img className="img"src='data:image/jpeg;base64,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'alt=''></img>
      </div>
      <div className='right-Login'>
        <div ><h1 style={{textAlign:'center'}}>Welcome Back</h1>
       <p style={{textAlign:'center',color:'gray'}}>Signin to your Account</p></div>

       <form type="submit">
          <Box
            sx={{
              width: 350,
              maxWidth: "100%",
            }}
          >
   
            {" "}
            <TextField
            style={{marginLeft:'11vh'}}
            error
             id="filled-error"
             label="Email"
             type={"Email"}
             className="input"
             placeholder={"enter Email-Id"}
             name="Email"
             onChange={getdata}
        />
           
          </Box>
          <Box
            sx={{
              width: 350,
              maxWidth: "100%",
            }}
          ><br/> <br/>
      
            <TextField
             style={{marginLeft:'11vh'}}
             error
              id="filled-error"
              label="Password"
              type={"password"}
              className="input"
              placeholder={"enter Password"}
              name="password"
              onChange={getdata}
            ></TextField>
            <br/> <br/>
          </Box>

          <button  style={{marginLeft:'12vh',marginTop:'5vh'}} type="submit" onClick={addData} variant="outlined">
            {" "}
            Login
          </button>
        </form>
    


<span> <p style={{marginLeft:"10vw"}}>Dont have Account ? </p>
<Link to={"/CreateAccount"} style={{marginLeft:"200px",color:"red"}}>SignUp!</Link></span>

  
       
      </div>
    </div>
  )
}

export default Login