
const ul = document.querySelector('#book-list ul');

//delete book
ul.addEventListener('click', function(e){
    if (e.target.className === 'delete') {
        const li = e.target.parentNode;
        ul.removeChild(li);
    }
});

//add book
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(e.target.value);
})
