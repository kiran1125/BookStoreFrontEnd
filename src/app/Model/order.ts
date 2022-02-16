export class Order {
    price !: number;
    quantity !: number;
    address !: String;
    userId  !: number;
    bookId  !: number;

    constructor(price : number,quantity : number,address : String,userId  : number,bookId  : number){
        this.price = price;
        this.quantity = quantity;
        this.address = address;
        this.userId = userId;
        this.bookId = bookId;
    }
}
