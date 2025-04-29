import "./App.css";
import AccountInfo from "./components/AccountInfo.jsx";
import Countdown from "./components/Countdown.jsx";
import Gallery from "./components/Gallery.jsx";
import Guestbook from "./components/Guestbook.jsx";
import Header from "./components/Header.jsx";
import Invitation from "./components/invitation.jsx";

function App() {
  return (
    <div>
      <Header/>
      <Countdown/>
      <Invitation/>
      <Gallery/>
      <Guestbook/>
      <AccountInfo/>
    </div>
  );
}

export default App;
