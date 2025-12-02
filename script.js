const array = [1, 2, 3, 4];

// Update DOM
function showResult(arr) {
    document.getElementById('output').textContent = arr.join(', ');
}

// Start immediately
setTimeout(() => {
    // After 1 second: filter even numbers
    const evens = array.filter(num => num % 2 === 0);
    showResult(evens);
    
    // Wait 2 more seconds (3 total)
    setTimeout(() => {
        // Double the evens
        const doubled = evens.map(num => num * 2);
        showResult(doubled);
    }, 2000);
}, 1000);