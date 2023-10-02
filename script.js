const getButton = document.querySelector("button");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political&type=single";
let realjoke;
let apiJokes = () => {
    fetch(url).then(data => data.json()).then(item => console.log(document.getElementsByTagName("p")[0].innerText = item.joke))
    .then(console.log("Thanks"))
    .then(console.log("workesd"))
    .then(console.log("verygood"));
}
apiJokes();
getButton.addEventListener("click" , apiJokes);
// console.log(getButton.innerHTML);
