const faq = document.querySelectorAll(".acc");

faq.forEach((faqs) => {
  faqs.addEventListener("click", () => {
    
    const currentActive = document.querySelector(".acc.active");

    if (currentActive && currentActive !== faqs) {
      currentActive.classList.remove("active");
      currentActive.lastElementChild.style.maxHeight = 0;
    }

    faqs.classList.toggle("active");

    const accAnswer = faqs.lastElementChild;
    const height = faqs.classList.contains("active")

    ? accAnswer.scrollHeight : 0;
    accAnswer.style.maxHeight = `${height}px`;
  });
});
