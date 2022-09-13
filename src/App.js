
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
 import Textform from "./Components/Textform";
import React,{useState} from 'react'
import Alert from "./Components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  const[alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const [mode, setMode] = useState('light')

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been Enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been Enabled","success")
    }
  
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="Textutils" about="About us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      {/* <Routes> */}
          {/* <Route path="/about">
            <About />
          </Route> */}
          {/* <Route path="/about" element={<About/>}/> */}
          {/* <Route path="/">
          <Textform heading="Enter the text to Analyze" mode={mode} showAlert={showAlert} />
          </Route> */}
          {/* <Route path="/" element={ */}
          <Textform heading="Enter the text to Analyze" mode={mode} showAlert={showAlert}/>
           {/* }/> */}
        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
