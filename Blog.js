const newsData = [
  {
    img: "./imgs/latest1.jpg",
    date: "March 13, 2025",
    title: "The Magic of Christmas: A Season of Joy and Celebration",
    excerpt: "Christmas is more than just a holiday—it’s a time of love, joy, and heartfelt traditions...",
    link: "./Blog2.html"
  },
  {
    img: "./imgs/latest2.jpg",
    date: "March 13, 2025",
    title: "The Rise of Green Energy: Powering a Sustainable Future",
    excerpt: "As the world shifts towards sustainability, green energy is revolutionizing...",
    link: "#"
  },
  {
    img: "./imgs/latest3.jpg",
    date: "March 13, 2025",
    title: "Colors of Tradition: A Journey Through Cultural Festivals",
    excerpt: "Cultural festivals are a vibrant celebration of heritage, bringing together...",
    link: "#"
  },
  {
    img: "./imgs/latest4.jpg",
    date: "March 13, 2025",
    title: "Rhythms of the Night: The Ultimate Concert Experience",
    excerpt: "Music concerts are more than just performances; they are electrifying...",
    link: "#"
  },
  {
    img: "./imgs/latest5.jpg",
    date: "March 13, 2025",
    title: "Wander Beyond Borders",
    excerpt: "Travelling is more than just visiting places—it's about experiencing cultures...",
    link: "#"
  },
  {
    img: "https://eevent-api.vercel.app/blogimg/1741760718182-20055.jpg",
    date: "March 12, 2025",
    title: "Global Economic Insights",
    excerpt: "The global economy is constantly evolving, influenced by many factors...",
    link: "#"
  },
  {
    img: "https://eevent-api.vercel.app/blogimg/1741760208552-group-people-doing-yoga-summer-park.png",
    date: "March 12, 2025",
    title: "Health and Wellness Trends 2024",
    excerpt: "Step into 2024 with the latest health and wellness trends designed to transform your lifestyle! This year marks a new era of innovation, sustainability, and...",
    link: "#"
  }
];

const itemsPerPage = 6;
let currentPage = 1;

const newsList = document.getElementById("news-list");
const pagination = document.getElementById("pagination");

function renderNews(page) {
  newsList.innerHTML = "";
  let start = (page - 1) * itemsPerPage;
  let end = start + itemsPerPage;
  let paginatedItems = newsData.slice(start, end);

  paginatedItems.forEach(item => {
    let col = `
      <div class="col-lg-4 col-md-6">
        <div class="card h-100">
          <img src="${item.img}" alt="news">
          <div class="card-body">
            <div class="meta-date">${item.date}</div>
            <h3 class="title">${item.title}</h3>
            <p class="excerpt">${item.excerpt}</p>
            <a href="${item.link}" class="read-more">Read More →</a>
          </div>
        </div>
      </div>
    `;
    newsList.innerHTML += col;
  });
}

function renderPagination() {
  pagination.innerHTML = "";
  let pageCount = Math.ceil(newsData.length / itemsPerPage);

  for (let i = 1; i <= pageCount; i++) {
    let button = document.createElement("button");
    button.innerText = i;
    if (i === currentPage) button.classList.add("active");
    button.addEventListener("click", function () {
      currentPage = i;
      renderNews(currentPage);
      renderPagination();
    });
    pagination.appendChild(button);
  }
}

renderNews(currentPage);
renderPagination();
