var myForm = document.querySelector("#myform");
var price = document.querySelector("#price");
var productName = document.querySelector("#pName");
var chooseCategory = document.querySelector("#cg");
var electronic = document.querySelector("#cg1");
var food = document.querySelector('#cg2');
var skinCare = document.querySelector("#cg3");
var msg = document.querySelector('.msg');


myForm.addEventListener('submit',onSubmit);

function onSubmit(event) {
    event.preventDefault();

    var obj ={
        Product_Price:price.value,
        Product_name:productName.value,
        Category:chooseCategory.value
    }
    axios.post("https://crudcrud.com/api/9f7f4e8434574d9b8d9e8177039e4276/ProductDetails",obj)
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
    delBtn.appendChild(document.createTextNode('Delete Product'));
    li.className='list-group-item';
    li.appendChild(document.createTextNode(`Product_Price: ${obj.Product_Price} - Name: ${obj.Product_name} - ${obj.Category}`))
    li.appendChild(delBtn)

    delBtn.addEventListener('click',()=> {
        axios.delete(`https://crudcrud.com/api/9f7f4e8434574d9b8d9e8177039e4276/ProductDetails/${obj._id}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    })

    if (obj.Category==='Electronic') {
        cg1.appendChild(li)
        delBtn.onclick= () => {
            cg1.removeChild(li);
        }
    }else if (obj.Category==='Food') {
        cg2.appendChild(li);
        delBtn.onclick= () => {
            cg2.removeChild(li);
        }
        

    } else {
        cg3.appendChild(li);
        delBtn.onclick= () => {
            cg3.removeChild(li);
        }
        
    }
    price.value="";
    productName.value="";
}

window.addEventListener('DOMContentLoaded', () => {
    axios.get("https://crudcrud.com/api/9f7f4e8434574d9b8d9e8177039e4276/ProductDetails")
    .then((res) => {
        for (let i=0;i<res.data.length;i++) {
            showOnscreen(res.data[i])
        }
        console.log(res.data)
    })
    .catch((err) => {
        msg.innerHTML= "<h5 class='text-white'>Error: Something went wrong..</h5>"
        setTimeout(() => msg.remove(),4000)
        
         console.log(err)
    })
  
});
