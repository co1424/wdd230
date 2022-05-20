
const newChapter = () => {
    const ul = document.querySelector('.list');
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.textContent = '❌';
    button.setAttribute('type', 'remove');

    button.addEventListener('click', () => {
        ul.removeChild(li);
    })

    let item = document.querySelector('#favchap');

    console.log(item, 'hello');

    li.textContent = item.value;
    li.appendChild(button);
    ul.appendChild(li);
    item.value = ''; 

}

document.querySelector('#submit').addEventListener('click', newChapter);


