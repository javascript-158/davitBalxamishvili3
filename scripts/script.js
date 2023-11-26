function calculator(num1, num2, equal) {
    if (equal === 'add') {
        console.log(num1 * num2);
    }
}

calculator(5, 5, 'add');

function FahrenheitCelsius(num1, num2, num3, equal) {
    if (equal === 'add') {
        console.log(num1 * num2 + num3);
    }
}

FahrenheitCelsius(1.8000, 14, 32.00, 'add');

let number = 15;

if (number <= 20 && number >= 10) {
    console.log("რიცხვი");
} else if (number <= 10) {
    console.log("დიაპაზონის საწყისი რიცხვიცხვი");
} else {
    console.log("დიაპაზონის ბოლო რიცხვი.");
}

let year1 = 2000;
let year2 = 2004;
let year3 = 2008;
let year4 = 2012;
let year5 = 2016;
let year6 = 2020;
let year7 = 2024;
let year8 = 2028;
let year9 = 2032;
let year10 = 2036;

let yearNumber = 2024;

if (yearNumber == year1 || yearNumber == year2 || yearNumber == year3 || yearNumber == year4 || yearNumber == year5 || yearNumber == year6 || yearNumber == year7 || yearNumber == year8 || yearNumber == year9 || yearNumber == year10) {
    console.log("მოცემული წელი ნაკიანია")
} else {
    console.log("წელი არ არის ნაკიანი.");
}

let vegetables = prompt()

switch (vegetables) {
    case "carrot":
    alert ("Hello")
    break;
    case "broccoli":
    alert("Welcome")
    break;
    default:
    alert("Neither")

}

let cation = "move";

switch (cation) {
    case "move":
        alert("you're moving!");
    break;
    case "jump":
        alert("you're jumping!");
    break;
    case "run":
        alert("you're running!");
    break;
    default:
        alert("invalid cation.")
}