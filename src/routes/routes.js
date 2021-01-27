import {backendPort} from '../config';
const base_url='http://localhost:'+backendPort;

export function login(details){
 return fetch(`${base_url}/login`,{
  method: 'POST',
  body: JSON.stringify(details),
  headers:{
   'Content-Type': 'application/json'
  }
 }).then((res)=>res.status);
}
