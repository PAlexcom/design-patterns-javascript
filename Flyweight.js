var LibraryManager = function () {
    var books = [];
    var booksDatabase = [];

    function Book(title, author) {
        this.title = title || "";
        this.author = author || "";
    }

    function LibraryBook(book) {
        this.book = book;
    }

    LibraryBook.prototype.getTitle = function () {
        return this.book.title;
    };
    LibraryBook.prototype.getAuthor = function () {
        return this.book.author;
    };

    function _addBook(title, author, libraryName) {
        if (!books[title]) {
            books[title] = new Book(title, author);
        }

        if (!booksDatabase[libraryName]) {
            booksDatabase[libraryName] = [];
        }

        booksDatabase[libraryName].push(
            new LibraryBook(books[title])
        );
    }

    return {
        addBook: function (title, author, libraryName) {
            _addBook(title, author, libraryName);
        },
        getLibraryBooks: function (libraryName) {
            return booksDatabase[libraryName];
        }
    }
};
