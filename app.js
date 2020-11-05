
const ul = document.querySelector('#book-list ul');

//delete book
ul.addEventListener('click', function(e){
    if (e.target.className === 'delete') {
        const li = e.target.parentNode;
        ul.removeChild(li);
    }
});

//add book
const addForm = document.querySelector('#add-book');
addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value);
});

//createElement

const li = document.createElement(li);
const bookName = document.createElement(span);
const deleteBtn = document.createElement(span);
