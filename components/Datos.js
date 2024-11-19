import { useState } from 'react';


export default function Datos() {
  const [Correo, setCorreo] = useState("");
  const [Usuario, setUsuario] = useState("");
  const [Password, setPassword] = useState("");
  const [TextAprob, setTextAprob] = useState('Bienvenido.');
  
  const regCorreo = new RegExp('^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$')
  const regUsuario = new RegExp('^[a-zA-Z]{1,}[a-zA-Z0-9_]{3,}$');
  const regPassword = new RegExp('^[a-zA-Z0-9\*\-\.\+\#\$_]{8,}$');

  function Validar(){
    if (Correo == '' || !regCorreo.test(Correo)) {
      setTextAprob('Correo Invalido');
      return ;
    }
    if (Usuario == '' || !regUsuario.test(Usuario)) {
      setTextAprob('Usuario Invalido');
      return ;
    }
    if (Password == '' || !regPassword.test(Password)) {
      setTextAprob('Contraseña muy corta');
      return ;
    }
    setTextAprob('Todo bien\nenviando peticion');
    
    return true; // para que no se ejecute aun

    fetch('http://127.0.0.1/Proyecto-UPTAEB-T2/api_login', {
      method: 'POST',
      headers: {
        Accept: 'application/json','Content-Type': 'application/json',
      },
      body: JSON.stringify({
        correo: 'nose@gmail.com',
        password: 'aquiyanose',
      }),
    });
  }
  return [setCorreo, setUsuario, setPassword , TextAprob, Validar];
}