//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getPics)

function getPics(){
    let pics = document.querySelector('input').value
    fetch ("https://api.nasa.gov/planetary/apod?api_key=yCSxyJA1zQfPvQv3ZNOBy3r1jWhw1riSTfF71Z38")
    .then(res => res.json()) 
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.date
        document.querySelector('img').src = data.hdurl
        document.querySelector('h3').innerText = data.copyright

    })
    .catch(err =>{
        console.log(`error ${err}`)
});
}