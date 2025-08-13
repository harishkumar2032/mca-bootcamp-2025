/** Q6
	 * This program allows the user to enter 3 test marks of a student, 
	 calculates the total and average, and displays the result.
	 
	Problem Flow:
	Get 3 marks from user
	Add marks → total
	Divide total by 3.0 → average
	Display total and average
	
	Input / Output Example:
	Input:
	Enter Mark 1: 80  
	Enter Mark 2: 75  
	Enter Mark 3: 85  
	Output:
	Total Marks   = 240  
	Average Marks = 80.0
	 */
   var m1=Number(prompt("Enter mark 1:"))
   var m2=Number(prompt("Enter the mark2:"))
   var m3=Number(prompt("Enter the mark3:"))
   if (m1>0&&m2>0&&m3>0){
    let a= total = m1+m2+m3;
    let avg=total/3;
    console.log("Total Marks =" +a)
    console.log("average Marks ="+avg)

   }else{
    console.log("enter the valid data")
   }