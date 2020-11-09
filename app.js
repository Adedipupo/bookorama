
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
    
    //createElement

    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');


    //textContent

    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    //add clasName

    bookName.classList = "name";
    deleteBtn.classList = "delete";
    //append

    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    ul.appendChild(li);
});

//hide books

const hideBox = document.querySelector('#hide');

hideBox.addEventListener('change', function(e){
 if (hideBox.checked) {
     ul.style.display = 'none';
 } else {
     ul.style.display = 'block';
 }
});

const searchBar = document.querySelector('#search-books input');
searchBar.addEventListener('keyup',function(e){
    const term = e.target.value.toLowerCase();
    const books = ul.getElementsByTagName('li');

    Array.from('books').forEach(function(book){
        const title = books.firstElementChild.textContent;
         if (title.toLowerCase().indexOf(term) != -1) {
             book.style.display = 'block'
         }else{
            book.style.display = "none"
         }
    })
})