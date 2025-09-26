const swiper = new Swiper(".card-Swiper", {
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 6,
    }
  }
});

const cards = document.querySelectorAll('.img_box');

cards.forEach(card => {
  const textElement = card.querySelector('.event-text');
  const originalText = textElement.textContent;

  card.addEventListener('mouseenter', () => {
    textElement.textContent = 'Details';
  });

  card.addEventListener('mouseleave', () => {
    textElement.textContent = originalText; 
  });
});

var swip = new Swiper(".cards-Swiper", {
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  centeredSlides: false,  
  slidesPerView: 1,       
  breakpoints: {
    768: { 
      slidesPerView: 2,
      centeredSlides: false,
    },
    1200: {
      slidesPerView: 3,
      centeredSlides: false,
    }
  }
});



function moveWcuImage() {
  const container = document.querySelector(".wcu-item");
  const img = container.querySelector("img");
  const title = container.querySelector(".wcu-title");
  if (window.innerWidth <= 990) {
    title.style.textAlign = "center";
    if (title.nextElementSibling !== img) {
      title.insertAdjacentElement("afterend", img);
    }
    img.style.display = "block";
    img.style.width = "100%";  
    img.style.maxWidth = "100%"; 
    img.style.height = "auto";
    img.style.margin = "0 auto 30px";
  } else {
    if (container.firstElementChild !== img) {
      container.insertAdjacentElement("afterbegin", img);
    }
    title.style.textAlign = "";
    img.style.display = "";
    img.style.width = "";
    img.style.maxWidth = "";
    img.style.height = "";
    img.style.margin = "";
  }
}
window.addEventListener("load", moveWcuImage);
window.addEventListener("resize", moveWcuImage);

document.addEventListener("DOMContentLoaded", function(){
  var sliderr = new Swiper(".myslider", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });
});


function animateCounter(id, target, duration) {
  let element = document.getElementById(id);
  let start = 0;
  let increment = target / (duration / 20);
  let counter = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target;
      clearInterval(counter);
    } else {
      element.textContent = Math.floor(start);
    }
  }, 20);
}

let countersStarted = false;
let section = document.querySelector(".counts");

let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !countersStarted) {
      animateCounter("counter1", 0, 1500);
      animateCounter("counter2", 22, 1500);
      animateCounter("counter3", 76, 1500);
      animateCounter("counter4", 5, 1500);
      countersStarted = true;
    }
  });
}, { threshold: 0.5 });

observer.observe(section);