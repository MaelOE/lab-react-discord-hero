// src/App.jsx
import './App.css';
import discordBackground from './assets/discord-background.png';
import discordLogo from './assets/discord-logo.png';  
import menuIcon from './assets/menu-icon.png'

function App() {
  return (
    <div className="App">
      <div id="menuContainer">
      <img src={discordLogo} width="200" alt="logo"/>
      </div>
      <div id="logoContainer">
            <img src={menuIcon} width="50" alt="logo"/>
      </div>
     <header id="main header"> 
    <h1>IMAGINE <br/> A PLACE...</h1>
    </header>
    <main>
      <div id="bgimg"> 
      <img src={discordBackground} width="500" alt="background"/>
    </div>
    <p>
    ...where you can belong to a school club, a gaming group, or  <br/>
     worldwide art community. Where just you and handful of <br/> 
     friends can spend time together. 
    A place that makes it easy to <br/> talk every day and hang out more often. 
    </p>
    <br/>
    <div className="button-stack"> 
    <button>Download for Mac</button>
    <br/>
    <button> Open Discord in your browser </button>
    </div>
    </main>


      
    </div>
  );
}

export default App;