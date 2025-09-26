const img = document.querySelector(".Blog .img2");
  window.addEventListener("scroll", () => {
    const rect = img.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.top < windowHeight - 50 && rect.bottom > 50) {
      img.classList.add("show"); 
    } else {
      img.classList.remove("show"); 
    }
  });