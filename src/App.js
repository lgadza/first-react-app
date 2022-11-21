import logo from "./logo.svg";
import "./App.css";
import "./components/react.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React</h1>
        <div id="bigbox">
          <div class="nature image">
            <ImageComponent
              image="https://img.xcitefun.net/users/2014/07/361484,xcitefun-nature-color-9.jpg"
              description="nature"
            />
            <ButtonComponent label="Calm Water" />
          </div>
          <div class="eagle image">
            <ImageComponent
              image="https://th.bing.com/th/id/OIP.iI9difILTiHvJ8Vv7W7G6gHaE6?pid=ImgDet&rs=1"
              alt="Eagle"
            />
            <ButtonComponent label="Bold Eagle" />
          </div>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          by Louis Gadza
        </a>
      </header>
    </div>
  );
}

export default App;
