var myForm = document.querySelector("#myform");
var price = document.querySelector("#price");
var productName = document.querySelector("#pName");
var chooseCategory = document.querySelector("#cg");
var electronic = document.querySelector("#cg1");
var food = document.querySelector('#cg2');
var skinCare = document.querySelector("#cg3");
var msg = document.querySelector('.msg');


myForm.addEventListener('submit',onSubmit);

async function onSubmit(event) {
    try {  
    event.preventDefault();
    var obj ={
        Product_Price:price.value,
        Product_name:productName.value,
        Category:chooseCategory.value
    }
    const response= await axios.post("https://crudcrud.com/api/eec3131d7e6446b984332244e5700711/ProductDetails",obj)
    showOnscreen(response.data)
        
    } catch(err) {
        msg.innerHTML= "<h5 class='text-white'>Error: Something went wrong..</h5>"
        setTimeout(() => msg.remove(),4000)
    }
    }

 async function showOnscreen(obj) {
    try {
        var li = document.createElement('li');
    // create delete button
    var  delBtn = document.createElement('button');
    delBtn.className= 'btn btn-danger float-end btn-sm delete rounded-pill';
    delBtn.appendChild(document.createTextNode('Delete Product'));
    li.className='list-group-item';
    li.appendChild(document.createTextNode(`Product Price: ${obj.Product_Price} - Product Name: ${obj.Product_name} - ${obj.Category}`))
    li.appendChild(delBtn)

    delBtn.addEventListener('click',async ()=> {

        let res= await axios.delete(`https://crudcrud.com/api/eec3131d7e6446b984332244e5700711/ProductDetails/${obj._id}`)
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
    myForm.reset()
    
    } catch(err) {
        msg.innerHTML= "<h5 class='text-white'>Error: Something went wrong..</h5>"
        setTimeout(() => msg.remove(),4000)
    }
    
}

window.addEventListener('DOMContentLoaded',async () => {
    try {
        let res = await axios.get("https://crudcrud.com/api/eec3131d7e6446b984332244e5700711/ProductDetails")
        for (let i=0;i<res.data.length;i++) {
            showOnscreen(res.data[i])
        }
    } catch(err) {
        msg.innerHTML= "<h5 class='text-white'>Error: Something went wrong..</h5>"
        console.log(err)

    }
  
});
