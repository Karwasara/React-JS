// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    const [mode, setMode] = useState('light');
   const toggleMode=()=>{
   if(mode === 'light')
   {
    setMode('dark');
    document.body.style.background='#14376a'
    showAlert("dark mode has been enabled","success")
   }
   else
   {
    setMode('light');
    document.body.style.background='white'
    showAlert("light mode has been enabled","success")
   }
   }
   const [alert,setAlert] = useState("light mode","success");
   const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);

   }

  return (
      <>
            <Router>
                <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} togglemode={toggleMode} />
                <Alert alert={alert} />
                <div className="container my-3">
                    <Routes>
                        <Route path="/about" element={<About mode={mode} />} />
                        <Route
                            path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />}
                        />
                    </Routes> 
                </div>
            </Router> 
        </>
  );

}

export default App;
