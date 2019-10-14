let accessToken = '';
let expiresIn = '';
const clientID = '52338a6c67e24458ad65eb04ba54edfb';
const redirect_uri = "http://localhost:3000/";
const getURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_uri}`;
const endpoint = '/v1/search?type=track';

export const Spotify = {
  getAccessToken(){
    if(accessToken !== ''){
      return
    } else if(Spotify.checkURL()){
      return
    } else {
      function resetValues(){
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
      }
      resetValues();

      const xhr = new XMLHttpRequest();
      xhr.response_type = 'json';
      xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE){
          let location = window.location.href;
          const accessTokenRegex = "/access_token=([^&]*)/";
          const expiryRegex = "/expires_in([^&]*)/";
          let found1 = location.match(accessTokenRegex);
          let found2 = location.match(expiryRegex);

          if(found1 !== null && found2 !== null){
            accessToken = found1;
            expiresIn = found2;
          }
          return xhr.response;
        }
      };
      xhr.open('GET', getURL);
      xhr.send();

      window.location = getURL;
    }
  },

  checkURL(){
    let state = false;
    let location = window.location.href;
    let found1 = location.match(/access_token=([^&]*)/);
    let found2 = location.match(/expires_in([^&]*)/);

    if(found1 !== null && found2 !== null){
      accessToken = found1;
      expiresIn = found2;
      state = true;
    }

    return state;
  },

  search(track){
    Spotify.getAccessToken();
    let finalList = [];

    async function trackList() {
      try {
        const response = await fetch(`https://api.spotify.com${endpoint}&q=${track}`, {
          method: 'GET',
          headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${accessToken[1]}`
          }
        });
        if(response.ok){
          const jsonResponse = await response.json();
          let tracks = jsonResponse.tracks.items.map(track => {
            return {
              trackID: track.id,
              title: track.name,
              artist: track.artists[0].name,
              album: track.album.name,
              uri: track.uri
            }
          });
          console.log("Here is the mapped JSON: ", tracks);
          return tracks;
        }
        throw new Error('Request Failed');
      } catch (error){
        console.log(error);
      }
    }
    return trackList();
  }
}
