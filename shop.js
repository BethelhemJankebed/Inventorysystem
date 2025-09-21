let shelf = []

function addshelf (id, name , price, quantity){
let contain ={id :id , name: name , price: price , quantity : quantity}
shelf.push(contain)
console.log(`${name} added to shelf`)
}

function removeProduct (id){
    let index = shelf.findIndex ((contain => contain.id === id))
    if (index !== -1){
        shelf.splice (index,1);
        console.log(`product with id ${id} are removed`)
    }
    else{
     console.log("product is not find")
    }
}
















addshelf(1, "bread" ,200, 10);
addshelf(2, "milk" ,100, 10);
addshelf(3 ,"groundnut" ,50, 5);


removeProduct(1);
console.log(shelf);