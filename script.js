

fetch('https://ghibliapi.herokuapp.com/films')
.then(res => res.json())
.then(data => {
    console.log(data);
    for (let d of data){

        let select = document.querySelector("select");
        let newOption = document.createElement("option");
        let { title } = d;
        newOption.textContent = title[0].toUpperCase() + title.slice(1);
        newOption.value = title ;
        select.append(newOption);

    }
})