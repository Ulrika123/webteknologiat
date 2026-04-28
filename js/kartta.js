//muuttujat
let myMap;

window.onload = function () {
    let address = "Yliopistonkatu 36";
    let city = "Lappeenranta";

    myMap = document.getElementById('map-frame');
    myMap.src = "https://www.google.com/maps?q=" + address + city + "&output=embed"; 
}

function ShowMap() {
    let address = document.getElementById("searchAddress").value;
    let city = document.getElementById("searchCity").value;

    myMap.src = "https://www.google.com/maps?q=" + address + ", " + city + "&output=embed";
}
