// Your array
const array = [1, 2, 3, 4];

// Function to filter even numbers
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Function to double numbers
function doubleNumbers(arr) {
    return arr.map(num => num * 2);
}

// Update DOM function
function updateOutput(message) {
    const output = document.getElementById('output');
    output.textContent = message;
}

// Chain promises correctly
new Promise((resolve) => {
    // Initial 3-second delay with original array
    setTimeout(() => {
        resolve(array);
    }, 3000);
})
.then((data) => {
    // First transformation: filter evens
    const evenNumbers = filterEvenNumbers(data);
    
    return new Promise((resolve) => {
        setTimeout(() => {
            // Update DOM after 1 second (total 4 seconds from start)
            updateOutput(evenNumbers.join(', '));
            resolve(evenNumbers);
        }, 1000);
    });
})
.then((evenNumbers) => {
    // Second transformation: double evens
    return new Promise((resolve) => {
        setTimeout(() => {
            const doubled = doubleNumbers(evenNumbers);
            // Update DOM after 2 more seconds (total 6 seconds from start)
            updateOutput(doubled.join(', '));
            resolve(doubled);
        }, 2000);
    });
})
.catch((error) => {
    console.error("Error:", error);
});