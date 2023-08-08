import css from "./Sign.module.css";
import Title from "../../components/title/Title";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Sign() {
 
  const navigate = useNavigate();
  const [login,setLogin]=useState('')
  const [password,setPassword]=useState('')

  const submit = (e) => {
    e.preventDefault();
    if (login==='admin' && password==='admin'){
      navigate("/Myaccount")
     }else {
      alert('login or password incorrect')
     }
  };
  const handleLogin=(e)=>{
  setLogin(e.target.value)
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value)
    }

  return (
    <div className={css.wrapper}>
      <Title title="Войти" />
      <form onSubmit={submit}>
        <h3>Login</h3>
        <input name="input" type="text" placeholder="Введите ваш логин" value={login} onChange={handleLogin}/>
        <h3>Password</h3>
        <input name="input" type="password" placeholder="Введите пароль" value={password} onChange={handlePassword}/>
        <div>
          <button>Войти</button>
        </div>
      </form>
    </div>
  );
}

export default Sign;
