import React from 'react';
import './PlaylistGridStyle.css'


const PlaylistGrid = ( props ) => {

    return (
        <div>
            <div className='parent'>
                <h1 className='playlistGridHeader'>
                    {props.user.display_name}'s playlists
                </h1>
                <ul className='list'>
                    {props.playlistData.items.map(playlist => 
                        <li key={playlist.name} className='item'> 
                            <img src={playlist.images[0].url} alt='Playlist cover' height='250px' width='250px'/>
                            <div className='description'>{playlist.name}</div>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default PlaylistGrid;
