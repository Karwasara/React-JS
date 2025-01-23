import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
// import About from './components/About';


function App() {
    const [mode, setMode] = useState('dark');
   const toggleMode=()=>{
   if(mode === 'dark')
   {
    setMode('light');
    document.body.style.background='white'
   }
   else
   {
    setMode('dark');
    document.body.style.background='grey'
   }
   }

  return (
      <>
      
     <Navbar title="textutils" aboutText="about textutil33" mode={mode} togglemode={toggleMode}/>
     {/* <About className="container my-3"/> */}
     <div className="container my-3">
     <TextForm heading="Enter the text to analyze" mode={mode}/>
     </div>
     </>
  );

  
}

export default App;
