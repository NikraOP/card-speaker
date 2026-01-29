const buttonFavourites = document.querySelector('.speaker__card-favourites')

buttonFavourites.addEventListener('click', () => {
    buttonFavourites.classList.toggle('speaker__card-favourites--active')
})