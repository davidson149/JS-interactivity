console.log('hello world!')

document.querySelector('form').addEventListener('submit', addMovie);
const message=document.querySelector('message')

function addMovie(event){
event.preventDefault();
let inputField = document.querySelector('input')

const movie = document.createElement('li')

const movieTitle=document.createElement('span');
movieTitle.textContent = inputField.value;
movie.appendChild(movieTitle)

const deleteBtn= document.createElement('button');
deleteBtn.textContent= 'x';
deleteBtn.addEventListener('click',deleteMovie);
movie.appendChild(deleteBtn)


document.querySelector('ul').appendChild(movie)


inputField.value=''
}
function deleteMovie(event){
    message.textContent='Movie deleted!'
event.target.parentNode.remove()
}

function crossOffMovie(event){
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')=== true){
        message.textContent ='Movie watched!'
    }else{
        message.textContent = 'Movie added back!'
    }
}

    