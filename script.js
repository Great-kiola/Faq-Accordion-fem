const faq = document.querySelectorAll('.acc');
let active = document.querySelectorAll('.acc.active');


faq.forEach(faqs => {
    faqs.addEventListener('click', () => {
        faqs.classList.toggle('active');
    })
})

active.forEach(actives => {
    actives.addEventListener('click', () => {
        actives.classList.remove('active');
        actives.nextElementSibling.style.maxHeight = null;
    });

})

// for(let j = 0; j < active.length; j++){
//     active[j].classList.remove("active");
//     active[j].nextElementSibling.style.maxHeight = null; //or 0px
// }

// faq.addEventListener('click', () => {
//     answer.classList.toggle('visibility');
//     icon.classList.toggle('active');
    
// })

