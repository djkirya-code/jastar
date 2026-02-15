const sliderTrack = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slider-track img');
let currentIndex = 0;
const totalSlides = slides.length;
const slideInterval = 3000; // 3 секунды

function showSlide(index) {
  const slideWidth = slides[0].clientWidth; // ширина одного слайда
  sliderTrack.style.transform = `translateX(-${slideWidth * index}px)`;
}

// Автопереключение
setInterval(() => {
  currentIndex++;
  if (currentIndex >= totalSlides) currentIndex = 0;
  showSlide(currentIndex);
}, slideInterval);

// Делаем resize-адаптацию
window.addEventListener('resize', () => {
  showSlide(currentIndex);
});


// =====================
// BURGER MENU
// =====================
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const overlay = document.getElementById("overlay");

burger.onclick = () => {
  nav.classList.toggle("open");
  overlay.style.display = "block";
};

overlay.onclick = closeMenu;

function closeMenu() {
  nav.classList.remove("open");
  overlay.style.display = "none";
}

// =====================
// MOBILE DROPDOWNS
// =====================
const toggles = document.querySelectorAll(".dropdown-toggle");

toggles.forEach(toggle => {
  toggle.addEventListener("click", e => {
    if (window.innerWidth > 900) return; // ПК — hover

    e.preventDefault();

    const parent = toggle.closest(".dropdown");
    const submenu = parent.querySelector("ul");

    // закрываем остальные
    document.querySelectorAll(".dropdown ul").forEach(ul => {
      if (ul !== submenu) ul.style.display = "none";
    });

    // переключаем текущее
    submenu.style.display =
      submenu.style.display === "block" ? "none" : "block";
  });
});
