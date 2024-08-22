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

window.onscroll = () =>{

    searchForm.classList.remove('active');

    if(window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }

}

var swiper = new Swiper(".books-slider", {
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


  var swiper = new Swiper(".featured-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

  var swiper = new Swiper(".arrivals-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  function search() {
    let filter = document.getElementById('find').value.toUpperCase();
    let item = document.querySelectorAll('.product');
    let l = document.getElementsByTagName('h3');

    for(var i = 0;i<=l.length;i++){
        let a=item[i].getElementsByTagName('h3')[0];

        let value=a.innerHTML || a.innerText || a.textContent;

        if(value.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display="";
        }
        else {
            item[i].style.display="none";
        }
    }
}




