import './App.css'
import Countdown from './components/Countdown.jsx';
import Gallery from './components/Gallery.jsx';
import Header from "./components/Header.jsx"
import Invitation from './components/invitation.jsx';

function App() {
  return (
    <>
      <Header></Header>
      <Countdown></Countdown>
      <Invitation></Invitation>
      <Gallery></Gallery>
    </>
  );
}

export default App;
