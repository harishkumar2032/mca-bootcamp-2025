 
	 /* This program finds the sum of even numbers between 2 and 30 (inclusive).
	 	
	 Problem Flow:
	Start loop from 2 to 30
	Check if number is even (i % 2 == 0)
	Add to sum
	Print final sum
	
	 Input / Output Example:
	Output:
	Sum of even numbers from 2 to 30 = 240
	(Even numbers: 2 + 4 + 6 + ... + 30 = 240)
	 */ 
    // Program to find sum of even numbers between 2 and 30 (inclusive)

let n1 = parseInt(prompt("Enter the starting number:"))
let n2 = parseInt(prompt("Enter the ending number:"))

let sum = 0 
let num = [] 

for (let i = n1 ; i <= n2 ; i++) {
    if (i % 2 == 0) {
        sum += i
        num.push(i)
    }
}

console.log(" Sum of even numbers from " + n1 + " to " + n2 + " = " + sum )
console.log(" Even numbers : " + num.join(" + ")+ " = " + sum )