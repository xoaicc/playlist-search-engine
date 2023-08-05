import styles from './SearchBar.module.css';

export default function SearchBar({onSubmit}) {
    return (
        <form id='search-form' className={styles.searchBar} onSubmit={onSubmit}>
            <label htmlFor='search-text'></label>
            <input id='search-text' className={styles.searchInput} type='text' placeholder='Type song name...' />
            <input className={styles.searchButton} type='submit' value='Search' />
        </form>
    );
}