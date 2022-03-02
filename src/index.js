import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import * as bootstrap from "bootstrap";
import "@popperjs/core";
import "./jokeFacade";
import jokeFacade from "./jokeFacade";

document.getElementById("all-content").style.display = "block";

/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Exercise-1 below */
function listAllJokes() {
  const jokes = jokeFacade.getJokes();
  let jokeList = jokes.map((joke) => `<li>${joke}</li>`);
  const listitemAsStr = jokeList.join("");
  document.getElementById("jokes").innerHTML = listitemAsStr;
}

listAllJokes();

document.getElementById("btnGetJoke").addEventListener("click", (event) => {
  const jokes = jokeFacade.getJokes();
  const id = Math.floor(Math.random() * jokes.length);
  const joke = jokes[id];

  document.getElementById("singleJokeContainer").innerHTML = joke;
});

document.getElementById("btnAddJoke").addEventListener("click", (event) => {
  const text = document.getElementById("txtboxAddJoke").value;
  jokeFacade.addJoke(text);

  document.getElementById("txtboxAddJoke").value = ""; // reset text field
});

/* JS For Exercise-2 below */
document.getElementById("btnGetJoke_2").addEventListener("click", (event) => {
  setInterval(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        let joke = data["value"];
        document.getElementById("singleJokeContainer_2").innerHTML = joke;
        let url = data["url"];
        document.getElementById("jokeUrlContainer").innerHTML = url;
      });
  }, 1000);
});

/* JS For Exercise-3 below */

/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/

function hideAllShowOne(idToShow) {
  document.getElementById("about_html").style = "display:none";
  document.getElementById("ex1_html").style = "display:none";
  document.getElementById("ex2_html").style = "display:none";
  document.getElementById("ex3_html").style = "display:none";
  document.getElementById(idToShow).style = "display:block";
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "ex1":
      hideAllShowOne("ex1_html");
      break;
    case "ex2":
      hideAllShowOne("ex2_html");
      break;
    case "ex3":
      hideAllShowOne("ex3_html");
      break;
    default:
      hideAllShowOne("about_html");
      break;
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");
