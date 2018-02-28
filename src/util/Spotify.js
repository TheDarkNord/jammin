const apiKey ='';
const appID = '';

export const Spotify = {
  searchSpotify(title) {
    var track = title;

    //Codecademy method for asynchronous requests.
    const search = async function(){
      try{
        let response = await searchSpotify(track).then(function(result){
          return result
        });
        if(response.ok){
          let jsonResponse = await response.json();
          console.log(jsonResponse);
        }
      } catch(error){
        console.log(error);
      }
    }
    search(title);
},

  savePlaylist(playlistName, tracks){

    //Codecademy method for asynchronous POST requests.
    async function saveList(name, title){
      const name = playlistName;
      const title = tracks;
      const urlWithKey = url + '?key=' + apiKey + '?appID=' + appID;
      try{
        let response = await fetch(urlWithKey, {
          method: 'POST',
          body: JSON.stringify({playlistName: name}, {trackURI: title}),
          headers: {"Content-type": "application/json"}
        });
        if(response.ok){
          let jsonResponse = await response.json();
          return jsonResponse;
        }
      } catch(error){
        console.log(error)
      }
    }

    saveList(playlistName, tracks);
  }
}
