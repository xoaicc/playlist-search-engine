import { useState } from 'react';
import './App.css';
import * as com from './components/components.js';

function App() {
  let query = "";
  const [resultList, setResultList] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const baseURL = 'https://spotify23.p.rapidapi.com/search/?q=';
  const endPoint = '&type=tracks&offset=0&limit=10&numberOfTopResults=5';

  const callAPI = async url => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '29815a4590msh67ff7bd61c17921p164761jsnc00aa5d61221',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      const object = JSON.parse(result);
      setResultList(object.tracks.items);
    } catch (e) {
      console.error(e);
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    query = document.getElementById('search-text').value;
    query.replace(" ", "%20");
    callAPI(baseURL + query + endPoint);
    query = "";
  };

  const addTrack = ({target}) => {
    for (const track of resultList) {
      if (track.data.id === target.id) {
        for (const trackIn of playlist) {
          if (track.data.id === trackIn.data.id) return null;
        }
        setPlaylist(prevTrack => [...prevTrack, track]);
      };
    }
  };

  const removeTrack = ({target}) => {
    if (playlist) setPlaylist(playlist.filter(track => track.data.id !== target.id));
  }

  return (
    <>
      <header>
        <com.Header />
      </header>
      <main>
        <div id='search-bar' className='container'>
          <com.SearchBar onSubmit={handleSubmit} />
        </div>
        <div className='container'>
          <div className='wrapper'>
            <com.SearchResult list={resultList} onClickFunc={addTrack} />
          </div>
          <div className='wrapper'>
            <com.Playlist list={playlist} onClickFunc={removeTrack} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;