// ============================================
// PULSE — Sidebar nav pill slider
// ============================================

const navItems = document.querySelectorAll('.nav-item');
const navPill = document.getElementById('navPill');

function movePill(target) {
    if (!navPill || window.innerWidth <= 880) return;
    navPill.style.transform = `translateY(${target.offsetTop}px)`;
}

// Position pill on the initially active item
const activeItem = document.querySelector('.nav-item.active');
if (activeItem) {
    // wait a tick so layout is ready
    requestAnimationFrame(() => movePill(activeItem));
}

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        movePill(item);
    });
});

// Reposition pill on resize (in case layout shifts)
window.addEventListener('resize', () => {
    const current = document.querySelector('.nav-item.active');
    if (current) movePill(current);
});