// const apiKey ='';

export const Deezer = {
  getAccessToken(){
    const xhr = new XMLHttpRequest();
    const url ="https://connect.deezer.com/oauth/auth.php?app_id=YOUR_APP_ID&redirect_uri=localHost:3000&perms=manage_library,email";

    xhr.responseType = 'json';
    xhr.onreadyStateChange = function(){
      if(xhr.readyState === XMLHttpRequest.DONE){
        console.log(xhr.response)
        return xhr.response;
      }
    }

    xhr.open('GET', url);
    xhr.send();
  },

  searchDeezer(){
    const xhr = new XMLHttpRequest();
    const url = "https://connect.deezer.com/oauth/auth.php?app_id=YOUR_APP_ID&redirect_uri=localHost:3000&perms=manage_library,email";

    xhr.responseType = 'json';
    xhr.onreadystatechange = function(){
      if(xhr.readyState === XMLHttpRequest.DONE){
        console.log(xhr.response);
        return xhr.response;
      }
    }
  },

  savePlaylist(){
    const xhr = new XMLHttpRequest();
    const url ="https://connect.deezer.com/oauth/auth.php?app_id=YOUR_APP_ID&redirect_uri=localHost:3000&perms=manage_library,email";
    const data = JSON.stringify({id: '200'});

    xhr.responseType = 'json';
    xhr.onreadystatechange = function(){
      if(xhr.readyState === XMLHttpRequest.DONE){
        console.log(xhr.response)
        return xhr.response;
      }
    }

    xhr.open('POST', url);
    xhr.send(data);
  }
}
