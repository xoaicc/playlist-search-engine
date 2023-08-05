import Track from './Track/Track.js';

export default function Tracklist({list, onClickFunc, icon}) {
    return (
        <>
            {list ? list.map(track => <Track 
                id={track.data.id}
                name={track.data.name}
                artists={track.data.artists.items}
                onClickFunc={onClickFunc}
                icon={icon} />
            ) : ""}
        </>
    );
}