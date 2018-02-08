const apiKey ='';

const Deezer = {
  getAccessToken(){
    return fetch('https://connect.deezer.com/oauth/auth.php?app_id=YOUR_APP_ID&redirect_uri=localHost:3000&perms=manage_library,email', {
      headers: `Bearer ${apiKey}`
    }
  }).then(response => {
    return response.json();
  }).then(jsonResponse => {
    if(jsonResponse.trackList){
      return jsonResponse.trackList.map(tracks => ({
        id: tracks.id,
        name: tracks.name,
        album: tracks.album,
        artist: tracks.artist
      }));
    }
  });
}
export default Deezer;
