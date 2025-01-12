

const para = document.querySelector("p");
const genre = document.querySelector("#genre");
const duration = document.querySelector("#duration");
const mood = document.querySelector("#mood");
const form = document.querySelector("form");



form.addEventListener("submit", (event) => {
    document.querySelector(".error").innerText = ''
    event.preventDefault();
    try {
        let [resultMovie] = filterMovies(genre.value, duration.value, mood.value);
        if (resultMovie) {
            para.classList.add("result");
            para.innerHTML = `Based on your preferences, we recommend watching 
            <h2><a href=${resultMovie.link}>${resultMovie.title}</a></h2> — a quirky ${resultMovie.genre} film with a runtime of ${resultMovie.watchtime} minutes, perfect for a ${resultMovie.mood} mood. Enjoy this lighthearted, visually stunning movie`;
        } else {
            para.innerText = "Sorry, there's no movie with your preferred choices in our database"
        }
    } catch (error) {
        console.log(error);
        document.querySelector(".error").innerText = `*${error.message}`;
    }
})



const filterMovies = (genre, duration, mood) => {
    return topMovies.filter(movie =>
        (movie.genre.includes(genre)) &&
        (movie.duration === duration) &&
        (movie.mood === mood)
    );
}
