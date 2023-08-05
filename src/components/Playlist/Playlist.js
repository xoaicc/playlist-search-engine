import { useState } from "react";
import styles from './Playlist.module.css';
import Tracklist from "../Tracklist/Tracklist";

export default function Playlist({list, onClickFunc}) {
    const icon = "-";
    const [playlistName, setPlaylistName] = useState("");
    const handleChange = ({target}) => setPlaylistName(target.value);

    return (
        <>
            <input type='text' className={styles.nameInput} value={playlistName} onChange={handleChange} />
            <div className={styles.wrapper}>
                <Tracklist list={list} onClickFunc={onClickFunc} icon={icon} />
            </div>
        </>
    );
}