let button1 = document.querySelector('.btn');



function show() {
    button1.classList.add('newstyle');
}

function show() {
    button1.classList.toggle('newstyle');
}

// Arrow function:
button1.addEventListener('click', show);
button1.addEventListener('click', () => {button1.classList.add('newstyle')});

