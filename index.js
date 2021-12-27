let dropdown = document.querySelector(".breed");
let selection = document.querySelector(".selection");
let image = document.querySelector(".image-container");

let currentPhoto = 0;
let timer;
async function fetchData() {
    try {
        let response = await fetch("https://dog.ceo/api/breeds/list/all");
        let data = await response.json();
    createBreedList(data.message);
    } catch {
        alert("There was a problem with the API!");
    }

}

fetchData();

function createBreedList(breedList) {
dropdown.innerHTML = `<h1 class="title">Infinite dog breed slideshow</h1>
<select onchange="loadByBreed(this.value)">
<option>Choose a dog breed!</option>
${Object.keys(breedList).map(function (breed) {
return `<option>${breed}</option>`
}).join("")}
</select>`
}


async function loadByBreed(breed) {
    try {
if(breed != "Choose a dog breed!") {
let secondResponse = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
let secondData = await secondResponse.json();
createSlideshow(secondData.message); 
}
} catch {
    alert("There was a problem with the API!")
}
}


function createSlideshow(images) {
    clearInterval(timer);
    currentPhoto = 0;

image.innerHTML = `<img src="${images[currentPhoto]}" alt="dog-photo">`
timer = setInterval(function nextSlide() {
    if (currentPhoto + 1 == images.length){
        currentPhoto = 0;
    } else {
    currentPhoto++;
}
    image.innerHTML = `<img src="${images[currentPhoto]}" alt="dog-photo">`
},3000);
}


