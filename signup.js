const form = document.getElementById('form');
const username = document.getElementById('username');
// let taskList = JSON.parse(localStorage.setItem("item")) || [] ;
const email = document.getElementById('email')



let taskList = JSON.parse(localStorage.getItem("taskList")) || [] ;
const password = document.getElementById('password');
const password2 = document.getElementById('password2')
const click = document.getElementById('click')
let img = document.getElementById('passone')
let imgtwo = document.getElementById('passtwo')
let flag = false;

form.addEventListener('submit', e => {
    e.preventDefault();
    // window.location.href = './loginpage.html'
    validateInputs();

  if(flag){
      window.location.href = './loginpage.html'
  }
  if(flag){

    const data = {
        email:email.value,
        password:password.value,

    }
    localStorage.removeItem('tasklist');
    taskList.push(data);
    localStorage.setItem('taskList',JSON.stringify(taskList));
    console.log(taskList);


}   
    
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
       flag = false;
        setError(username, 'Username is required');
    } else {
        flag = true;
        setSuccess(username);
        localStorage.setItem('name',usernameValue)

    }

    if(emailValue === '') {
       flag = false;
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
       flag = false;
        setError(email, 'Provide a valid email address');
    } else {
        flag = true;
        setSuccess(email);

    }

    if(passwordValue === '') {
       flag = false;
        setError(password, 'Password is required');
    } else if (passwordValue.length < 3 ) {
       flag = false;
        setError(password, 'Password must be at least 8 character.')
    } else {
        flag = true;
        setSuccess(password);
    }

    if(password2Value === '') {
       flag = false;
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        flag = false;
        setError(password2, "Passwords doesn't match");
    } else {
        flag = true;
        setSuccess(password2);
    }

     
};




let Password = localStorage.getItem('password')?localStorage.getItem('password'):'';
// let Name = localStorage.getItem('password')?localStorage.getItem('name'):'';
// let Email = localStorage.getItem('password')?localStorage.getItem('email'):'';
// console.log(Password)
//  if (Password!= ''){
//     alert('You all ready login please logout if you go back')
//     window.location.href = './profile.html'
// }
// else{
//     window.location.href = './index.html'
// }

// var activeSession = sessionStorage.activeSession;
    // if (Password) {
    //     console.log('Logged out due to expiry already')
    // }
    // else if (!Password) {
    //     s = true;
    //     _logout()
    // }

//     var activeSession = sessionStorage.activeSession;
//     if (Password!= ''){
//     alert('U allready login')
//     window.location.href = './profile.html'
// }
//     else if (Password = '') {
//     alert('u need login first')
//     window.location.href = './index.html'
// }

    function _logout(){
    
    window.location.href = './index.html'
    // localStorage.removeItem('email')
    // localStorage.removeItem('password')
    // localStorage.removeItem('name')

    }

function pass(){

    if (a==1){
        password.type='password'
        img.src='././image/hide.png'
        a=0;
    }else{
        password.type='text'
        img.src='././image/view.png'
        a=1
    }
}
// img.addEventListener('click',pass)
var a
function pass(){

    if (a==1){
        password.type='password'
        img.src='././image/hide.png'
        a=0;
    }else{
        password.type='text'
        img.src='././image/view.png'
        a=1
    }
}
imgtwo.addEventListener('click',passtwo)

var b;
function passtwo(){
    // console.log('ok')
    if (b==1){
        password2.type='password'
        imgtwo.src='././image/hide.png'
        b=0;
    }

    else{
        password2.type='text'
        imgtwo.src='././image/view.png'
        b=1
    }

}

// var a
// function pass(){
//     if (a==1){
//         click.type='password'
//         a=0;
//     }else{
//         click.type='text'
//         a=1
//     }
// }
// img.addEventListener('click',()=>{
//     var a
//     if (a==1){
//         click.type='password'
//         a=0;
//     }else{
//         click.type='text'
//         a=1
//     }
// })

// module.exports = {
//     abc : ()=>{
//         console.log('hello')
//     },
//     username:'ibrahim'

// }
// let ibra = require('./script');
// console.log(ibra.abc())
// // document.write(ibra.username)
// console.log(ibra.username)
// // let name = document.querySelector('#name')
// // name.innerHTML = ibra.username