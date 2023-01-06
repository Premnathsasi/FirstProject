var myForm = document.getElementById('my-form');
var nameInput = document.querySelector('#name');
var mailInput = document.querySelector('#email');
var phoneInput = document.querySelector('#phNo');
var msg = document.querySelector('.msg');
var userList = document.querySelector('#users');
// form submit event
myForm.addEventListener('submit', onSubmit);
// delete event
// userList.addEventListener('click',removeUser);


function onSubmit(event) {
    event.preventDefault();
    if (nameInput.value ==='' || mailInput.value==='') {
        msg.innerHTML= "Please enter all fields";
        setTimeout(() => msg.remove(),3000);
    } else {
        var Name =event.target.name.value;
        var Email = event.target.email.value;
        var PhoneNo = event.target.phNo.value;

        let obj = {
          Name,
          Email,
          PhoneNo
        }

        localStorage.setItem(obj.Email, JSON.stringify(obj));


        var li = document.createElement('li');
        li.className= 'list-group-item';
        li.textContent = obj.Name + ' - ' +obj.Email+ ' - ' + obj.PhoneNo+ ' - ';
        // li.appendChild(document.createTextNode(`${nameInput.value} - ${mailInput.value} - ${phoneInput.value}`));
        var delbtn = document.createElement('button');
        delbtn.className= 'btn btn-danger float-end btn-sm delete';
        delbtn.appendChild(document.createTextNode('Delete'));
        delbtn.onclick = () => {
            localStorage.removeItem(obj.Email);
            userList.removeChild(li);
        }

        li.appendChild(delbtn);
        userList.appendChild(li);

        
        // let obj_serialised = JSON.stringify(object1);
        // localStorage.setItem(mailInput.value,obj_serialised);
        // let obj_deserialised = JSON.parse(localStorage.getItem(mailInput.value));
        // localStorage.getItem(obj_deserialised);

        // localStorage.setItem(mailInput.value,(`${'name'}:${nameInput.value}, ${'mail'}:${mailInput.value}, ${'Phone'}:${phoneInput.value}`));
   
        nameInput.value='';
        mailInput.value='';
        phoneInput.value='';

    }

}
// function removeUser(e) {
//     if (e.target.classList.contains('delete')) {
//         var li = e.target.parentElement;
//         localStorage.removeItem(Email);
//         userList.removeChild(li);

//     }

// }