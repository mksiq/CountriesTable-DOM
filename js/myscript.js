// All you JavaScript code for assignment 4 should be in this file

var table;
var subtitle;
var newBody = document.createElement("tbody");
newBody.id = "tableBody";

window.addEventListener("load", loadJavaScript, false);

function loadJavaScript() {
    subtitle = document.getElementById("subtitle");
    
    // <a> Buttons
    var countryListButton = document.getElementById("menu_1");
    var populationOver100k = document.getElementById("menu_21");
    var population1Mto2M = document.getElementById("menu_22");
    var areaOver1MAmerica = document.getElementById("menu_31");
    var allCountriesAsia = document.getElementById("menu_32");

    //Languages <a> Buttons
    var englishLanguage = document.getElementById("menu_41");
    englishLanguage.addEventListener("click", () => loadLanguageTable("English"));
    var arabicLanguage = document.getElementById("menu_42");
    arabicLanguage.addEventListener("click", () => loadLanguageTable("Arabic"));
    var chineseLanguage = document.getElementById("menu_43");
    chineseLanguage.addEventListener("click", () => loadLanguageTable("Chinese"));
    var frenchLanguage = document.getElementById("menu_44");
    frenchLanguage.addEventListener("click", () => loadLanguageTable("Franch"));
    var hindiLanguage = document.getElementById("menu_45");
    hindiLanguage.addEventListener("click", () => loadLanguageTable("Hindi"));
    var koreanLanguage = document.getElementById("menu_46");
    koreanLanguage.addEventListener("click", () => loadLanguageTable("Korean"));
    var japaneseLanguage = document.getElementById("menu_47");
    japaneseLanguage.addEventListener("click", () => loadLanguageTable("Japanese"));
    var russianLanguage = document.getElementById("menu_48");
    russianLanguage.addEventListener("click", () => loadLanguageTable("Russian"));

    table = document.getElementById("outputTable");

    countryListButton.addEventListener("click", loadCompleteCountryTable);

    populationOver100k.addEventListener("click", load100MTable);

    population1Mto2M.addEventListener("click", load1Mto2MTable);

    areaOver1MAmerica.addEventListener("click", loadAreaAmericaTable);

    allCountriesAsia.addEventListener("click", loadAsiaTable);
}

function loadCompleteCountryTable() {
    subtitle.innerHTML = "List of Countries and Dependencies";
    resetTableBody();
    createTableBody();
    countries.forEach((country) => createTable(country));
    event.preventDefault();
}

function loadLanguageTable(language) {
    subtitle.innerHTML = "List of Countries and Dependencies –Country/Dep. Name in "+language;
    resetTableBody();
    createTableBody();
    countries.forEach((country) => createTableByLanguage(country, language))
}

function load100MTable() {
    subtitle.innerHTML = "List of Countries and Dependencies - Population greater than 100 million";
    resetTableBody();
    createTableBody();
    countries.filter((country) => country.Population > 100000000).forEach((country) => createTable(country))
}

function load1Mto2MTable() {
    subtitle.innerHTML = "List of Countries and Dependencies -Population between 1 and 2 million";
    resetTableBody();
    createTableBody();
    countries.filter((country) => country.Population >= 1000000 && country.Population <= 2000000).forEach((country) => createTable(country))
}

function loadAreaAmericaTable() {
    subtitle.innerHTML = "List of Countries and Dependencies -Area greater than 1 million Km2, Americas";
    resetTableBody();
    createTableBody();
    countries.filter((country) => country.AreaInKm2 >= 1000000 && country.Continent == "Americas").forEach((country) => createTable(country))
}

function loadAsiaTable(){
    subtitle.innerHTML = "List of Countries and Dependencies -All countries in Asia";
    resetTableBody();
    createTableBody();
    countries.filter((country) => country.Continent == "Asia").forEach((country) => createTable(country))
}

function createTableBody() {
    table.appendChild(newBody);
}

function resetTableBody(){
    var elem = document.querySelector("#tableBody");
    if(elem){
        document.querySelector("#outputTable").removeChild(document.querySelector("#tableBody"))
        newBody = document.createElement("tbody");
        newBody.id = "tableBody";
    } 
}

