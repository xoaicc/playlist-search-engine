import { useState } from "react";
import styles from './Playlist.module.css';
import Tracklist from "../Tracklist/Tracklist";

export default function Playlist({list, stateFunc}) {
    const icon = "-";
    const [playlistName, setPlaylistName] = useState("");
    const [playlist, setPlaylist] = stateFunc;
    
    const handleChange = ({target}) => setPlaylistName(target.value);
    
    const saveToSpotify = async () => {
        // const endPoint = 'https://api.spotify.com/v1/me/tracks/?ids=';
        // await fetch(endPoint, {
        //     method: 'PUT',
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Authorization": "Bearer 51d1d6bfedf14f59a75dd32408d6c6c2"
        //     },
        //     data: {
        //         "ids": []
        //     }
        // });
        setPlaylist([]);
        setPlaylistName("");
    }

    const removeTrack = ({target}) => {
        if (playlist) setPlaylist(playlist.filter(track => track.data.id !== target.id));
    }

    return (
        <>
            <input type='text' className={styles.nameInput} value={playlistName} onChange={handleChange} placeholder="Type new playlist..." />
            <div className={styles.wrapper}>
                <Tracklist list={list} onClickFunc={removeTrack} icon={icon} />
                <button className={styles.saveButton} onClick={saveToSpotify}>Save to Spotify</button>
            </div>
        </>
    );
}