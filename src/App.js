import React, { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar'
// import Counter from './components/Counter';
import TextUtil from './components/textUtil';
import Alert from './components/Alert';
// import About from './components/About';

const App = () => {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState({});

  const showAlert = (message, type)=>{
      setAlert({
        message: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode==="dark"){
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
    } 
    else{
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been Enabled", "success");

    } 
  }
  return (
    <div>
      {/* props passing  to Navbar*/}
      <Navbar title="TextUtils" home="Home" mode={mode} toggleMode={toggleMode} />
      <Alert alert = {alert} />
      {/* <Navbar home="HOME" /> */}
      {/* <Counter /> */}
      <TextUtil showAlert={showAlert} mode={mode}/>
      {/* <About  /> */}
    </div>
  )
}

export default App;
