// task_1
// do {
//     var userInput = prompt("Enter a string:");
//     if (userInput ==="" || userInput === null || userInput === undefined) {
//         alert("No input provided.");
//     }
//     else if (typeof userInput === 'string') {
//         let count = 0;
//         let lowerStr = userInput.toLowerCase();
        
//         for (let i = 0; i < lowerStr.length; i++) {
//             if (lowerStr[i] === 'e'|| lowerStr[i] === 'E') {
//                 count++;
//             }
//         }

//         alert(`The character 'e' appears ${count} times.`);
//     } else {
//         alert("No input provided.");
//     }
// } while (userInput ==="" || userInput === null || userInput === undefined);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//task_2

// let numbers = [];
// do {
    

// for (let i = 1; i <= 3; i++) {
//     let num;
//     do {
//         num = parseFloat(prompt(`Enter number ${i}:`));
//     } while (isNaN(num));
//     numbers.push(num);
// }

// let sum = numbers[0] + numbers[1] + numbers[2];
// let multiplication = numbers[0] * numbers[1] * numbers[2];
// let division = (numbers[1] === 0 || numbers[2] === 0) ;
// division = (numbers[1] === 0 || numbers[2] === 0)
//     ? "Error: Division by zero"
//     : (numbers[0] / numbers[1] / numbers[2]);
// alert(`sum: ${sum} | multiplication: ${multiplication} | Division: ${division}`);
// } while (num ==="" || num === null || num === undefined);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // task_3
// let arr = [];

// for (let i = 1; i <= 5; i++) {
//     let num;
//     do {
//         num = parseFloat(prompt(`Enter number ${i}:`));
//     } while (isNaN(num));
//     arr.push(num);
// }

// let Ascending = arr.slice().sort((a, b) => a - b);
// let Descending = arr.slice().sort((a, b) => b - a);

// alert(`Ascending Order: ${Ascending.join(", ")}\nDescending Order: ${Descending.join(", ")}`);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// task_4
// let name, mobile, email;

// do {
//     name = prompt("Enter your name (letters only):");
// } while (!/^[A-Za-z]+$/.test(name));

// do {
//     mobile = prompt("Enter your mobile number (11 digits starting with 010, 011, or 012):");
// } while (!/^(010|011|012)\d{8}$/.test(mobile));

// do {
//     email = prompt("Enter your email:");
// } while (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));

// alert(`Welcome, ${name}! Your mobile number is ${mobile}, and your email is ${email}.`);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // task_5
// function calculateTotal() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         if (typeof arguments[i] === "string") {
//             alert("String values are not allowed");
//             return;      
//         }
//         total += arguments[i];
//     }
//     return total;
// }



//     console.log(calculateTotal(5, 10, 20)); // 35
//     // console.log(calculateTotal(2, "3", 5)); 
//     // alert("String values are not allowed");
