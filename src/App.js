import './App.css';
import AppMenu from './components/menu/menu'
import SiteHeader from './components/siteHeader/siteHeader'
import {useState} from 'react'

function App() {

  const [showMenu, setShowMenu] = useState(false)

  function toggleMenu() {
    setShowMenu(!showMenu)
  }

  return (
    <div className="app">
      <SiteHeader toggleMenu={toggleMenu}/>
      <div className="main">
        <AppMenu visible={showMenu} toggleMenu={toggleMenu} content="Hi there"/>
        <div className="main-content">
          <h2>Main Content</h2>
        </div>
      </div>
      
    </div>
  );
}

export default App;
