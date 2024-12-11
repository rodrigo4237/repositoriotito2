const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => { 
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => { 
        nav.classList.remove('active');
    })
}

const user = document.getElementsById('userBtn');

if (user) {
    user.addEventListener('click', () => {
        loadPage('user');
        })
}