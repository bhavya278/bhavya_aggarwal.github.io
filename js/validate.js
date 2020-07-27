const email = document.getElementById(`email`);
const phone = document.getElementById(`phone`);
const validEmail = document.getElementById(`validEmail`);
const validPhone = document.getElementById(`validPhone`);


email.addEventListener('blur', ()=>{
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if(regex.test(str)){
        validEmail.innerHTML = `Your Email is Valid`;
        validEmail.style.color = `Green`;
        validEmail.style.fontWeight = `Bold`;
    }
    else{
        validEmail.innerHTML = `Your Email is Invalid`;
        validEmail.style.color = `Red`;
        validEmail.style.fontWeight = `Bold`;
    }
})


phone.addEventListener('blur', ()=>{
    console.log("phone is blurred");
    let regex = /^([0-9]){10}$/;
    let regex2 = /^([0-9]){12}$/;
    let str = phone.value;
    if(regex.test(str) || regex2.test(str)){
        validPhone.innerHTML = `Your Phone Number is Valid`;
        validPhone.style.color = `Green`;
        validPhone.style.fontWeight = `Bold`;
    }
    else{
        validPhone.innerHTML = `Your Phone Number is Invalid`;
        validPhone.style.color = `Red`;
        validPhone.style.fontWeight = `Bold`;
        
    }
})