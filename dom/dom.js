// console.log(document);
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);

// var titleHeader = document.querySelector('#header-title');
// titleHeader.style.borderBottom = "solid 3px black";

// var addItem = document.querySelector('.title');
// addItem.style.color = 'green ';
// addItem.style.fontWeight = 'bold';

// var items = document.getElementsByClassName("list-group-item");
// items[2].style.backgroundColor = 'green';

// for (let i=0; i<items.length;i++) {
//     items[i].style.color= '#ff0033';
// }


// var li = document.getElementsByTagName('li');
// for (let i=0; i<li.length;i++) {
//         li[i].style.backgroundColor= '#f4f4f4';
// }

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor= 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility= 'hidden';


// var secondItem2 = document.querySelectorAll('.list-group-item')[1];
// secondItem2.style.color= 'green';

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for (let i=0; i<odd.length;i++) {
//     odd[i].style.backgroundColor= 'green';
// }

// parentElement 
var itemList = document.querySelector('#items');
 itemList.parentElement.style.backgroundColor= '#f4f4f4';

//lastElementChild
itemList.lastElementChild.style.backgroundColor='green';

//lastChild
console.log(itemList.lastChild);


//firstChild
console.log(itemList.firstChild);

//firstElementChild
itemList.firstElementChild.textContent= 'Hello';

//nextSibling
console.log(itemList.nextSibling);

//nextElementSibling
console.log(itemList.nextElementSibling);

//previous Sibling
console.log(itemList.previousSibling);

//previousElementSibling
itemList.previousElementSibling.style.backgroundColor='yellow';

//createElement
var newList = document.createElement('li');
newList.className="list5";
console.log(newList);

// Add Attribute
newList.setAttribute('id','New List');

//create Text Node
var listText = document.createTextNode('item5');
//append child
newList.appendChild(listText);
itemList.appendChild(newList);