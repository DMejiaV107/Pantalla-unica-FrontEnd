import React,{useState} from 'react';
import '../styles/login/styles.css';

function LoginForm({Login,error}){
 const [details,setDetails]=useState({user:"",password:""});

 const submitLogin=e=>{
  e.preventDefault();
  Login(details);
 }

 return(
  <form onSubmit={submitLogin}>
   <div className="inner-form">
    <h2>Iniciar sesión</h2>
    <div className="form-element">
     <label htmlFor="user">Usuario:</label>
     <input type="text" name="user" id="user" onChange={e=>setDetails({...details,user:e.target.value})} value={details.user}/>
    </div>
    <div className="form-element">
     <label htmlFor="password">Contraseña:</label>
     <input type="password" name="password" id="password" onChange={e=>setDetails({...details,password:e.target.value})} value={details.password}/>
    </div>
    <input type="submit" value="Ingresar"/>
   </div>
  </form>
 )
}

export default LoginForm;