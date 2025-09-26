const events = [
  {title: "Wanderlust Adventure Retreat", price: 300, location: "680 Iwilei Road, Suite 570, Honolulu, HI 96817, Honolulu, Hawaii", date: "19 Sep, 2030", img: "./imgs/fe4.jpg"},
  {title: "Global Vision Summit", price: 150, location: "1234 SW 8th St, Miami, FL 33135, Miami, Florida", date: "12 Oct, 2030", img: "./imgs/fe2.png"},
  {title: "Global Vision Summit: Shaping the Future Together", price: 200, location: "1234 SW 8th St, Miami, FL 33135, Miami, Florida", date: "05 Nov, 2030", img: "https://eevent-api.vercel.app/eventimg/1741862539889-85605.jpg"},
  {title: "Christmas Event In The City", price: 50, location: "Bottom of the Hill, 1233 17th Street, San Francisco, California", date: "24 Dec, 2030", img: "./imgs/fe1.jpg"},
  {title: "Rhythm Fest: The Ultimate Music Experience", price: 100, location: "1108 N. Adams Street, Wilmington, Delaware", date: "10 Jan, 2031", img: "https://eevent-api.vercel.app/eventimg/1741862331460-9292118.jpg"},
  {title: "Nomad Voyage Travel", price: 150, location: "400 Poplar St, Macon, GA 31201, Georgia", date: "02 Feb, 2031", img: "./imgs/fe3.jpg"},
  {title: "Tech Innovators Expo", price: 150, location: "em State Adventist Academy,  16115 South Montana Ave, Caldwell, Idaho", date: "02 Feb, 2031", img: "http://eevent-api.vercel.app/eventimg/1741865787897-dsc_9795.jfif"},
  {title: "Tech Innovators Expo", price: 150, location: "1111 S Figueroa St, Los Angeles, CA 90015, Los Angeles, California", date: "02 Feb, 2031", img: "https://eevent-api.vercel.app/eventimg/1741772632182-7810.jpg"},
  {title: "Nomad Voyage Travel", price: 150, location: "400 Poplar St, Macon, GA 31201, Macon, Georgia", date: "02 Feb, 2031", img: "https://eevent-api.vercel.app/eventimg/1741867344947-traveling.webp"},
];

const perPage = 6;
let currentPage = 1;

function renderEvents() {
  const container = document.getElementById("events-container");
  container.innerHTML = "";

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const pageEvents = events.slice(start, end);

  pageEvents.forEach(ev => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";
    card.innerHTML = `
      <div class="card-box">
        <div class="card event-card h-100">
          <div class="img-container">
            <span class="event-price">$ ${ev.price}</span>
            <img src="${ev.img}" alt="${ev.title}">
            <span class="event-date">${ev.date}</span>
          </div>
          <div class="card-body">
            <h5 class="card-title">${ev.title}</h5>
            <p class="location"><i class="fa-solid fa-location-dot"></i>${ev.location}</p>
            <div class="d-flex justify-content-center">
              <a href="./event2.html" class="btn btnf">Get Ticket</a>
            </div>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderPagination() {
  const totalPages = Math.ceil(events.length / perPage);
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    li.className = `page-item ${i === currentPage ? "active" : ""}`;
    li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
    li.addEventListener("click", (e) => {
      e.preventDefault();
      currentPage = i;
      renderEvents();
      renderPagination();
    });
    pagination.appendChild(li);
  }
}

renderEvents();
renderPagination();
