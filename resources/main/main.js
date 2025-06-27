const sticky = document.getElementById('sticky')

const stickyColor = () => {
    sticky.style.backgroundColor = 'blue';
}

sticky.addEventListener('click', stickyColor);