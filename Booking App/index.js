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
        li.appendChild(document.createTextNode(`${nameInput.value} - ${mailInput.value} - ${phoneInput.value}`));
        li.appendChild(delbtn);
        li.appendChild(editBtn);
        userList.appendChild(li);

        let object1 = {
            name: nameInput.value,
            Email: mailInput.value,
            Phone: phoneInput.value
        }
        localStorage.setItem(object1.Email,JSON.stringify(object1));

        delbtn.onclick= () => {
            localStorage.removeItem(object1.Email);
            userList.removeChild(li)
        }
        nameInput.value='';
        mailInput.value='';
        phoneInput.value='';

        editBtn.onclick= (name,email,phone) => {

            document.getElementById('name').value=name.value;
            document.getElementById('email').value=email;
            document.getElementById('phNo').value=phone;
            localStorage.removeItem(object1.Email);
            userList.removeChild(li);
        }

    }

}
