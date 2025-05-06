let book = {
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    year: 1859,
    isAvailable: true,
    borrow: function () {
        if (this.isAvailable == true) {
            console.log("the book been borrow");
            this.isAvailable = false
        } else {
            console.log("its not avalible");

        }
    },
    publisher: {
        name: "Simon & Schuster",
        location: {
            city: "London",
            country: "England",
        }
    },

}

console.log(book);

console.log(book.title);

book.year = 1900;
console.log(book);

delete book.author
console.log(book);

book.borrow()

console.log(book.publisher);

console.log(book.publisher.location.city);

