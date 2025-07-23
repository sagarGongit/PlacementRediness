const library = {
  books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],

  addBook(book) {
    const { title, author, year } = book;

    if (
      !title ||
      typeof title !== "string" ||
      !author ||
      typeof author !== "string" ||
      !year ||
      typeof year !== "number" ||
      year < 1900
    ) {
      console.log("Book information is incomplete.");

      return;
    }
    this.books.push(book);
  },

  findBookByTitle(title) {
    return this.books.find((book) => book.title === title);
  },

  removeBook(title) {
    const index = this.books.findIndex((book) => book.title === title);

    if (index !== -1) {
      this.books.splice(index, 1);
    } else {
      console.log("Book not found.");
    }
  },
};

library.addBook({ author: "George Orwell", year: 1949 });
library.addBook({title : "random",author : "random",year : 1950})
console.log(library.books.length)
library.removeBook("random");
console.log(library.books.length)

