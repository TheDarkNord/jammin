let accessToken = '';
let expiresIn = '';
const clientID = '52338a6c67r24458ad65eb04ba54edfb';
const redirect_uri = "http://localhost:3000/";
const getURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_uri}`;
const endpoint = '/v1/search?type=TRACK';

function checkURL(){
  let state = false;
  let location = window.location.href;
  const accessTokenRegex = "/access_token=([^&]*)/";
  const expiryRegex = "/expires_in([^&]*)/";
  let found1 = location.match(JSON.parse(accessTokenRegex));
  let found2 = location.match(JSON.parse(expiryRegex));

  if(found1 !== undefined && found2 !== undefined){
    accessToken = found1;
    expiresIn = found2;
    state = true;
  }

  return state;
}

export const Spotify = {
  // getAccessToken(){
  //   if(accessToken !== ''){
  //     return
  //   } else if(checkURL){
  //     return
  //   } else {
  //     function resetValues(){
  //       window.setTimeout(() => accessToken = '', expiresIn * 1000);
  //       window.history.pushState('Access Token', null, '/');
  //     }
  //     resetValues();
  //
  //     window.location.href = getURL;
  //   }
  // }

  getAccessToken(){
    if(accessToken !== ''){
      return
    } else if(checkURL){
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
          //code to execute with response
          console.log("Response: ", xhr.response);
          return xhr.response;
        }
      };
      xhr.open('GET', getURL);
      xhr.send();
    }
  },

  search(track){
    Spotify.getAccessToken();
    fetch(`https://api.spotify.com${endpoint}&q=${track}`, {
      headers: {Authorization: `Bearer ${accessToken}`}
    }).then(response => {
      if(response.ok){
        return response.json();
      }
      throw new Error('Request failed!');
    }, networkError => console.log(networkError.message)
    ).then(jsonResponse => {
      console.log(jsonResponse);
      const trackURI = jsonResponse.map(track => {
        return {
          trackID: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }
      })
      return trackURI;
    });
  }
}
