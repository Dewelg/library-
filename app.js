"use strict";

// PROJECT Section

class Book {
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

    addBook () {
        var newBook = new Book(title, author, read);
        newData.appendChild(newBook);
        let newRow = document.createElement('tr');
        let newData = document.createElement('td');
        newRow.appendChild(newData);
        let tableBody = document.querySelector('tbody');
        newRow.appendChild(tableBody);
    }
};