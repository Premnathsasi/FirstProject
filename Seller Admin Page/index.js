var myForm = document.querySelector('#myform');
var productId = document.querySelector('#product_id')
var sellPrice = document.querySelector('#sellprice')
var pName = document.querySelector('#pname')
var  foodItem = document.querySelector('#list1')
var  electronicItem = document.querySelector('#list2')
var  skinItem = document.querySelector('#list3')
var msg = document.querySelector('.msg');
var category = document.querySelector('#cg')


myForm.addEventListener('submit',onSubmit);

function onSubmit(event){
    event.preventDefault();
    if (productId.value ==='' || sellPrice.value==='') {
        msg.innerHTML= "Please enter all fields";
        setTimeout(() => msg.remove(),3000);
    } else {  
        if (category.value ==='Food'){
    var li = document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(`${sellPrice.value} - ${pName.value} - ${productId.value} - ${category.value}`));
    
    //del btn
    var delBtn = document.createElement('button');
    delBtn.className= 'btn btn-danger float-end btn-sm delete';
    delBtn.appendChild(document.createTextNode('Delete Product'));
    li.appendChild(delBtn);
    foodItem.appendChild(li);
        } else if (category.value==='Electronics'){
                var li = document.createElement('li');
                li.className='list-group-item';
                li.appendChild(document.createTextNode(`${sellPrice.value} - ${pName.value} - ${productId.value}- ${category.value}`));
                
                //del btn
                var delBtn = document.createElement('button');
                delBtn.className= 'btn btn-danger float-end btn-sm delete';
                delBtn.appendChild(document.createTextNode('Delete Product'));
                li.appendChild(delBtn);
                electronicItem.appendChild(li);
              }
         else {
            var li = document.createElement('li');
                li.className='list-group-item';
                li.appendChild(document.createTextNode(`${sellPrice.value} - ${pName.value} - ${productId.value} - ${category.value}`));
                
                //del btn
                var delBtn = document.createElement('button');
                delBtn.className= 'btn btn-danger float-end btn-sm delete';
                delBtn.appendChild(document.createTextNode('Delete Product'));
                li.appendChild(delBtn);
                skinItem.appendChild(li);
                
        }

    let object1= {
        Price:sellPrice.value,
        productName: pName.value,
        productID: productId.value
    }
    localStorage.setItem(object1.productID,JSON.stringify(object1));
    delBtn.onclick= () => {
        localStorage.removeItem(object1.productID);
        foodItem.removeChild(li)
    }
    productId.value='';
    sellPrice.value='';
    pName.value='';

    }
}
