import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import "./assets/css/general.css"
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost'
import FooterPage from './components/FooterPage'
import Post from './components/Post'
import { faBars, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Comments from './components/Comments';

function App() {
  const [visible, setVisible] = useState(false)
  const open = () => setVisible(!visible)
  return (
    <div className="App">
      <Sidebar close={open} visible={visible}>
        <Navbar closeTester={visible} button={<FontAwesomeIcon className="open-button" onClick={() => open()} icon={faBars} />} />
        <div className='main-container'>
          <CreatePost />
        </div>
        <div>
          <Post/>
        </div>
      </Sidebar>
      <div>
        <FooterPage />
      </div>
    </div>
  );
}
export default App;