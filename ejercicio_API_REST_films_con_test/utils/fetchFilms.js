require('dotenv').config();

async function fetchFilms(title) {
    const res = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${process.env.API_KEY}`)
    const answer = await res.json();

    return answer.Response === "False" ? null : answer;
}

module.exports = fetchFilms;