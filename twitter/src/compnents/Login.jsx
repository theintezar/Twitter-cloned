
import { useState } from "react";
import "./login.css";
export default function Login() {
    const [form,setForm] = useState({})

    const handleChange = ({target:{name,value}})=>{
        setForm({
            ...form,
            [name]:value
        })
        console.log(form)
    }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <img style={{marginLeft:"1%",width:"100%",height:"100%"}} src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png" alt="" />
        </div>
        <div className="loginRight">
          <form className="loginBox" >
            <input
              placeholder="Email"
              type="email"
              name="email"
              required
              className="loginInput"
              onChange={handleChange}
            />
            <input
              placeholder="Password"
              type="password"
              name="password"
              required
              minLength="6"
              className="loginInput"
              onChange={handleChange}
            />
            <button onClick={console.log("")}>Login</button>
            <span className="loginForgot">Forgot Password?</span>
              
          </form>
        </div>
      </div>
    </div>
  );
}
