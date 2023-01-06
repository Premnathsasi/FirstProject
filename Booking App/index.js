var myForm = document.getElementById('my-form');
var nameInput = document.querySelector('#name');
var mailInput = document.querySelector('#email');
var phoneInput = document.querySelector('#phNo');
var msg = document.querySelector('.msg');
var userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();
    if (nameInput.value ==='' || mailInput.value==='') {
        msg.innerHTML= "Please enter all fields";
        setTimeout(() => msg.remove(),3000);
    } else {
        var li = document.createElement('li');
        li.className= 'list-group-item';
        li.appendChild(document.createTextNode(`${nameInput.value} : ${mailInput.value} : ${phoneInput.value}`));
        userList.appendChild(li);

        let object1 = {
            name: nameInput.value,
            Email: mailInput.value,
            Phone: phoneInput.value
        }

        let obj_serialised = JSON.stringify(object1);
        localStorage.setItem(mailInput.value,obj_serialised);
        let obj_deserialised = JSON.parse(localStorage.getItem(mailInput.value));
        localStorage.getItem(obj_deserialised);

        // localStorage.setItem(mailInput.value,(`${'name'}:${nameInput.value}, ${'mail'}:${mailInput.value}, ${'Phone'}:${phoneInput.value}`));
   
        nameInput.value='';
        mailInput.value='';
        phoneInput.value='';

    }

}