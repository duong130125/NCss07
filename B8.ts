interface Book {
    title: string;
    author: string;
    price: number;
    printBook(): void;
    updateBook(title: string, author: string, price: number): void;
}

const myBook: Book = {
    title: "Bay Cao Bay Xa",
    author: "Ẩn Danh Mật",
    price: 55.55,
    printBook() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Price: ${this.price}`);
    },
    updateBook(title: string, author: string, price: number) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
};

console.log("Thông tin sách trước khi cập nhật:");
myBook.printBook();

myBook.updateBook("Lặng Lặng Tâm Hồn", "Vô Danh Ẩn", 33.33);

console.log("\nThông tin sách sau khi cập nhật:");
myBook.printBook();
