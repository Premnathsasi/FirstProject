var myForm = document.querySelector("#myform");
var price = document.querySelector("#price");
var dish = document.querySelector("#dish");
var chooseTable = document.querySelector("#table");
var table1 = document.querySelector("#t1");
var table2 = document.querySelector('#t2');
var table3 = document.querySelector("#t3");
var msg = document.querySelector('.msg');


myForm.addEventListener('submit',onSubmit);

function onSubmit(event) {
    event.preventDefault();

    var obj ={
        Price:price.value,
        Dish:dish.value,
        Table:chooseTable.value
    }
    axios.post("https://crudcrud.com/api/c37bcc02b8af40f8b06093ab1a559e5f/OrderDetails",obj)
    .then(res => showOnscreen(res.data))
    .catch((err) => {
        msg.innerHTML= "<h5>Error: Something went wrong..</h5>"
        setTimeout(() => msg.remove(),3000)
        console.log(err)
    })
}

function showOnscreen(obj) {
    var li = document.createElement('li');
    // create delete button
    var  delBtn = document.createElement('button');
    delBtn.className= 'btn btn-danger float-end btn-sm delete';
    delBtn.appendChild(document.createTextNode('Delete Order'));
    li.className='list-group-item';
    li.appendChild(document.createTextNode(`Price: ${obj.Price} - Dish: ${obj.Dish}`))
    li.appendChild(delBtn)

    delBtn.addEventListener('click',()=> {
        axios.delete(`https://crudcrud.com/api/c37bcc02b8af40f8b06093ab1a559e5f/OrderDetails/${obj._id}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    })

    if (obj.Table==='Table 1') {
        table1.appendChild(li)
        delBtn.onclick= () => {
            table1.removeChild(li);
        }
    }else if (obj.Table==='Table 2') {
        table2.appendChild(li);
        delBtn.onclick= () => {
            table2.removeChild(li);
        }
        

    } else {
        table3.appendChild(li);
        delBtn.onclick= () => {
            table3.removeChild(li);
        }
        
    }
    price.value="";
    dish.value="";
}

window.addEventListener('DOMContentLoaded', () => {
    axios.get("https://crudcrud.com/api/c37bcc02b8af40f8b06093ab1a559e5f/OrderDetails")
    .then((res) => {
        for (let i=0;i<res.data.length;i++) {
            showOnscreen(res.data[i])
        }
        console.log(res.data)
    })
    .catch((err) => {
        msg.innerHTML= "<h5 class='text-white'>Error: Something went wrong..</h5>"
        setTimeout(() => msg.remove(),3000)
        
         console.log(err)
    })
  
});
