const fe = document.querySelector('.fe');
const tech = document.querySelector('.tech');

fe.addEventListener('click', (e) => {
    e.preventDefault();

    fe.classList.add('btnNew');
    tech.classList.add('techNew');
});