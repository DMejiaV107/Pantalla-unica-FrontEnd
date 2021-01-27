import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route,Link, useHistory} from 'react-router-dom';
import LoginForm from './components/Login';
import Header from './components/Header';
import Saldo from './components/Saldo';
import Bloqueo from './components/Bloqueo';
import Estadisticas from './components/Estadisticas';
import Footer from './components/Footer';
import{
  login
} from './routes/routes';

function App(){
  const [user,setUser]=useState({user:"",date:""});

  useEffect(()=>{
    setUser({
      user:sessionStorage.getItem('user'),date:sessionStorage.getItem('date')
    });
  },[]);

  const Login=(details)=>{
    login(details)
    .then((res)=>{
      if(res===200) {
        let loginDate=getDate();
        setUser({user:details.user,date:loginDate});
        sessionStorage.setItem('user',details.user);
        sessionStorage.setItem('date',loginDate);
      }
      else alert("Favor de revisar sus credenciales.")
    })
    .catch(()=>{
    })
  }

  const Logout=()=>{
    console.log("Logged out");
    setUser({user:"",date:""});
    sessionStorage.clear();
  }

  if(!user.user) return(
    <div className="login-screen">
      <Header/>
      <div className='login-content'>
        <LoginForm Login={Login} error/>
      </div>
      <Footer/>
    </div>
  )

  return (
    <Router>
      <Header user={user} Logout={Logout}/>
      <div className="main-content">  
        <nav>
          <Link to='/saldo'>Saldo</Link>
          <br/>
          <Link to='/bloqueo'>Bloqueo</Link>
          <br/>
          <Link to='/movimientos'>Movimientos</Link>
          <br/>
          <Link to='/cuenta'>Cuenta</Link>
          <br/>
          <Link to='/estadisticas'>Estadisticas</Link>
        </nav>
        <main>
          <Switch>
            <Route path="/saldo">
              <Saldo/>
            </Route>
            <Route path="/bloqueo">
              <Bloqueo/>
            </Route>
            <Route path="/movimientos">
              <Saldo/>
            </Route>
            <Route path="/cuenta">
              <Saldo/>
            </Route>
            <Route path="/estadisticas">
              <Estadisticas/>
            </Route>
          </Switch>
        </main>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;


function getDate(){
  let date_ob=new Date();
  let date=("0"+date_ob.getDate()).slice(-2);
  let month=("0"+(date_ob.getMonth()+1)).slice(-2);
  let year=date_ob.getFullYear();
  let hours=date_ob.getHours();
  let minutes=date_ob.getMinutes();
  return year+"-"+month+"-"+date+" "+hours+":"+minutes;
}
