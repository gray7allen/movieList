//console.log('Hello, world!')

const message = document.querySelector('#message')

function addMovie(event) {

    event.preventDefault();

    let inputField = document.querySelector('input')

    const movie = document.createElement('li')

    const movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
// cross off movie
    movieTitle.addEventListener('click', crossOffMovie)

    movie.appendChild(movieTitle)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn);

    document.querySelector('ul').appendChild(movie)

    inputField.value = ''

}

document.querySelector('form').addEventListener('submit', addMovie);

function deleteMovie(event) {
    event.target.parentNode.remove();

    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`
// movie deleted
    // message.textContent = 'Movie Deleted!'

// reveal message
    revealMessage()

}

function crossOffMovie(event) {
    event.target.classList.toggle('checked');

// movie watched
    if (event.target.classList.contains('checked')) {
            // message.textContent = 'Movie watched!';
            message.textContent = `${event.target.textContent} watched!`
    } else {
            // message.textContent = 'Movie added back!';
            message.textContent = `${event.target.textContent} added back!`
    }

// reveal message
    revealMessage()

}

function revealMessage() {
    message.classList.remove('hide')

    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}