import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  return (
      <>
      
     <Navbar title="textutils" aboutText="about textutil33"/>
     {/* <About className="container my-3"/> */}
     <div className="container my-3">
     <TextForm heading="Enter the text to analyze"/>
     </div>
     </>
  );

  
}

export default App;
