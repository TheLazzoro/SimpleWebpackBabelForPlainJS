const URL = "http://165.227.128.191:8081/movie/api/movie-cors";


function getMovieFromID(id){
  return fetch(URL+"/"+id).then(res =>res.json() )
}

function getMovies(){
  return fetch(URL+"/all").then(res =>res.json() )
}

function addMovie(movie){
  let options = makeOptions("POST",movie)
  fetch(URL+"/add",options);
  return fetch(URL+"/all").then(res =>res.json() )
}


/* 
  Utility methods explained in this document
  https://docs.google.com/document/d/1hF9P65v_AJKCjol_gFkm3oZ1eVTuOKc15V6pcb3iFa8/edit?usp=sharing
*/
function makeOptions(method, body) {
  var opts =  {
    method: method,
    headers: {
      "Content-type": "application/json",
      'Accept': 'application/json',
    }
  }
  if(body){
    opts.body = JSON.stringify(body);
  }
  return opts;
 }

 function handleHttpErrors(res){
  if(!res.ok){
    return Promise.reject({status: res.status, fullError: res.json() })
  }
  return res.json();
 }
 
const movieFacade = {
  getMovieFromID : getMovieFromID,
  getMovies
}

export default movieFacade;