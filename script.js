

fetch('https://ghibliapi.herokuapp.com/films')
.then(res => res.json())
.then(data => {
    console.log(data);
})