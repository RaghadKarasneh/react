import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar';
import Banner from "./Components/Banner/Banner"
import Home from './Home'
import SingleMovie from './Components/SingleMovie/SingleMovie';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
       <Banner />
     <Home/>
    <h1>Single movie</h1>
    <SingleMovie />
    </div>
  );
}

export default App;
