const faq = document.querySelector('.accQuestion');
const answer = document.querySelector('.accAnswer');


faq.forEach( (faqs) => {
    faqs.addEventListener('click', () => {
        answer.classList.toggle('visibility');
    })
})


