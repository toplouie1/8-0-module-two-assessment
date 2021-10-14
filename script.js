fetch('https://ghibliapi.herokuapp.com/films')
.then(res => res.json())
.then(data => {
    console.log(data);
    for (let d of data){
        let select = document.querySelector("select");
        let newOption = document.createElement("option");
        newOption.classList.add(".title_option")
        let { title } = d;
        // newOption.textContent = title[0].toUpperCase() + title.slice(1);
        newOption.textContent = title;
        newOption.value = title ;
        select.append(newOption);
    }

    let select = document.querySelector("select");

    select.addEventListener("change", (e) => {
        let title_main = document.createElement("h3");
        let year_p = document.createElement("p");
        let disc_p = document.createElement("p");
        let display = document.querySelector("#display-info");

        display.append(title_main, year_p , disc_p);
         for (let i= 0; i < data.length; i++ ) {
            let title = data[i].title;
            let description = data[i].description;
            let release_date = data[i].release_date;

            if(select.value === data[i].title){
                title_main.textContent = title;
                disc_p.textContent = description;
                year_p.textContent = release_date ;
            }
            
        }
    })
})