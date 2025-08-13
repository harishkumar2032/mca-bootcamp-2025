/** Q7
	 * This program reads a five-letter word from the user and encodes 
	 it by subtracting 1 from the ASCII value of each character. 
	 It then prints the newly encoded word.
	 
	 Problem Flow:
	Get 5-letter word input
	Loop each character → subtract 1 from ASCII
	Build new string with changed characters
	Print encoded result
	
	Input / Output Example:
	Input:
	Enter a Five letter word: white
	Output:
	Encoded Word: vghsd
	 */
   let word = prompt("Enter a 5-letter word:");

if (word.length === 5) {
    let encoded = "";

   
    for (let i = 0; i < word.length; i++) {
        let asciiValue = word.charCodeAt(i); 
        let newChar = String.fromCharCode(asciiValue - 1);
        encoded += newChar;
    }

    console.log("Encoded word: " + encoded);
} else {
    console.log("Please enter exactly 5 letters.");
}
