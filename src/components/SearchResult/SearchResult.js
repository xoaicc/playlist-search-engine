import Tracklist from '../Tracklist/Tracklist.js';
import styles from './SearchResult.module.css';

export default function SearchResult({list, stateFunc}) {
    const icon = "+";

    const [resultList, playlist, setPlaylist] = stateFunc;
    
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

    return (
        <>
            <h2>Search Results:</h2>
            <div className={styles.wrapper}>
                <Tracklist list={list} onClickFunc={addTrack} icon={icon} />
            </div>
        </>
    );
}