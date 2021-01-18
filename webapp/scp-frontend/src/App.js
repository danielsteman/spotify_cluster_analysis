import './App.css'
import queryString from 'query-string'
import React, { useState, useEffect } from 'react'
// import LoginScreen from './components/LoginScreen'
import LoginScreen from './components/LoginScreenTest'
import PlaylistGrid from './components/PlaylistGrid'

const App = () => {

  const [userData, setUserData] = useState({})
  const [accesstoken, setAccesstoken] = useState('')
  const [playlists, setPlaylists] = useState({})
  const [songs, setSongs] = useState({})

  useEffect(() => {

    let parsed = queryString.parse(window.location.search)
    let accesstoken = parsed.access_token
    if (!accesstoken) {
      return
    }
    setAccesstoken(accesstoken)

    fetch('https://api.spotify.com/v1/me', {
      headers: {'Authorization': 'Bearer ' + accesstoken}
    }).then(response => response.json())
    .then(data => setUserData(data))

    fetch(`https://api.spotify.com/v1/me/playlists`, {
      headers: {'Authorization': 'Bearer ' + accesstoken}
    }).then(response => response.json())
    .then(playlistData => {

      // Log some data of playlists
      console.log('playlist data:')
      console.log(playlistData)

      setPlaylists(playlistData)
      playlistData.items.map(playlist => {
        return fetch(playlist.href, {
          headers: {'Authorization': 'Bearer ' + accesstoken}
        }).then(response => response.json())
        .then(data => {

          // Log data of songs within each playlist
          console.log('playlist song data:')
          console.log(data)

          setSongs(data)
        })
      })
    })

  }, [])

  return(
    <div>
      {accesstoken ? (
        <div>
          {playlists && playlists.items && (
            <PlaylistGrid playlistData={playlists} user={userData}/>
          )}
        </div>
      ) : (
        <LoginScreen/>
      )}
    </div>
  );
}

export default App;
