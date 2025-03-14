// الكود الخاص بالموقع
// تهيئة مكتبة AOS
AOS.init({
  duration: 1000,
  once: true
});

// فلترة بسيطة لمشاريع المعرض
const filterButtons = document.querySelectorAll('.portfolio-filters button');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // إزالة الكلاس النشط من جميع الأزرار
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.getAttribute('data-filter');

    portfolioItems.forEach(item => {
      if(filter === 'all' || item.getAttribute('data-category') === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
