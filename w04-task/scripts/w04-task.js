/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Ella Patten",
    photo: "images/IMG_8797-2.jpg",
    favoriteFoods: [
        "Brisket", 
        "Pineapple", 
        "Cheesesteak"
    ],
    hobbies: [
        "Basketball",
        "Baking",
        "Hiking",
        "Adventures"
    ],
    placesLived: [],
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Littleton, CO",
        length: "17 years"
    },
    {
        place: "Rexburg, ID",
        length: "1 year"
    }
);

/* DOM Manipulation - Output */
/* Name */

document.getElementById("name").innerHTML = myProfile["name"];

/* Photo with attributes */

document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
     let lis = document.createElement("li");
     lis.textContent = food;
     document.querySelector("#favorite-foods").appendChild(lis);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let hob = document.createElement("li");
    hob.textContent = hobby;
    document.querySelector("#hobbies").appendChild(hob);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    let loc = place.place;
    let loc2 = document.createElement("dt");
    loc2.textContent = loc
    let time = place.length;
    let time2 = document.createElement("dd");
    time2.textContent = time;
    document.querySelector("#places-lived").appendChild(loc2);
    document.querySelector("#places-lived").appendChild(time2);
});
