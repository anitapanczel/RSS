function loadCountry() {
    fetch("https://restcountries.com/v3.1/all").then(r => r.json()).then(showCountry);
}

function showCountry(country) {

    for (let j = 0; j < country.length; j++) {

        console.log(country[j].name.common);

        let div = document.createElement("div");
        const name = country[j].name.official;
        div.textContent = name;
        div.setAttribute('ID', 'name');
        document.body.append(div);

        div = document.createElement("div");
        const capital = country[j].capital;
        div.textContent = "Capital: " + capital;
        div.setAttribute('class', 'capital');
        document.body.append(div);

        let img = document.createElement("img");
        const flag = country[j].flags.png;
        img.setAttribute('src', flag);
        img.setAttribute('class', 'flag');
        document.body.append(img);

        div = document.createElement("div");
        div.textContent = "Timezone(s): ";

        for (let i = 0; i < country[j].timezones.length; i++) {

            const tz = country[j].timezones[i];
            div.textContent += ' ' + tz;
            div.setAttribute('class', 'timezone');
            document.body.append(div);
        }

        div = document.createElement("div");
        const continents = country[1].continents[0];
        div.textContent = "Continent: " + continents;
        div.setAttribute('class', 'continents');
        document.body.append(div);
    }
}

window.addEventListener("load", loadCountry);