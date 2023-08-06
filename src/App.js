import { useState } from 'react';
import './App.css';
import * as com from './components/components.js';

function App() {
  const [resultList, setResultList] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  window.onscroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector('header').classList.add('header-down');
    } else {
      document.querySelector('header').classList.remove('header-down');
    }
  };

  return (
    <>
      <header>
        <com.Header />
      </header>
      <main>
        <div id='search-bar' className='container'>
          <com.SearchBar setResultList={setResultList} />
        </div>
        <div id='content' className='container'>
          <div className='wrapper'>
            <com.SearchResult list={resultList} stateFunc={[resultList, playlist, setPlaylist]} />
          </div>
          <div className='wrapper'>
            <com.Playlist list={playlist} stateFunc={[playlist, setPlaylist]} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;