/** Q1
	 * Write a program to read the radius of a circle and calculate 
	 * its area using the formula:
		A = π * r²
	
	Problem Flow:
	1. User inputs radius (r)
	2. Program calculates: area = (22.0 / 7) * r * r
	3. Output displays area with radius
	
	Input / Output Example:
	Input:
	Enter Radius of Circle: 7
	Output:
	Area of Circle with Radius 7.0000 is 154.0000
*/
let r=prompt("Enter Radius of Circle:")
if(r!=0 && r>0)
    {
let area=Math.PI (Math.pow(r, 2))
console.log("area of circle and radius" + r + "is " + area.toFixed(4))
}

