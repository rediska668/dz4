'use strict';

//es5

// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }

// Product.prototype.make25PercentDiscount = function () {

//     this.price = this.price -(this.price / 100 * 25) ;
// };


// let obj1 = new Product("alex", 100);
// console.log(obj1);
// obj1.make25PercentDiscount();
// console.log(obj1.price);

//es6

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price = this.price - (this.price / 100 * 25);
        alert(this.price);
    }


}

let obj1 = new Product("Alex", 230);
obj1.make25PercentDiscount();