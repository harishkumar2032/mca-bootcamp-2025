 
	 /* This program calculates and prints the product of odd numbers from 1 to 15.
		(Odd numbers: 1, 3, 5, 7, ..., 15)
		
		Problem Flow:
		Start from 1 to 15
		Increment by 2 to get odd numbers
		Multiply all odd numbers
		Print the final product
		
		Input / Output Example:
		Output:
		Product of odd numbers from 1 to 15 = 2027025
		(Odd numbers: 1 × 3 × 5 × 7 × 9 × 11 × 13 × 15 = 2027025) */

	let n1 = parseInt(prompt("Enter the starting number:"))
		let n2 = parseInt(prompt("Enter the ending number:"))

		let nul = 1
			let num = [] 

		for (let i = n1 ; i <= n2 ; i++) {
   		 if (i % 2 !== 0) {
     	nul *= i
        num.push(i)
    }
}

console.log(" Product of odd numbers from " + n1 + " to " + n2 + " = " + nul )
console.log(" Odd numbers : " + num.join(" x ")+ " = " + nul )
