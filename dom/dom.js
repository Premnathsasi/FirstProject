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


var li = document.getElementsByTagName('li');
for (let i=0; i<li.length;i++) {
        li[i].style.backgroundColor= '#f4f4f4';
}