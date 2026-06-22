var difficulty = "easy";

switch(difficulty){
    case "easy":
        console.log("Spider-Man is suitable for this mission");
        break;

    case "normal":
        console.log("Wonder Woman is suitable for this mission");
        break;

    case "medium":
        console.log("Batman is suitable for this mission");
        break;

    case "hard":
        console.log("Iron Man is suitable for this mission");
        break;

    default:
        console.log("Invalid mission difficulty");
}



var hero = "Wonder Woman";
var age;

if(hero === "Spider-Man"){
    age = 18;
}
else if(hero === "Wonder Woman"){
    age = 800;
}
else if(hero === "Iron Man"){
    age = 45;
}
else if(hero === "Batman"){
    age = 35;
}

if(age >= 30){
    console.log(hero + " is eligible to participate in the mission.");
}
else{
    console.log(hero + " is not eligible to participate in the mission.");
}
