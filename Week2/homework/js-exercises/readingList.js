'use strict'

let books = [
    {title: 'Da Vinci Code', author: 'Dan Brown', alreadyRead: true},
    {title: 'Twilight', author: 'Stephenie Meyer', alreadyRead: false},
    {title: 'Harry Potter and the Deathly Hallows', author: 'J. K. Rowling', alreadyRead: false},
]

for (const book of books){
    console.log(book.title + ' by ' + book.author + ';')
    if(book.alreadyRead === true){
        console.log('You already read "%s".', book.title)
    }else{
        console.log('You still need to read "%s".', book.title)
    }
}

