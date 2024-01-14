/* W05: Programming Tasks */

/* Declare and initialize global variables */

let templesElement = document.querySelector("#temples");
let templeList = [];


/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach(temple => {
        let temp = document.createElement("article");
        let temps = document.createElement("h3");
        temps.textContent = temple["templeName"];
        let tempimg = document.createElement("img");
        tempimg.setAttribute("src", temple["imageUrl"]);
        tempimg.setAttribute("alt", temple["location"]);
        temp.appendChild(temps);
        temp.appendChild(tempimg);
        templesElement.appendChild(temp);
    });
}


/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
};

/* reset Function */
function reset() {
    templesElement.innerHTML = ""; 
};

/* sortBy Function */
const sortTemples = (temples) => {
    reset()
    let filter = document.querySelector("#sortBy").value;
    switch (filter) {
        case "utah": 
            let utah = temples.filter(temple => temple["location"].includes("Utah"))
            displayTemples(utah); 
            break;
        case "notutah":
            let noutah = temples.filter(temple => !temple['location'].includes("Utah"));
            displayTemples(noutah);
            break;
        case "older":
            old = temples.filter(temple => new Date(temple['dedicated']) < new Date(1950, 0, 1)); 
            displayTemples(old);
            break;
        case "all":
            displayTemples(templeList);
            break;
       };
    }

// getTemples();
getTemples()

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortTemples(templeList)});


let pagination = 10;
let i = 1;
while ( i <= pagination ) {
  console.log(`pass ${i}`);
  i++;
}