/*1. Find the length of each string in an array:
Input:
["apple", "banana", "grape"];   
Output:
[5, 6, 5]
*/
/* let a=["apple", "banana", "grape"];
let length=a .map((chr)=>chr.length)
console.log(length)*/

/*let a=[1, -2, 3, -4, 5];
let length=a .filter((chr)=>chr>0)
console.log(length)*/

/*students = [
    { name: "Alice", grade: "A" },
    { name: "Bob", grade: "B" },
    { name: "Charlie", grade: "C" }
];

students.forEach((student)=>student.grade='A+')
console.log(students)*/

/*let a=[3,4,5]
b=a.map((chr)=>chr+1)
console.log(b)*/

/*let a=[
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
];
a.forEach(chr => {
    chr.age+=1; }

);
console.log(a)*/

//map...........

//1
/*let num =[15.99, 29.5, 7.25];
 a=num.map(numbers => `$${numbers.toFixed(2)}`);
 console.log(a)
*/
//2
/*Map an array of numbers to "even" or "odd" strings.
Input:
[1, 2, 3, 4, 5]
Output:
['odd', 'even', 'odd', 'even', 'odd']
*/

/*let a=[1, 2, 3, 4, 5]

a.map((chr)=>{
    if(chr%2==0 ){
        console.log("even")
    }
    else if(chr%2==1)
    {
        console.log("odd")
    }
   

})
*/
//3
/*let arr = [[1, 2, 3], [4, 5], [6, 7, 8]];

let sums = arr.map(subArr => subArr.reduce((total, num) => total + num, 0));

console.log(sums); */

//4

/*let numbers = [2, 4, 3, 5];

let result = numbers.map(n => Array.from({ length: n }, (_, i) => i + 1));

console.log(result);
*/

//5
/*let timestamps = [1630488000000, 1631179200000, 1633708800000];

let times = timestamps.map(ts => new Date(ts).toLocaleTimeString('en-US'));

console.log(times);
// Example: ['2:50:00 PM', '2:50:00 PM', '9:30:00 PM']*/

//6
/*let timestamps = [1630488000000, 1631179200000, 1633708800000];

let times = timestamps.map(ts =>
    new Date(ts).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    })
);

console.log(times);
// Example: ['02:50:00 PM', '02:50:00 PM', '09:30:00 PM']*/













