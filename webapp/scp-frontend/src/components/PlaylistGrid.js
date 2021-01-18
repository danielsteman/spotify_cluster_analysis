import React from 'react';
import SimpleImageSlider from "react-simple-image-slider"
import './PlaylistGridStyle.css'


const PlaylistGrid = ( props ) => {

    return (
        <div>
            <div>
                <ul className='list'>
                    {props.playlistData.items.map(playlist => 
                        <li key={playlist.name} className='item'> 
                            {/* <img src={playlist.images[0].url} alt='Playlist cover' height='250px' width='250px'/> */}
                            <p>{playlist.name}</p>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default PlaylistGrid;
