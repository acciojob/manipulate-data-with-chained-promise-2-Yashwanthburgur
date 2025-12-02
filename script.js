const array = [1, 2, 3, 4];

// Function to update the output div
function updateOutput(arr) {
    document.getElementById('output').textContent = arr.join(',');
}

// Start the promise chain immediately
new Promise((resolve) => {
    // First: Show filtered array after 1 second
    setTimeout(() => {
        const filtered = array.filter(num => num % 2 === 0);
        updateOutput(filtered);
        resolve(filtered);
    }, 1000);
})
.then((filteredArray) => {
    return new Promise((resolve) => {
        // Second: Show doubled array after 2 more seconds
        setTimeout(() => {
            const doubled = filteredArray.map(num => num * 2);
            updateOutput(doubled);
            resolve(doubled);
        }, 2000);
    });
})
.catch(error => console.error(error));