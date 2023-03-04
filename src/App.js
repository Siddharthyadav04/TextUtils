import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setalert]=useState(null);

  const showAlert=(message,type)=>{
  setalert({
    msg:message,
type:type
  })

  setTimeout(() => {
    setalert(null);
  }, 1500);

  }
  const tooglemode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='black';
      showAlert("Dark mode has been enabled","success")
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")

    }
  }
  return (
   <>
   {/* <Router> */}
   <Navbar title="TextUtils"mode={mode}tooglemode={tooglemode}/>
      <Alert alert = {alert}/>  
      <div className="container my-3">
        {/* <Routes>    */}
        {/* for exact  /user--> component1
        users/home--> Component 2 */}
          {/* <About /> */}
       <TextForm heading="Enter the text to analyze below" onShowAlert={showAlert}/>
      
      </div>

   </>
  );
}

export default App;
