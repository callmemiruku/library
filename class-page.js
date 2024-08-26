searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onsclick = () =>{
    searchForm.classList.toggle('active');
}

let loginform = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>{
    loginform.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick = () =>{
    loginform.classList.remove('active');
}




