// import logo from './logo.svg';
// import './App.css'
import './styles/style.css'
// import Header from './components/Header';
import ProfTitle from './components/ProfTitle';
import Headlike from './components/Headlike'
import { Rest } from './components/Rest';


function App() {
  return (
    <div className="App">
      <Headlike />
      <ProfTitle />
      <Rest />
    </div>
  );
}

export default App;
