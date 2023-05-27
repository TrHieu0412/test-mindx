import { FaLink } from "react-icons/fa";
import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form/Form";

function App() {
  return (
    <div class="main">
      <div className="title">
        <div className="title-logo">
          <FaLink />
        </div>
        <div className="title-text">SHRTCODE</div>
      </div>
      <Navbar/>
      <div className="title-URL">
        <p>The</p>
        <p class="title-URL-text">privacy-friendly</p>
        <p>URL Shortener</p>
      </div>
      <Form/>
    </div>
  );
}

export default App;
