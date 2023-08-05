import Tracklist from '../Tracklist/Tracklist.js';
import styles from './SearchResult.module.css';

export default function SearchResult({list, onClickFunc}) {
    const icon = "+";

    return (
        <>
            <h2>Search Results:</h2>
            <div className={styles.wrapper}>
                <Tracklist list={list} onClickFunc={onClickFunc} icon={icon} />
            </div>
        </>
    );
}