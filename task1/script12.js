
let input = prompt("Enter 5 numbers (each between 1 and 30), separated by spaces:");


let numbers = input.split(" ").map(Number);


if (numbers.length === 5 && numbers.every(num => num >= 1 && num <= 30)) {
    for (let num of numbers) {
        let stars = "";
        for (let i = 0; i < num; i++) {
            stars += "*";
        }
        console.log(num + " " + stars);
    }
} else {
    console.log("Please enter exactly 5 numbers between 1 and 30.");
}
