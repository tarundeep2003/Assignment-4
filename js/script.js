let cityresult = document.getElementById("result");
let bttn = document.getElementById("search-btn");
let watherdgs = document.getElementById("city");


let getcityWa = () => {
  let citVal = watherdgs.value;
  
  if (citVal.length == 0) {
    cityresult.innerHTML = `<h3 class="msg"> city name</h3>`;
  }

  else {
    
let url = `https://api.openweathermap.org/data/2.5/weather?q=${citVal}&appid=${Watherkey}&units=metric`;
    
    watherdgs.value = "";
    fetch(url)
      .then((responce) => responce.json())
      
      .then((data) => {
        console.log(data);
        console.log(data.weather[0].icon);
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        console.log(data.name);
        console.log(data.main.temp_min);
        console.log(data.main.temp_max);
        cityresult.innerHTML = `
        <h2>${data.name}</h2>
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="desc">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp} &#176;</h1>
        <div class="temp-container">
            <div>
                <h4 class="title">main</h4>
                <h4 class="temp">${data.main.temp_min}&#176;</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data.main.temp_max}&#176;</h4>
            </div>
        </div>
        `;
      })
      
      .catch(() => {
        cityresult.innerHTML = `<h3 class="msg">Please Enter the City </h3>`;
      });
  }
};
bttn.addEventListener("click", getcityWa);

window.addEventListener("load", getcityWa);