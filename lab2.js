
const characters = [{
    name: "Luke Skywalker",
    height: 177,
    gender: "male",
    mass: 77,
    eye_color: "brown",
},
{
    name: "Leia Organa",
    height: 160,
    gender: "female",
    mass: 56,
    eye_color: "blue",
},
{
    name: "Han Solo",
    height: 180,
    gender: "male",
    mass: 80,
    eye_color: "brown",
},
{
    name: "Chewie",
    height: 222,
    gender: "male",
    mass: 190,
    eye_color: "black",
},
{
    name: "Kevin",
    height: 106,
    gender: "male",
    mass: 32.2,
    eye_color: "red",
},
];


console.log("the frist person is mass is more than 75 ", characters.find((character) => character.mass > 75).name);

console.log("the first eye color of a character shorter than 180", characters.find((name) => name.height < 180).eye_color);

console.log("characters whose height is greater than 150 but less than 210.", characters.filter((name) => name.height > 150 && name.height < 210));

console.log("all female characters.", characters.filter((name) => name.gender === "female"));

let eye = characters.map((name) => {
    return name.eye_color
})
console.log("array of all eye colors only.", eye);

let mas = characters.map((name) => {
    return name.mass
})
console.log("array of all masses only.", mas);

console.log("sort by name", characters.sort((a, b) => a.name.localeCompare(b.name)));

console.log("sort by height", characters.sort((a, b) => a.height - b.height));

console.log("Does every character have a height greater than 100?", characters.every((name) => name.height > 100))

console.log("Is every character lighter than 200?", characters.every((name) => name.mass < 200))

console.log("Is there at least one character with black eyes?", characters.some((name) => name.eye_color === "black"))

console.log("IIs there at least one character with a height of exactly 177?", characters.some((name) => name.height === 177))