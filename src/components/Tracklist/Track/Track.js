import styles from './Track.module.css';

export default function Track({id, name, artists, onClickFunc, icon}) {
    return (
        <div className={styles.wrapper}>
            <div>
                <h3>{name}</h3>
                <p>{artists.length > 1 ? artists.map(artist => artist.profile.name).join(", ") : artists[0].profile.name}</p>
            </div>
            <div id={id} className={styles.icon} onClick={onClickFunc}>{icon}</div>
        </div>
    );
}