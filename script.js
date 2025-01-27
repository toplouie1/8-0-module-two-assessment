fetch('https://ghibliapi.herokuapp.com/films')
.then(res => res.json())
.then(data => {
    for (let d of data){
        let select = document.querySelector("select");
        let newOption = document.createElement("option");
        newOption.classList.add(".title_option")
        let { title } = d;
        newOption.textContent = title;
        newOption.value = title ;
        select.append(newOption);
    }
    let select = document.querySelector("select");
    let title_main = document.createElement("h3");
    let year_p = document.createElement("p");
    let disc_p = document.createElement("p");

    // changing the description based on which title it has been clicked.
    select.addEventListener("change", (e) => {
        let display = document.querySelector("#display-info");
        display.append(title_main, year_p , disc_p);
         for (let i= 0; i < data.length; i++ ) {
            if(select.value === data[i].title){
                title_main.textContent = data[i].title;
                disc_p.textContent = data[i].description;
                year_p.textContent = data[i].release_date;
            }
        }
    })
    
    //creating the review format
    let form = document.querySelector("form");
   form.addEventListener("submit", (e) => {
    let titles = document.querySelector('#selected_title').value;
    let select_input = document.querySelector("#movie_select").value;
    e.preventDefault();
    document.submit_form.reset();

    let ul = document.querySelector("ul");
    let li = document.createElement("li");

    li.innerHTML = `<b>${select_input}:</b><b><span>${titles}</span></b>`
    ul.append(li);
   } )
})
.catch(err => {
    console.log(err)
});