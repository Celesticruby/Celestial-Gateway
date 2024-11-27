document.getElementById('quizButton').addEventListener('click', function() {
    const moodOutput = document.getElementById('moodOutput');
    const vibes = ['Energetic and Ready to Conquer!', 'Feeling Reflective and Calm...', 'A Little Cloudy Today... Let’s Center Ourselves!'];
    
    const randomVibe = vibes[Math.floor(Math.random() * vibes.length)];
    moodOutput.textContent = `Your vibe today: ${randomVibe}`;
});