function createTable(country) {
    var tr = document.createElement("tr");
    var tdFlag = document.createElement("td");
    var imgFlag = document.createElement("img");
    imgFlag.alt = "";
    //Check if flags exists so it throws no 404 error on GET
    if(flagExists(country.Code.toLowerCase())){
        imgFlag.src = `https://github.com/mksiq/CountriesTable-DOM/blob/master/flags/${country.Code.toLowerCase()}.png`;
        imgFlag.height = "25";
        imgFlag.width = "40";
    }
    tdFlag.appendChild(imgFlag);
    var tdCode = document.createElement("td");
    var codeNode = document.createTextNode(country.Code);
    tdCode.appendChild(codeNode);

    var tdCountry = document.createElement("td");
    var countryNode = document.createTextNode(country.Name.English);
    tdCountry.appendChild(countryNode);

    var tdContinent = document.createElement("td");
    var continentNode = document.createTextNode(country.Continent);
    tdContinent.appendChild(continentNode);

    var tdArea = document.createElement("td");
    var areaNode = document.createTextNode(country.AreaInKm2);
    tdArea.appendChild(areaNode);

    var tdPopulation = document.createElement("td");
    var populationNode = document.createTextNode(country.Population);
    tdPopulation.appendChild(populationNode);

    var tdCapital = document.createElement("td");
    var capitalNode = document.createTextNode(country.Capital);
    tdCapital.appendChild(capitalNode);

    tr.appendChild(tdFlag);
    tr.appendChild(tdCode);
    tr.appendChild(tdCountry);
    tr.appendChild(tdContinent);
    tr.appendChild(tdArea);
    tr.appendChild(tdPopulation);
    tr.appendChild(tdCapital);
    newBody.appendChild(tr);
}

function flagExists(countryCode){
    return (countryCode != "aq" && countryCode != "ai" && countryCode != "aw" && countryCode != "bm" && countryCode != "ky" &&
        countryCode != "cx" && countryCode != "cc" && countryCode != "cw" && countryCode != "gf" && countryCode != "gl" && countryCode != "hk"
        && countryCode != "mo" && countryCode != "ps" && countryCode != "pr" && countryCode != "sh" && countryCode != "mf" && countryCode != "sx" &&
        countryCode != "gs" && countryCode != "ss" && countryCode != "tw" && countryCode != "tc" && countryCode != "um" && countryCode != "vg" &&
        countryCode != "vi" && countryCode != "");
}

function createTableByLanguage(country, language) {
    var tr = document.createElement("tr");
    var tdFlag = document.createElement("td");
    var imgFlag = document.createElement("img");
    imgFlag.alt = "";
    //Check if flags exists so it throws no 404 error on GET
    if(flagExists(country.Code.toLowerCase())){
        imgFlag.src = `CountriesTable-DOM/flags/${country.Code.toLowerCase()}.png`;
        imgFlag.height = "25";
        imgFlag.width = "40";
    }
    tdFlag.appendChild(imgFlag);
    var tdCode = document.createElement("td");
    var codeNode = document.createTextNode(country.Code);
    tdCode.appendChild(codeNode);

    var tdCountry = document.createElement("td");
    var countryNode = document.createTextNode(country.Name[language]);
    tdCountry.appendChild(countryNode);

    var tdContinent = document.createElement("td");
    var continentNode = document.createTextNode(country.Continent);
    tdContinent.appendChild(continentNode);

    var tdArea = document.createElement("td");
    var areaNode = document.createTextNode(country.AreaInKm2);
    tdArea.appendChild(areaNode);

    var tdPopulation = document.createElement("td");
    var populationNode = document.createTextNode(country.Population);
    tdPopulation.appendChild(populationNode);

    var tdCapital = document.createElement("td");
    var capitalNode = document.createTextNode(country.Capital);
    tdCapital.appendChild(capitalNode);

    tr.appendChild(tdFlag);
    tr.appendChild(tdCode);
    tr.appendChild(tdCountry);
    tr.appendChild(tdContinent);
    tr.appendChild(tdArea);
    tr.appendChild(tdPopulation);
    tr.appendChild(tdCapital);
    newBody.appendChild(tr);
}

