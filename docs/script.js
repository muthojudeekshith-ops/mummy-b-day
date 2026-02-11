// Function to create floating stars and hearts
function createFloatingElements() {
    const animationsDiv = document.getElementById('animations');
    const elements = ['★', '♥']; // Star and heart symbols
    for (let i = 0; i < 20; i++) { // Create 20 elements
        const element = document.createElement('div');
        element.classList.add('floating');
        element.classList.add(elements[i % 2] === '★' ? 'star' : 'heart');
        element.textContent = elements[i % 2];
        element.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        element.style.animationDelay = Math.random() * 10 + 's'; // Random delay
        animationsDiv.appendChild(element);
    }
}

// Countdown Timer Function
function updateTimer() {
    const targetDateInput = document.getElementById('targetDate');
    const targetDate = new Date(targetDateInput.value).getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        document.getElementById('birthdayButton').style.display = 'none'; // Hide button while counting
    } else {
        document.getElementById('timer').innerHTML = 'Time\'s up!';
        document.getElementById('birthdayButton').style.display = 'block'; // Show button
    }
}

// Event Listener for Date Change
document.getElementById('targetDate').addEventListener('change', updateTimer);

// Button Click to Show Message (Interface 3)
document.getElementById('birthdayButton').addEventListener('click', function() {
    document.getElementById('interface1').style.display = 'none';
    document.getElementById('birthdayButton').style.display = 'none';
    document.getElementById('message').style.display = 'block';
});

// Initialize
createFloatingElements();
updateTimer();
setInterval(updateTimer, 1000); // Update timer every second
