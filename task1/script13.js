
let N = parseInt(prompt("Enter how many numbers you want to input:"));

if (!isNaN(N) && N > 0) {

    let smallest = parseFloat(prompt("Enter number 1:"));

    
    for (let i = 2; i <= N; i++) {
        let num = parseFloat(prompt(`Enter number ${i}:`));
        if (num < smallest) {
            smallest = num;
        }
    }

    console.log("The smallest number is: " + smallest);
} else {
    console.log("Please enter a valid positive number for N.");
}
