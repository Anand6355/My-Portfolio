
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/navbar'; // Updated import statement
import Header from './components/header';
function App() {
  return (
    <>
    <canvas id="banner_canvas" className="transparent_effect" width="1233" height="601"></canvas>
    <Navbar/>
    <Header/>
    </>
    
  );
}

export default App;
