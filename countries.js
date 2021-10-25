function loadCountry() {
    fetch("https://restcountries.com/v3.1/all").then(r => r.json()).then(showCountry);
}

function showCountry(country) {


    for (let j = 0; j < country.length; j++) {

        let div = document.createElement("div");
        div.setAttribute('ID', 'column' + j);
        div.setAttribute('class', 'col-12 col-md-6 col-lg-3');
        document.getElementById("row").appendChild(div);

        console.log(country[j].name.common);

        div = document.createElement("div");
        const name = country[j].name.official;
        div.textContent = name;
        div.setAttribute('class', 'name');
        document.getElementById("column" + j).appendChild(div);

        div = document.createElement("div");
        const capital = country[j].capital;
        div.textContent = "Capital: " + capital;
        div.setAttribute('class', 'capital');
        document.getElementById("column" + j).appendChild(div);

        let img = document.createElement("img");
        const flag = country[j].flags.png;
        img.setAttribute('src', flag);
        img.setAttribute('class', 'flag');
        document.getElementById("column" + j).appendChild(img);

        div = document.createElement("div");
        div.textContent = "Timezone(s): ";

        for (let i = 0; i < country[j].timezones.length; i++) {

            const tz = country[j].timezones[i];
            div.textContent += ' ' + tz;
            div.setAttribute('class', 'timezone');
            document.getElementById("column" + j).appendChild(div);
        }

        div = document.createElement("div");
        const continents = country[1].continents[0];
        div.textContent = "Continent: " + continents;
        div.setAttribute('class', 'continents');
        document.getElementById("column" + j).appendChild(div);
    }
}

window.addEventListener("load", loadCountry);