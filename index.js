let dropdown = document.querySelector(".breed");
let selection = document.querySelector(".selection");

async function fetchData() {
    let response = await fetch("https://dog.ceo/api/breeds/list/all");
    let data = await response.json();
createBreedList(data.message);
}

fetchData();

function createBreedList(breedList) {
dropdown.innerHTML = `        <h1 class="title">Infinite dog breed slideshow</h1>
<select onchange="loadByBreed(this.value)">
<option>Choose a dog breed!</option>
${Object.keys(breedList).map(function (breed) {
return `<option>${breed}</option>`
}).join("")}
</select>`
}


async function loadByBreed(breed) {
if(breed != "Choose a dog breed!") {
let secondResponse = await fetch("https://dog.ceo/api/breed/${`breed`}/images");
let secondData = await secondResponse.json();
}
}

