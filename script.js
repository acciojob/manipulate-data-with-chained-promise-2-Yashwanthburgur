const array = [1, 2, 3, 4];

function updateOutput(message) {
    document.getElementById('output').textContent = message;
}

// Start immediately (no initial 3-second wait)
new Promise((resolve) => {
    // Resolve immediately with array
    resolve(array);
})
.then((data) => {
    const evenNumbers = data.filter(num => num % 2 === 0);
    
    return new Promise((resolve) => {
        setTimeout(() => {
            // Show [2, 4] after 1 second
            updateOutput(evenNumbers.join(', '));
            resolve(evenNumbers);
        }, 1000);
    });
})
.then((evenNumbers) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const doubled = evenNumbers.map(num => num * 2);
            // Show [4, 8] after 2 more seconds (total 3 seconds)
            updateOutput(doubled.join(', '));
            resolve(doubled);
        }, 2000);
    });
})
.catch(error => console.error(error));