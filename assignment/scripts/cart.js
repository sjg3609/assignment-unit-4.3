console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item) {
    basket.push(item);
    console.log(basket);
    return true;    
}

let result = addItem('ketchup');
console.log(addItem('chocolate'));


function listItems() {
    for(let item of basket) {
        console.log(item)
    }
}

function empty() {
    basket = 'empty';
}

listItems();
console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);

// empty();
// console.log(`Basket is ${basket}`);

// STRETCH GOALS

const maxItems = 5;

function isFull() {
    if (maxItems < 5) {
        return false;
    } else if (maxItems >=5) {
        return true;
    }

}

console.log(isFull());

addItem('strawberries');
addItem('chicken wings');


function removeItem( item ) {
    basket.indexOf(item);
    basket.splice(0, 1);
    return item;
    
}

removeItem('strawberries');
listItems();