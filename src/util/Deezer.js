const apiKey ='0ef14a2cc1c2c6f1aaf66eb02d181aa8';
let code;
const appID = '';
const redirectURL = 'https://localhost:3000';
const perms = 'manage_library';

let accessToken;

const search = '';
const searchURL ="" + search;

const playlistTitle = '';
const playlistURL ="https://api.deezer.com/playlist/" + playlistTitle;

const data = JSON.stringify({id: '200'});

export const Deezer = {
  searchDeezer(title) {
    // var Deezer = require('deezer-node-api');
    // var dz = new Deezer();
    // var track = title;
    // console.log(title);

    //Codecademy method for asynchronous requests, combined with node plugin. returns undifined

    // const search = async function(){
    //   try{
    //     let response = await dz.findTracks(track).then(function(result){
    //       return result
    //     });
    //     if(response.ok){
    //       let jsonResponse = await response.json();
    //       console.log(jsonResponse);
    //     }
    //   } catch(error){
    //     console.log(error);
    //   }
    // }
    // console.log(search());


    //node plugin request method

    // return dz.findTracks(title).then(function(result){
    // console.log(result);
    // return result;
    // });

},

  savePlaylist(playlistName, tracks){
  }
}
