'use strict';


//es5


// function Post(autor, text, date) {
//     this.autor = autor;
//     this.text = text;
//     this.date = date;
// }

// Post.prototype.edit = function () {
//     this.text = "Hello world";
// };

// function AttachedPost(autor, text, date, highlighted) {
//     Post.call(this, autor, text, date);
//     this.highlighted = false;
// }

// AttachedPost.prototype = Object.create(Post.prototype);
// AttachedPost.prototype.constructor = AttachedPost;

// AttachedPost.prototype.makeTextHighlighted = function () {
//     this.highlighted = true;
// };

// let obj = new AttachedPost("Alex", "", "20.1.1020");
// obj.edit();
// obj.makeTextHighlighted();

// console.log(obj);

//es6

class Post {
    constructor(autor, text, date) {
        this.autor = autor;
        this.text = text;
        this.date = date;
    }
    edit() {
        this.text = "Hello world";
    }
}

class AttachedPost extends Post {
    constructor(autor, text, date, highlighted) {
        super(autor, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let obj = new AttachedPost("Alex", "", "20.1.1020");
obj.edit();
obj.makeTextHighlighted();

console.log(obj);