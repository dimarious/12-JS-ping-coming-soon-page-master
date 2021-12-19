let input = document.querySelector('.input');
let form = document.querySelector('.form__error');
let regExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
document.querySelector('.btn').onclick = f1;
function f1(event){
    event.preventDefault();
 if(!input.value || !regExp.test(input.value)){
     input.classList.add('error');
     form.classList.add('active');
 }
 setTimeout(()=>{
    input.classList.remove('error');
    document.querySelector('.form__error').classList.remove('active');
},2000)
}