import './App.css'
import queryString from 'query-string'
import React, { useState, useEffect } from 'react'

const App = () => {

  const [userData, setUserData] = useState({})
  const [accesstoken, setAccesstoken] = useState('')
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    let parsed = queryString.parse(window.location.search)
    let accesstoken = parsed.access_token
    if (!accesstoken) {
      return
    }
    setAccesstoken(accesstoken)

    fetch('https://api.spotify.com/v1/me', {
      headers: {'Authorization': 'Bearer ' + accesstoken}
    }).then(response => response.json()
    .then(data => setUserData(data)))

    fetch(`https://api.spotify.com/v1/me/playlists`, {
      headers: {'Authorization': 'Bearer ' + accesstoken}
    }).then(response => response.json()
    .then(data => setPlaylists(data.items)))

  }, [])

  return (
    <div>
      {accesstoken ? (
        <div>
          <h1>Welcome, {userData.display_name}</h1>
          <h2>Playlists</h2>
          <div>
            {playlists.map(x => 
              <p key={x.name}>{x.name}</p>
            )}
          </div>
        </div>
      ) : (
        <button onClick={() => window.location = 'http://localhost:8888/login'}>Login</button>
      )}
    </div>
  );
}

export default App;
