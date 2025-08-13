 /** Q23
   This program prints a numeric pyramid pattern where numbers 
	 increase from the middle outwards and then decrease symmetrically. 
	 The pattern is centered and uses nested loops
	 
	 Problem Flow Summary
	Ask user for number of lines (n).
	For each line i from 1 to n:
	Print spaces to align the pyramid.
	Print increasing numbers (i to i + i - 1).
	Print decreasing numbers back to i.
	Move to the next line after printing each row.
	
Input / Output Example
Input:
Enter Number of Lines: 5

Output:
    1
   232
  34543
 4567654
567898765 */

/** Q23
 * This program prints a numeric pyramid pattern where numbers
 * increase from the middle outwards and then decrease symmetrically.
 */

let n = parseInt(prompt("Enter Number of Lines:")); 

for (let i = 1; i <= n; i++) {
    let line = "";

    
    for (let s = 1; s <= n - i; s++) {
        line += " ";
    }

    
    let num = i;
    for (let j = 1; j <= i; j++) {
        line += num++;
    }

    num -= 2; 
    for (let j = 1; j < i; j++) {
        line += num--;
    }

    console.log(line);
}
