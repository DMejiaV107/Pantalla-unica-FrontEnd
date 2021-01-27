import React from 'react';
import {useHistory} from 'react-router-dom';
import '../styles/header/styles.css';
import logoAfirme from '../assets/login/afirme-logo.png';
import logoutImage from '../assets/header/logout.png';
import profileImage from '../assets/header/profile.png';

function Header({Logout,user}){
 let history=useHistory();
 
 const handleLogout=e=>{
  e.preventDefault();
  history.push('/');
  Logout();
 }

 return(
  <div className='header'>
   <div className="logo">
    <img src={logoAfirme} alt="logo-afirme"/>
   </div>
   {
    (user)?
    ( 
     <div className="info">
      <div className="user-info">
       <h2>¡Bienvenido (a)! {user.user}</h2>
       <h3>Último acceso: {user.date}</h3>
      </div>
      <div className="buttons">
       <img src={profileImage} alt="Imagen de perfil"/>
       <img src={logoutImage} alt="Logout" onClick={handleLogout}/>
      </div>
     </div>
    ):
    (<></>)
   }
  </div>
 )
}

export default Header;