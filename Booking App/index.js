var myForm = document.getElementById('my-form');
var nameInput = document.querySelector('#name');
var mailInput = document.querySelector('#email');
var phoneInput = document.querySelector('#phNo');
var msg = document.querySelector('.msg');
var userList = document.querySelector('#users');
// form submit event
myForm.addEventListener('submit', onSubmit);


function onSubmit(event) {
    event.preventDefault();
    if (nameInput.value ==='' || mailInput.value==='') {
        msg.innerHTML= "Please enter all fields";
        setTimeout(() => msg.remove(),3000);
    } else {
        
        let object1 = {
            name: nameInput.value,
            Email: mailInput.value,
            Phone: phoneInput.value
        }

        // localStorage.setItem(object1.Email,JSON.stringify(object1));
        axios.post("https://crudcrud.com/api/f584a1e35bdd44058167e23488b4d4f5/appointmentData",object1)
        .then(res => showOnscreen(res.data))
        .catch((err) => {
        document.body.innerHTML= document.body.innerHTML+'<h4>Error:something went wrong</h4>'
            console.log(err)})
        // showOnscreen(object1);

        

    }

}

function showOnscreen(object1) {
    
    var li = document.createElement('li');
    //Add del button
    var delbtn = document.createElement('button');
    delbtn.className= 'btn btn-danger float-end btn-sm delete';
    delbtn.appendChild(document.createTextNode('Delete'));

    //Add Edit button
    var editBtn = document.createElement('button')
    editBtn.className= 'btn btn-primary float-end btn-sm me-2 edit';
    editBtn.appendChild(document.createTextNode('Edit'));


    li.className= 'list-group-item';
    li.appendChild(document.createTextNode(`${object1.name} - ${object1.Email} - ${object1.Phone}`));
    li.appendChild(delbtn);
    li.appendChild(editBtn);
    userList.appendChild(li);

    delbtn.onclick= () => {
        localStorage.removeItem(object1.Email);
        userList.removeChild(li)
    }
    nameInput.value='';
    mailInput.value='';
    phoneInput.value='';

    editBtn.onclick= () => {

        nameInput.value= object1.name;
        mailInput.value = object1.Email;
        phoneInput.value=object1.Phone;
        localStorage.removeItem(object1.Email);
        userList.removeChild(li);
    }
}