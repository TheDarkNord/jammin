const apiKey ='';
//followed by app_id=
const appID = '';
//followed by &redirect_uri=
const redirectURL = 'https://localhost:3000';
//followed by &perms=
const perms = 'manage_library';
//followed by .email
let accessToken;

const search = '';
const searchURL ="" + search;

const playlistTitle = '';
const playlistURL ="https://api.deezer.com/playlist/" + playlistTitle;

const data = JSON.stringify({id: '200'});

export const Deezer = {
  getAccessToken(){
    return fetch(`https://connect.deezer.com/oauth/auth.php?app_id${appID}&redirect_uri=${redirectURL}&perms=${perms}.email&key=${apiKey}`).then(response =>{
      if(response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
    }, networkError => console.log(networkError.message)
  ).then(jsonResponse => {
    accessToken = jsonResponse;
    console.log(jsonResponse);
  });
  },

  searchDeezer(title) {
      return fetch(`https://api.deezer.com/search?q=track:${title}`).then(response =>{
        if(response.ok) {
          return response.json();
        }
        throw new Error('Request failed!');
      }, networkError => console.log(networkError.message)
    ).then(jsonResponse => {
      if(jsonResponse.title){
        return jsonResponse.title.map(playlistTrack => ({
      //   id: track.id,
      //   title: track.title,
      //   link: track.link,
      //   artist: track.artist,
      //   album: track.albume
      }));
      console.log(jsonResponse);
      }
    }
  )
},

  savePlaylist(playlistName, tracks){
    return fetch('playlistURL', {
      method: 'POST',
      headers: {'Content-type': "application/json"},
      body: JSON.stringify({playlistTitle: playlistTitle})
    }).then(response => {
      if (response.ok) {
        return response.json();
      } throw new Error('Request failed!');
    }, networkError => console.log(networkError.message)
  ).then(jsonResponse => {
    // return playlist/title= ${playlistName},
    // tracks: {
      // id: ${track.id},
      // title: ${track.title},
      // link: ${track.link},
      // artist: ${track.artist},
      // album: ${track.album}
    // }
    console.log(jsonResponse)
  });
  }
}
