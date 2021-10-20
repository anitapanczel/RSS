function loadCountry() {
    fetch("https://restcountries.com/v3.1/name/Turkey").then(r => r.json()).then(showCountry);
}

function showCountry(country) {
    console.log(country);
    const name = country[0].name.official;
    document.getElementById("name").textContent = name;

    const capital = country[0].capital;
    document.getElementById("capital").innerHTML = capital;

    const flag = country[0].flags.png;
    document.getElementById("flag").setAttribute('src', flag);

    let TZ;

    for (let i = 0; i < country[0].timezones.length; i++) {

        TZ = country[0].timezones[i];
        document.getElementById("timezones").textContent = document.getElementById("timezones").innerText + " " + TZ;

    }

    const continents = country[0].continents[0];
    document.getElementById("continents").textContent = continents;

}

window.addEventListener("load", loadCountry); 