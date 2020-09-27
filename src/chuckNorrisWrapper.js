
const URL = "https://api.chucknorris.io/jokes/random";

function fetchJoke(){
  return fetch(URL)
     .then(res =>res.json()
     .then(data => {
       return {joke:data.value}
      })
  )
}

export default fetchJoke;