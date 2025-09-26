const infoBox = document.querySelector(".event-info");
const animatedItems = document.querySelectorAll(".custom-btn, .salary-text");

function checkVisibility(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  return rect.top < windowHeight - 50 && rect.bottom > 50;
}

function handleScroll() {
  if (checkVisibility(infoBox)) {
    infoBox.classList.add("show");
  } else {
    infoBox.classList.remove("show");
  }

  animatedItems.forEach(item => {
    if (checkVisibility(item)) {
      item.classList.add("show");
    } else {
      item.classList.remove("show");
    }
  });
}

// أول فحص عند تحميل الصفحة
window.addEventListener("load", handleScroll);

// فحص عند الاسكرول
window.addEventListener("scroll", handleScroll);
