const apiKey ='';
const accessURL ="https://connect.deezer.com/oauth/auth.php?";
//followed by app_id=
const appID = '270422';
//followed by &redirect_uri=
const redirectURL = 'https://localhost:3000';
//followed by &perms=
const perms = 'manage_library';
//followed by .email

const search = '';
const searchURL ="" + search;

const playlistTitle = '';
const playlistURL ="https://api.deezer.com/playlist/" + playlistTitle;

const data = JSON.stringify({id: '200'});

export const Deezer = {
  getAccessToken(){
    return fetch(`https://connect.deezer.com/oauth/auth.php?app_id${appID}&redirect_uri=${redirectURL}&perms=${perms}`).then(response =>{
      if(response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
    }, networkError => console.log(networkError.message)
  ).then(jsonResponse => {
    //code to execute with jsonResponse
    console.log(jsonResponse);
  });
  },

  searchDeezer(title, album, artis){
      return fetch(`https://api.deezer.com/search?q=${title}`).then(response =>{
        if(response.ok) {
          return response.json();
        }
        throw new Error('Request failed!');
      }, networkError => console.log(networkError.message)
    ).then(jsonResponse => {
      //code to execute with jsonResponse
      console.log(jsonResponse);
    });
  },

  savePlaylist(){
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
    //Code to execute with jsonResponse
    console.log(jsonResponse)
  });
  }
}
