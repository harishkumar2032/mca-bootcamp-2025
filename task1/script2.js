/** Q2
	 * Write a Java program to calculate Simple Interest using the formula:
 		SI = (P × N × R) / 100
 		Where:
		P = Principal amount
		N = Number of years
		R = Rate of interest
		
		Problem Flow:
		User inputs:
			Principal (P)
			Rate (R)
			Years (N)
		Program calculates:
			SI = (P × N × R) / 100
		Output displays the Simple Interest value.
		
		Input / Output Example:
		Input:
		Enter Principal Amount: 10000  
		Enter Rate of Interest: 5  
		Enter No. of Years: 2
		Output:
		Simple Interest = 1000.00 */

       var P=prompt("Enter principal amount:");
        var N=prompt("Enter number of years:");
     var R=prompt("Enter rate of interest");
	 if( P > 0 && N > 0 && R > 0)
		{
		SI = (P * N * R) / 100
        console.log("simple intrest = " + SI.toFixed(2) )}
		else{
			console.log("enter the valid input")
		}