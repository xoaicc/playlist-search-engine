import { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar({setResultList}) {
    const [searchText, setSearchText] = useState("");
    const endPoint = 'https://spotify23.p.rapidapi.com/search/?q=';
    const endPointAfter = '&type=tracks&offset=0&limit=15&numberOfTopResults=5';

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
        const query = searchText.replace(" ", "%20");
        callAPI(endPoint + query + endPointAfter);
        setSearchText("");
    };

    const handleChange = ({target}) => setSearchText(target.value);
  
    return (
        <form id='search-form' className={styles.searchBar} onSubmit={handleSubmit}>
            <label htmlFor='search-text'></label>
            <input className={styles.searchInput} type='text' value={searchText} onChange={handleChange} placeholder='Type song name...' />
            <input className={styles.searchButton} type='submit' value='Search' />
        </form>
    );
}