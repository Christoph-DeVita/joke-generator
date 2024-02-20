// script.js

const url = 'https://official-joke-api.appspot.com/jokes/random';
const options = {
    method: 'GET',
};

async function fetchJoke() {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        
        if (response.ok) {
            const jokeText = `${data.setup} ${data.punchline}`;
            const jokeDiv = document.getElementById('joke');
            jokeDiv.textContent = jokeText;
        } else {
            throw new Error(`Failed to fetch joke: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error(error.message);
    }
}

const jokeBtn = document.getElementById('joke-btn');
jokeBtn.addEventListener('click', fetchJoke);

// Fetch a joke when the page loads
fetchJoke();
