

// PROJECT Section

/*class Book {
    constructor(Id, title, author, read){
     this.Id = Id;
     this.title = title;
     this.author = author;
     this.read = read;
    }
};

class Library{
    constructor(bookCount, books){
        this.bookCount = bookCount;
        this.books = books;
    }

    markRead(checkbox, Id) {
        for (i = 0; i <= books.length; i++){
            if (i == Id){
                return this.read = true;
            } else if (i == Id) {
                return checkbox = true;
            }else {
                return false;
            }
        }
    }

    addBook (title, author, read) {
        let RowNumber = document.getElementById("RowNumber").value;
        let table = document.getElementById("table");
        let row = table.insertRow(RowNumber);
        let title = row.insertCell(0);
        let author = row.insertCell(1);
        let read = row.insertCell(2)
     
     
        title.innerHTML = document.getElementsByClassName('bookTitle').value;
        author.innerHTML = document.getElementsByClassName('authorTitle').value;
        read.innerHTML = document.getElementsByClassName('checkBox').value;
    }
};*/

function addBook () {
    let RowNumber = document.getElementById("RowNumber").value;
    let table = document.getElementById("table");
    let row = table.insertRow(RowNumber);
    let title = row.insertCell(0);
    let author = row.insertCell(1);
    let read = document.getElementById("inputread");
    read.setAttribute('type', 'checkbox');
    read.setAttribute('value','read');
    read.innerHTML = row.insertCell(2).value;
   


    title.innerHTML = document.getElementById('inputtitle').value;
    author.innerHTML = document.getElementById('inputauthor').value;
    

   
 
}

