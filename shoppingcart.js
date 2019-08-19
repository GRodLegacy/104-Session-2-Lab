// shopping cart
// add taxes
// create a menu for a loop

let snacks = ['Salt and Vinegar chips', 'Pistachios', 'Pepsi', 'Coke', 'Dr.Pepe' ];

let prices = [ 0.99, 4.99, 1.50, 1.50, 1.50 ];

//alert menu
let menu = '';
for(let i=0; i < snacks.length; i++) {
    menu=menu + (i+1)+ '. ' + snacks[i] + '-->' + prices[i] + '\n';
}

alert("Here is our menu: "+ "\n" + menu);

let selection = prompt('Select a product: ');
let number= prompt('Number of products: ');
let count, total, taxes, t ;

switch(selection){

    case '1':
        count= 0;
        t=tax(pay());
        alert('You selected ' + number + " " + snacks[0] + ' at $' + prices[0] + " each" + '\n Your total, with tax, is $' + t.toFixed(2)) ;
        break;
    case '2':
        count= 1;
        t=tax(pay());
        alert('You selected ' + number + " " +  snacks[1] + ' at $' + prices[1] + " each" + '\n Your total, with tax, is $' + t.toFixed(2))  ;
        break;
    case '3':
        count= 2;
        t=tax(pay());
        alert('You selected ' + number + " " +  snacks[2] + ' at $' + prices[2] + " each" + '\n Your total, with tax, is $' + t.toFixed(2))  ;
        break;
    case '4':
        count= 3;
        t=tax(pay());
        alert('You selected ' + number + " " + snacks[3] + ' at $' + prices[3] + " each" + '\n Your total, with tax, is $' + t.toFixed(2))  ;
        break;
    case '5':
        count= 4;
        t=tax(pay());
        alert('You selected ' + number + " " + snacks[4] + ' at $' + prices[4] + " each" + '\n Your total, with tax, is $' + t.toFixed(2)) ;
        break;
    default:
        alert('Select a valid option');
        break;
}

function pay(){
    let total;
    total= prices[count] * number;
    return total;
}

// add taxes here

function tax () {
    let taxes;
    taxes = pay() * 1.056 ; //WI state tax is 5.6% (0.056)
    return taxes;
}



