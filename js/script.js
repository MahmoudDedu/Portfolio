document.addEventListener('DOMContentLoaded', () => {
  // تهيئة مكتبة AOS
  AOS.init({
    duration: 1000,
    once: true
  });

  // فلترة معرض الأعمال
  const filterButtons = document.querySelectorAll('.portfolio-filters button');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // إزالة الكلاس النشط من جميع الأزرار وإضافة الكلاس للزر المختار
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');
      portfolioItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // تفعيل قائمة الهاتف المحمول
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  let isMenuOpen = false;

  // إنشاء زر القائمة (الهامبرغر) إذا لم يكن موجوداً
  let hamburger = document.querySelector('.hamburger');
  if (!hamburger) {
    hamburger = document.createElement('button');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    hamburger.setAttribute('aria-label', 'Toggle menu');
    header.insertBefore(hamburger, nav);
  }

  hamburger.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    nav.classList.toggle('active', isMenuOpen);
    hamburger.innerHTML = isMenuOpen ?
      '<i class="fas fa-times"></i>' :
      '<i class="fas fa-bars"></i>';
  });

  // إغلاق القائمة عند النقر على أي رابط
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      isMenuOpen = false;
      hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });

  // تفعيل التمرير السلس للروابط
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.getElementById("back-to-top");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

